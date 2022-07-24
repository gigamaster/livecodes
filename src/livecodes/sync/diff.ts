import { diff, Diff } from 'deep-diff';

import {
  Doc,
  Map as YMap,
  Array as YArray,
  AbstractType,
  encodeStateAsUpdate,
  applyUpdate,
} from 'yjs';

export const Y = { Doc, Map: YMap, Array: YArray, AbstractType, encodeStateAsUpdate, applyUpdate };
export const DeepDiff = { diff };
export type { Diff, YMap, YArray, Doc, AbstractType };

export function toJSON(source: any): any {
  if (source instanceof Y.AbstractType) {
    source = source.toJSON();
  }

  if (Array.isArray(source)) {
    return source.map(toJSON);
  }

  if (typeof source === 'object' && source !== null) {
    const obj = {};
    for (const [key, value] of Object.entries(source)) {
      (obj as any)[key] = toJSON(value);
    }
    return obj;
  }

  return source;
}

function toYjsType(source: any) {
  if (Array.isArray(source)) {
    return new Y.Array();
  }

  if (typeof source === 'object' && source !== null) {
    return new Y.Map();
  }

  return source;
}

function getEntries(source: any): any[] {
  if (Array.isArray(source)) {
    return [...source.entries()];
  }

  if (typeof source === 'object' && source !== null) {
    return Object.entries(source);
  }

  if (source instanceof Y.Array) {
    return source.map((value, index) => [index, value]);
  }

  if (source instanceof Y.Map) {
    return [...source.entries()];
  }

  return [];
}

function setValue(target: any, key: string | number, value: any) {
  const yValue = toYjsType(value);

  if (target instanceof Y.Map) {
    target.set(String(key), yValue);
    getEntries(value).forEach(([k, v]) => {
      setValue(target.get(String(key)), k, v);
    });
    return;
  }

  if (target instanceof Y.Array && typeof key === 'number') {
    if (target.length > key) {
      target.delete(key, 1);
    }
    const over = key - target.length;
    if (over > 0) {
      target.push(Array(over).fill(null));
    }
    target.insert(key, [yValue]);

    getEntries(value).forEach(([k, v]) => {
      setValue(target.get(key), k, v);
    });
    return;
  }

  target[key] = yValue;
}

function applyArrayChange(arr: YArray<any>, index: number, change: Diff<any>) {
  if (change.path && change.path.length) {
    let it = arr.get(index);
    let i: number;
    const u = change.path.length - 1;
    for (i = 0; i < u; i++) {
      it = it.get(change.path[i]);

      switch (change.kind) {
        case 'A':
          applyArrayChange(it.get(change.path[i]), change.index, change.item);
          break;
        case 'D':
          it.delete(change.path[i], 1);
          break;
        case 'E':
        case 'N':
          setValue(it, change.path[i], change.rhs);
          break;
      }
    }
  } else {
    switch (change.kind) {
      case 'A':
        applyArrayChange(arr.get(index), change.index, change.item);
        break;
      case 'D':
        arr.delete(index, 1);
        break;
      case 'E':
      case 'N':
        setValue(arr, index, change.rhs);
        break;
    }
  }
  return arr;
}

export function applyChange<LHS = any, RHS = any>(target: any, change: Diff<LHS, RHS>) {
  if (target && change && change.kind) {
    let it = target;
    let i = -1;
    const last = change.path ? change.path.length - 1 : 0;
    while (++i < last) {
      if (typeof it.get(change.path?.[i]) === 'undefined') {
        setValue(
          it,
          change.path?.[i],
          typeof change.path?.[i + 1] === 'number' ? new Y.Array() : new Y.Map(),
        );
      }
      it = it.get(change.path?.[i]);
    }
    switch (change.kind) {
      case 'A':
        if (change.path && typeof it.get(change.path[i]) === 'undefined') {
          setValue(it, change.path[i], new Y.Array());
        }
        applyArrayChange(change.path ? it.get(change.path[i]) : it, change.index, change.item);
        break;
      case 'D':
        it.delete(change.path?.[i], 1);
        break;
      case 'E':
      case 'N':
        setValue(it, change.path?.[i], change.rhs);
        break;
    }
  }
}
