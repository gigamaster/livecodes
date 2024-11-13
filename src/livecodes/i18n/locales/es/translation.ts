// @ts-nocheck
// This comment is added by i18n-exclude script and should be automatically removed after build.
// If you see this comment in the file, it means there is something wrong during the build process.

// ATTENTION: This file is auto-generated from source code. Do not edit manually!

import type { I18nTranslation } from '../models';

const translation: I18nTranslation = {
  about: {
    documentations: {
      aboutUs: 'Sobre nosotros',
      contact: 'Contacto',
      heading: 'Documentación',
      home: 'Inicio',
      license: 'Licencia',
    },
    heading: 'Acerca de LiveCodes',
    livecodes: {
      para1:
        '<1><2>LiveCodes</2></1> es un editor de juego de código <3>abierto</3>, <4>rico en características</4> y <5>del lado del cliente</5>. Actualmente, se admiten <6>más de 80 lenguajes/<7></7>frameworks</6>. Se puede usar como una aplicación independiente o se puede <8>incrustar</8> en cualquier página web. Hay muchas formas de <9>precargar un playground</9> con código.',
      para2:
        'Una amplia gama de <1>opciones de configuración</1> lo hace muy flexible. Un potente <2>SDK</2> (para <3>JS/TS</3>, <4>React</4>, <5>Vue</5> y <6>Svelte</6>) facilita la <7>incrustación</7> y la <8>comunicación</8> con playgrounds. Hay disponible una <9>documentación completa</9> con ejemplos de código, demostraciones en vivo y capturas de pantalla.',
    },
    version: {
      app: 'Versión de la aplicación: {{APP_VERSION}}',
      appPermanentUrl: 'URL permanente de la aplicación',
      commit: 'Commit de Git: {{COMMIT_SHA}}',
      heading: 'Versión',
      sdk: 'Versión del SDK: {{SDK_VERSION}}',
      sdkPermanentUrl: 'URL permanente del SDK',
    },
  },
  app: {
    consoleMessage: {
      learnMore: '¡Aprende más! {{docsUrl}} 🚀',
    },
    copy: {
      hint: 'Copiar (Ctrl/Cmd + A, Ctrl/Cmd + C)',
    },
    copyAsUrl: {
      hint: 'Copiar código como URL de datos',
    },
    customSettings: {
      hint: 'Configuraciones personalizadas',
    },
    editorMode: {
      hint: 'Modo del editor',
    },
    editorSettings: {
      hint: 'Configuración del editor',
    },
    externalResources: {
      hint: 'Recursos externos',
    },
    focus: {
      hint: 'Alternar modo de enfoque',
    },
    format: {
      hint: 'Formatear (Alt + Shift + F)',
    },
    fullscreen: {
      hint: 'Pantalla completa',
    },
    logo: {
      title: 'LiveCodes: ¡Área de juego de código que se ejecuta en el navegador!',
    },
    projectInfo: {
      hint: 'Información del proyecto',
    },
    redo: {
      hint: 'Rehacer (Ctrl/Cmd + Shift + Z)',
    },
    result: {
      hint: 'Alternar resultado',
    },
    run: {
      hint: 'Ejecutar (Shift + Enter)',
    },
    share: {
      hint: 'Compartir',
    },
    undo: {
      hint: 'Deshacer (Ctrl/Cmd + Z)',
    },
    untitledProject: 'Proyecto sin título',
  },
  assets: {
    add: {
      dataURL: {
        desc: 'Agregar activo como <1>URL de datos</1> codificada en base64.',
        heading: 'URL de datos',
        label: 'Agregar archivo',
      },
      githubPages: {
        desc: 'Desplegar activo en GitHub Pages. El archivo se envía a la rama <1>gh-pages</1> del repositorio <2>livecodes-assets</2> en tu cuenta de GitHub. Si el repositorio aún no existe, se creará un repositorio público.',
        heading: 'GitHub Pages',
        label: 'Subir archivo',
      },
      heading: 'Agregar activo',
    },
    delete: {
      all: '¿Eliminar {{assets}} activos?',
      one: '¿Eliminar activo: {{asset}}?',
    },
    deleteAll: 'Eliminar todo',
    generic: {
      clickToCopyURL: 'Haz clic para copiar la URL',
    },
    heading: 'Activos',
    link: {
      date: 'Fecha: {{modified}}',
      type: 'Tipo: {{type}}',
      url: 'URL: {{url}}',
    },
    loadFile: {
      error: {
        failedToUpload: 'Error: No se pudo cargar el archivo',
        unauthenticated: 'Error: Usuario no autenticado',
      },
      upload: 'Subir archivo',
      uploading: 'Subiendo...',
    },
    noMatch: 'Ningún activo coincide con estos filtros.',
    noSavedAssets: 'No tienes activos guardados.',
    processAsset: {
      addFile: 'Archivo añadido: ',
      deployNotice: 'El activo debería estar disponible en esta URL pronto (~1 min).',
      success: '¡Archivo añadido a los activos!',
      urlLabel: 'URL: ',
    },
    resetFilters: 'Restablecer',
    search: 'Buscar',
    sort: {
      date: 'Fecha',
      fileName: 'Nombre del archivo',
      heading: 'Ordenar por:',
    },
    type: {
      archive: 'Archivo',
      audio: 'Audio',
      csv: 'CSV',
      font: 'Fuente',
      html: 'HTML',
      icon: 'Icono',
      image: 'Imagen',
      json: 'JSON',
      other: 'Otro',
      script: 'Script',
      stylesheet: 'Hoja de estilos',
      text: 'Texto',
      video: 'Video',
      xml: 'XML',
    },
    types: {
      all: 'Todos los tipos',
    },
    url: {
      fail: 'No se pudo copiar la URL.',
      success: 'La URL se ha copiado al portapapeles.',
    },
  },
  backup: {
    backup: {
      assets: 'Activos',
      button: 'Respaldar',
      desc: 'Respalda los datos de LiveCodes para que puedan restaurarse más tarde en este u otros dispositivos. <1></1> Para obtener más detalles, consulte la <2>documentación</2>',
      heading: 'Respaldo',
      projects: 'Proyectos',
      settings: 'Configuraciones de usuario',
      snippets: 'Fragmentos de código',
      templates: 'Plantillas de usuario',
    },
    backupBtn: 'Respaldar',
    error: {
      atLeastOneStore: 'Seleccionar al menos un almacenamiento para respaldar',
      incorrectFileType: 'Error: Tipo de archivo incorrecto',
    },
    fileInputLabel: 'Restaurar desde archivo',
    heading: 'Respaldo / Restauración',
    inProgress: 'En progreso...',
    restore: {
      desc: 'Restaura los datos de LiveCodes previamente respaldados. <1></1> Si eliges reemplazar el contenido actual, es posible que desees respaldarlo primero. <2></2> Para obtener más detalles, consulte la <3>documentación</3>',
      fromFile: 'Restaurar desde archivo',
      heading: 'Restaurar',
      mode: {
        merge: 'Combinar con el contenido actual',
        replace: 'Reemplazar el contenido actual',
      },
      success: '¡Restaurado con éxito!',
    },
  },
  broadcast: {
    broadcastBtn: {
      start: 'Transmitir',
      stop: 'Detener transmisión',
    },
    broadcasting: 'Transmitiendo...',
    channelURL: 'URL del canal',
    connecting: 'Conectando...',
    desc: 'Transmite la página de resultados a otros navegadores/dispositivos en tiempo real. Para obtener más detalles, consulte la <1>documentación</1>',
    error: {
      generic: '¡La transmisión falló!',
      serverURLRequired: '¡Se requiere la URL del servidor!',
    },
    heading: 'Transmisión',
    includeSourceCode: 'Incluir código fuente',
    serverURL: {
      heading: 'URL del servidor',
    },
  },
  core: {
    broadcast: {
      heading: 'Transmisión',
      successSetToken: 'Token de usuario de transmisión establecido con éxito',
    },
    changeLanguage: {
      hint: 'Cambiar idioma',
      message: 'Cargando {{lang}}. ¡Esto puede tardar un poco!',
    },
    copy: {
      copied: 'Código copiado al portapapeles',
      copiedAsDataURL: 'Código copiado como URL de datos',
      hint: '¡Copiado!',
      title: 'Copiar',
    },
    error: {
      couldNotLoadTemplate: 'No se pudo cargar la plantilla: {{template}}',
      failedToCopyCode: 'No se pudo copiar el código',
      failedToLoadTemplate: 'Fallo al cargar la plantilla',
      failedToLoadTemplates: 'Fallo al cargar las plantillas iniciales',
      failedToParseSettings: 'Fallo al analizar las configuraciones como JSON',
      invalidCommand: '¡Comando inválido!',
      invalidImport: 'URL de importación inválida',
      invalidPanelId: 'ID de panel inválido',
      invalidToken: '¡Token inválido!',
      login: '¡Error de inicio de sesión!',
      logout: '¡Error de cierre de sesión!',
      noResultContainer: 'Contenedor de resultados no encontrado',
      unavailable: 'Comando no disponible',
      unavailableForEmbeds: 'Comando no disponible para incrustaciones',
    },
    export: {
      gist: 'Creando un gist público de GitHub...',
    },
    fork: {
      success: 'Bifurcado como un nuevo proyecto',
    },
    fullScreen: {
      enter: 'Pantalla completa',
      exit: 'Salir de pantalla completa',
    },
    import: {
      loading: 'Cargando proyecto...',
    },
    layout: {
      horizontal: 'Diseño horizontal',
      responsive: 'Diseño responsivo',
      vertical: 'Diseño vertical',
    },
    loadDefaults: {
      template: 'Cargando plantilla predeterminada',
    },
    login: {
      success: 'Inicio de sesión exitoso',
      successWithName: 'Sesión iniciada como: {{name}}',
    },
    logout: {
      success: 'Cierre de sesión exitoso',
    },
    result: {
      hint: 'Mostrar resultado en una nueva ventana',
    },
    save: {
      success: '¡Proyecto guardado localmente en el dispositivo!',
      successWithName: 'Proyecto "{{name}}" guardado en el dispositivo.',
    },
    template: {
      blank: 'Proyecto en blanco',
      delete: '¿Eliminar plantilla "{{item}}"?',
      javascript: 'Plantilla inicial de JavaScript',
      react: 'Plantilla inicial de React',
      saved: 'Guardado como una nueva plantilla',
      typescript: 'Plantilla inicial de TypeScript',
      vue: 'Plantilla inicial de Vue 3',
    },
    unload: {
      notSaved: 'Los cambios que has realizado pueden no guardarse.',
    },
    zoom: {
      hint: 'Zoom',
    },
  },
  customSettings: {
    JSON: 'JSON de configuraciones personalizadas',
    heading: 'Configuraciones personalizadas',
    load: 'Cargar',
  },
  deploy: {
    create: {
      desc: 'Se creará un nuevo repositorio <1>público</1>. La página de resultados se enviará a la rama <2>gh-pages</2>.',
      heading: 'Crear nuevo repositorio',
      repoName: 'Nombre del repositorio <1></1>',
    },
    error: {
      generic: '¡Falló el despliegue!',
      repoNameExists: 'El nombre del repositorio ya existe',
      repoNameRequired: 'Se requiere el nombre del repositorio',
    },
    existing: {
      desc: 'Se añadirá un nuevo commit a la rama <1>gh-pages</1>.',
      heading: 'Repositorio existente',
      repoName: 'Nombre del repositorio',
    },
    generic: {
      commitMessage: 'Mensaje del commit',
      commitSourceCodePublic: 'Commit del código fuente (público)',
      deployBtn: 'Desplegar',
      deploying: 'Desplegando...',
    },
    heading: 'Desplegar en GitHub Pages',
    searchRepo: 'Buscar en tus repositorios públicos...',
  },
  editorSettings: {
    appLanguage: {
      heading: 'Idioma de la interfaz de la aplicación',
      note: 'Se recargará la aplicación para aplicar los cambios después de cambiar el idioma.',
    },
    closeBrackets: 'Cerrar automáticamente paréntesis y comillas',
    codeJarDesc: '* Las características marcadas no están disponibles en CodeJar.',
    default: 'Predeterminado',
    desc: 'Para obtener más detalles, consulte la <1>documentación</1>',
    editor: {
      codejar: 'CodeJar',
      codemirror: 'CodeMirror',
      heading: 'Editor',
      monaco: 'Monaco',
    },
    editorMode: {
      emacs: 'Emacs',
      heading: 'Modo del editor *',
      vim: 'Vim',
    },
    editorTheme: 'Tema del editor',
    emmet: 'Habilitar Emmet *',
    enableAI: {
      heading: 'Habilitar asistente de código IA',
      note: 'Impulsado por <1><2></2></1>',
    },
    fontFamily: 'Familia de fuentes',
    fontSize: 'Tamaño de fuente',
    format: 'Formato',
    heading: 'Configuración del editor',
    lineNumbers: 'Mostrar números de línea',
    notAvailableInCodeJar: 'No disponible en CodeJar',
    preview: 'Vista previa',
    semicolons: 'Formato: Usar punto y coma',
    singleQuote: 'Formato: Usar comillas simples',
    tabSize: 'Tamaño de tabulación',
    theme: 'Modo oscuro',
    trailingComma: 'Formato: Usar comas finales',
    useTabs: {
      heading: 'Indentación',
      spaces: 'Espacios',
      tabs: 'Tabulaciones',
    },
    wordWrap: 'Ajuste de línea',
  },
  embed: {
    activeEditor: {
      heading: 'Editor activo',
      markup: '{{markup}}',
      script: '{{script}}',
      style: '{{style}}',
    },
    activeTool: {
      compiled: 'Compilado',
      console: 'Consola',
      heading: 'Herramienta activa',
      tests: 'Pruebas',
    },
    code: {
      copy: 'Copiar código',
      heading: 'Código',
    },
    desc: 'Consulte la <1>documentación</1> para configuraciones avanzadas.',
    embedType: {
      cdn: 'Script (CDN)',
      heading: 'Tipo de incrustación',
      html: 'HTML',
      iframe: 'Iframe',
      npm: 'JS (npm)',
      react: 'React',
      svelte: 'Svelte',
      vue: 'Vue',
    },
    heading: 'Incrustar proyecto',
    lite: 'Modo ligero',
    loading: {
      click: 'Al hacer clic',
      eager: 'Inmediato',
      heading: 'Carga',
      lazy: 'Diferido',
    },
    mode: {
      codeblock: 'Bloque de código',
      editor: 'Editor',
      full: 'Completo',
      heading: 'Modo de visualización',
      result: 'Resultado',
    },
    permanentUrl: 'URL permanente',
    preview: 'Vista previa',
    previewLoading: 'Cargando vista previa...',
    readonly: 'Solo lectura',
    theme: {
      dark: 'Oscuro',
      heading: 'Tema',
      light: 'Claro',
    },
    tools: {
      closed: 'Cerrado',
      full: 'Completo',
      heading: 'Herramientas',
      none: 'Ninguno',
      open: 'Abierto',
    },
    view: {
      editor: 'Editor',
      heading: 'Vista predeterminada',
      result: 'Resultado',
      split: 'Dividido',
    },
  },
  generic: {
    about: {
      blog: 'Blog',
      configuration: 'Configuración',
      features: 'Características',
      gettingStarted: 'Primeros pasos',
      github: 'GitHub',
      sdk: 'SDK',
      sponsor: 'Patrocinar',
      twitter: '𝕏 / Twitter',
    },
    clickForInfo: 'Clic para información...',
    close: 'Cerrar',
    error: {
      authentication: '¡Error de autenticación!',
      exceededSize: 'Error: Tamaño excedido {{size}} MB',
      failedToReadFile: 'Error: No se pudo leer el archivo',
    },
    loading: 'Cargando...',
    more: 'Más...',
    optional: 'Opcional',
    required: 'Requerido',
    tagline: '¡Un Patio de Código Que Simplemente Funciona!',
  },
  import: {
    bulk: {
      desc: 'Importar en masa múltiples proyectos a tus proyectos guardados. Los proyectos se pueden exportar desde la pantalla de <1>Proyectos guardados</1>.',
      fromFile: 'Importación masiva desde archivo local',
      fromURL: 'Importación masiva desde URL',
      heading: 'Importación masiva',
      started: 'Importación masiva iniciada...',
    },
    code: {
      desc: 'Fuentes compatibles: <1> <2>GitHub gist</2> <3>Archivo de GitHub</3> <4>Directorio en un repositorio de GitHub</4> <5>Fragmento de Gitlab</5> <6>Archivo de Gitlab</6> <7>Directorio en un repositorio de Gitlab</7> <8>JS Bin</8> <9>Código en bruto</9> <10>Código en el DOM de la página web</10> <11>Código en archivo zip</11> <12>Entornos oficiales<13></13>(TypeScript, Vue y Svelte)</12> </1> Para obtener más detalles, consulte la <14>documentación</14>',
      fromFile: 'Importar archivos locales',
      fromURL: 'Importar desde URL',
      heading: 'Importar código',
    },
    error: {
      failedToLoadURL: 'Error: no se pudo cargar la URL',
      invalidConfigFile: 'Archivo de configuración no válido',
      invalidFile: 'Error: Archivo no válido',
    },
    generic: {
      file: 'Archivo local',
      url: 'URL',
    },
    heading: 'Importar',
    json: {
      desc: 'Importar un único JSON de proyecto al editor. Un proyecto se puede exportar desde el menú de la aplicación Proyecto → Exportar → Exportar proyecto (JSON).',
      fromFile: 'Importar proyecto desde archivo local',
      fromURL: 'Importar proyecto desde URL',
      heading: 'Importar JSON de proyecto',
    },
    success: '¡Importación exitosa!',
  },
  login: {
    accessAllowed: 'Permitir acceso a:',
    desc: '<1>Al iniciar sesión, aceptas que se pueden almacenar <2>cookies</2> en tu dispositivo.</1> <3> <4>¿Por qué se requieren estos permisos?</4> </3> <5> <6>¿Cómo cambiar/revocar permisos?</6> </5>',
    gist: 'Gists',
    heading: 'Iniciar sesión con GitHub',
    loginAs: 'Sesión iniciada como {{name}}',
    loginBtn: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    privateRepo: 'Repositorios privados',
    publicRepo: 'Repositorios',
  },
  menu: {
    about: 'Acerca de Livecodes …',
    appHelp: {
      heading: 'Ayuda',
      hint: 'Ayuda',
    },
    appProject: {
      heading: 'Proyecto',
      hint: 'Proyecto',
    },
    appSettings: {
      heading: 'Configuración',
      hint: 'Configuración',
    },
    assets: 'Activos …',
    autoSave: 'Guardado automático',
    autoUpdate: 'Actualización automática',
    backup: 'Copia de seguridad / Restaurar …',
    broadcast: 'Transmitir …',
    customSettings: 'Configuraciones personalizadas …',
    delay: {
      heading: 'Retraso: <1>1.5</1>s',
      hint: 'Retraso antes de la actualización automática',
    },
    deploy: 'Desplegar …',
    editorSettings: 'Configuración del editor …',
    embed: 'Incrustar …',
    export: {
      codepen: 'Editar en CodePen',
      gist: 'Exportar a GitHub Gist',
      heading: 'Exportar',
      jsfiddle: 'Editar en JSFiddle',
      json: 'Exportar proyecto (JSON)',
      result: 'Exportar resultado (HTML)',
      src: 'Exportar código fuente (ZIP)',
    },
    formatOnsave: 'Formatear al guardar',
    import: 'Importar …',
    layout: 'Diseño vertical',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    new: 'Nuevo …',
    open: 'Abrir …',
    project: 'Información del proyecto …',
    recoverUnsaved: 'Recuperar no guardado',
    resources: 'Recursos externos …',
    save: 'Guardar',
    saveAs: {
      fork: 'Bifurcar (Nuevo proyecto)',
      heading: 'Guardar como',
      template: 'Plantilla',
    },
    share: 'Compartir …',
    showSpacing: {
      heading: 'Mostrar espaciado',
      hint: 'Presiona Alt/Opción y mueve el cursor sobre la página de resultados',
    },
    snippets: 'Fragmentos de código …',
    sync: 'Sincronizar (beta) … <1> ⏳</1>',
    theme: 'Tema oscuro',
    welcome: {
      heading: 'Bienvenida …',
      hint: 'Mostrar pantalla de bienvenida al inicio',
    },
  },
  open: {
    defaultTemplate: 'Plantilla predeterminada ',
    delete: {
      all: '¿Eliminar {{projects}} proyectos?',
      deleting: 'Eliminando proyectos...',
      one: '¿Eliminar proyecto: {{project}}?',
    },
    deleteAll: 'Eliminar todo',
    exportAll: 'Exportar todo',
    filter: {
      language: 'filtrar por idioma',
      tag: 'filtrar por etiqueta',
    },
    heading: 'Proyectos guardados',
    import: 'Importar',
    lastModified: 'Última modificación: {{modified}}',
    noData: {
      desc: 'Puedes guardar un proyecto desde (menú&nbsp;de&nbsp;configuración&nbsp;&gt;&nbsp;Guardar) o con el atajo de teclado (Ctrl/Cmd&nbsp;+&nbsp;S).',
      heading: 'No tienes proyectos guardados.',
    },
    noMatch: 'Ningún proyecto coincide con estos filtros.',
    placeholder: {
      allLanguages: 'Todos los idiomas',
      filterByTags: 'Filtrar por etiquetas',
      search: 'Buscar',
    },
    removeDefault: '(desmarcar)',
    reset: 'Restablecer',
    setAsDefault: 'Establecer como predeterminado',
    sort: {
      heading: 'Ordenar por:',
      lastModified: 'Última modificación',
      title: 'Título',
    },
  },
  project: {
    desc: 'Descripción',
    head: 'Añadir a &lt;head&gt;',
    heading: 'Información del proyecto',
    htmlAttr: 'Atributos para &lt;html&gt;',
    tags: 'Etiquetas',
    title: 'Título del proyecto',
  },
  recoverPrompt: {
    desc: '¡Tu último proyecto tiene cambios sin guardar!',
    heading: '¿Recuperar proyecto no guardado?',
    meta: 'Título: <1></1> <2></2> Última modificación: <3></3>',
    notShowAgain: 'No mostrar esto de nuevo.',
    prompt: {
      discard: 'Descartar proyecto no guardado',
      heading: '<1></1>¿Quieres recuperarlo ahora?',
      recover: 'Recuperar proyecto en el editor',
      save: 'Guardar en el dispositivo y continuar',
    },
  },
  resources: {
    browseOnJsDelivr: 'Explorar archivos del paquete en jsDelivr',
    cssPresets: {
      heading: 'Preajustes CSS',
      none: 'Ninguno',
      normalizeCss: 'Normalize.css',
      resetCss: 'Reset CSS',
    },
    error: {
      failedToLoadResults: '¡Error al cargar los resultados!',
      noResultsFound: 'No se encontraron resultados para: ',
    },
    fonts: {
      add: 'Agregar',
      heading: 'Fuentes <1>(proporcionado por Google Fonts)</1>',
      select: 'Seleccionar fuente ...',
    },
    heading: 'Recursos externos',
    scripts: 'Scripts externos',
    search: {
      heading: 'Buscar paquetes <1>(proporcionado por jsDelivr)</1>',
      placeholder: 'p. ej. jquery, lodash@4, bootstrap@5.2.3, ...',
    },
    stylesheets: 'Hojas de estilo externas',
    urlDesc: 'Agrega URLs de hojas de estilo/scripts. Cada URL debe estar en una línea separada.',
  },
  savePrompt: {
    heading: 'Cambios sin guardar',
    prompt: {
      cancel: 'Cancelar',
      discard: 'No guardar',
      heading: 'Los cambios que has realizado pueden no guardarse. <1></1> ¿Quieres guardar ahora?',
      save: 'Guardar',
    },
  },
  share: {
    characters: '{{urlLength}} caracteres',
    copy: {
      clickToCopy: 'Haz clic para copiar',
      copied: 'URL copiada al portapapeles',
    },
    encodedURL: 'Obtener URL codificada',
    error: {
      failedToCopy: '¡Falló la copia al portapapeles!',
      failedToGenerateURL: '¡Error al generar URL corta!',
    },
    expireInOneYear: 'Expira en 1 año',
    generateURL: 'Generando URL …',
    heading: 'Compartir',
    permanentURL: 'URL permanente',
    qrcode: {
      clickToDownload: 'Haz clic para descargar',
      generating: 'Generando...',
    },
    services: {
      copyUrl: 'Copiar URL',
      devTo: 'Dev.to',
      email: 'Correo electrónico',
      facebook: 'Facebook',
      hackerNews: 'Hacker News',
      linkedIn: 'LinkedIn',
      pinterest: 'Pinterest',
      pocket: 'Pocket',
      qrCode: 'Código QR',
      reddit: 'Reddit',
      share: 'Compartir vía …',
      telegram: 'Telegram',
      tumblr: 'Tumblr',
      twitter: '𝕏 / Twitter',
      whatsApp: 'WhatsApp',
    },
    shortURL: 'Obtener URL corta',
  },
  snippets: {
    action: {
      copy: 'Copiar',
      delete: 'Eliminar',
      edit: 'Editar',
    },
    add: {
      code: 'Código',
      desc: 'Descripción',
      heading: 'Agregar fragmento',
      language: 'Idioma',
      save: 'Guardar',
      snippets: 'Fragmentos',
      title: 'Título',
    },
    copy: {
      clickToCopySnippet: 'Haz clic para copiar el fragmento',
      copied: 'El fragmento se ha copiado al portapapeles.',
    },
    delete: {
      all: '¿Eliminar {{snippets}} fragmentos?',
      one: '¿Eliminar fragmento: {{snippet}}?',
    },
    deleteAll: 'Eliminar todo',
    error: {
      failedToCopy: 'No se pudo copiar la URL.',
      noTitle: 'Agregar un título al fragmento.',
    },
    filter: {
      language: 'Filtrar por lenguaje',
    },
    heading: 'Fragmentos de código',
    lastModified: 'Última modificación: {{modified}}',
    noMatch: 'Ningún fragmento coincide con estos filtros.',
    noSavedSnippets: 'No tienes fragmentos guardados.',
    placeholder: {
      allLanguages: 'Todos los lenguajes',
      search: 'Buscar',
    },
    reset: 'Restablecer',
    save: {
      success: '¡Fragmento guardado localmente en el dispositivo!',
    },
    sort: {
      date: 'Fecha',
      heading: 'Ordenar por:',
      title: 'Título',
    },
    text: 'Texto plano',
  },
  splash: {
    loading: 'Cargando LiveCodes…',
  },
  sync: {
    autoSync: 'Sincronización automática',
    create: {
      desc: 'Se creará un nuevo repositorio <1>privado</1>. Tus datos locales de LiveCodes se sincronizarán con la rama <2>main</2>.',
      heading: 'Crear nuevo repositorio',
      repoName: 'Nombre del repositorio',
    },
    error: {
      generic: '¡Falló la sincronización!',
      repoNameRequired: 'Se requiere el nombre del repositorio',
    },
    existing: {
      desc: 'Tus datos locales de LiveCodes se sincronizarán con la rama <1>main</1>.',
      heading: 'Repositorio existente',
      repoName: 'Nombre del repositorio',
    },
    heading: 'Sincronizar con repositorio de GitHub',
    searchRepos: 'Buscar en tus repositorios...',
    success: '¡Sincronización completa!',
    syncBtn: 'Sincronizar',
    syncInProgress: 'Sincronización en progreso...',
    syncStarted: 'Sincronización iniciada...',
  },
  templates: {
    heading: 'Nuevo Proyecto',
    noUserTemplates: {
      desc: 'Puedes guardar un proyecto como plantilla desde <1></1>(Menú de la aplicación &gt; Guardar como &gt; Plantilla).',
      heading: 'No tienes plantillas guardadas.',
    },
    starter: {
      angular: 'Inicio Angular',
      assemblyscript: 'Inicio AssemblyScript',
      astro: 'Inicio Astro',
      backbone: 'Inicio Backbone',
      blank: 'Proyecto en Blanco',
      blockly: 'Inicio Blockly',
      bootstrap: 'Inicio Bootstrap',
      civet: 'Inicio Civet',
      clio: 'Inicio Clio',
      clojurescript: 'Inicio ClojureScript',
      coffeescript: 'Inicio CoffeeScript',
      commonlisp: 'Inicio Common Lisp',
      cpp: 'Inicio C++',
      diagrams: 'Inicio Diagramas',
      fennel: 'Inicio Fennel',
      gleam: 'Inicio Gleam',
      go: 'Inicio Go',
      heading: 'Plantillas de Inicio',
      imba: 'Inicio Imba',
      javascript: 'Inicio JavaScript',
      jest: 'Inicio Jest',
      'jest-react': 'Inicio Jest/React',
      jquery: 'Inicio jQuery',
      julia: 'Inicio Julia',
      knockout: 'Inicio Knockout',
      lit: 'Inicio Lit',
      livescript: 'Inicio LiveScript',
      loading: 'Cargando plantillas de inicio...',
      lua: 'Inicio Lua',
      'lua-wasm': 'Inicio Lua (Wasm)',
      malina: 'Inicio Malina.js',
      markdown: 'Inicio Markdown',
      mdx: 'Inicio MDX',
      ocaml: 'Inicio Ocaml',
      perl: 'Inicio Perl',
      php: 'Inicio PHP',
      'php-wasm': 'Inicio PHP (Wasm)',
      postgresql: 'Inicio PostgreSQL',
      preact: 'Inicio Preact',
      prolog: 'Inicio Prolog',
      python: 'Inicio Python',
      r: 'Inicio R',
      react: 'Inicio React',
      'react-native': 'Inicio React Native',
      reason: 'Inicio Reason',
      rescript: 'Inicio ReScript',
      riot: 'Inicio Riot.js',
      ruby: 'Inicio Ruby',
      'ruby-wasm': 'Inicio Ruby (Wasm)',
      scheme: 'Inicio Scheme',
      solid: 'Inicio Solid',
      sql: 'Inicio SQL',
      stencil: 'Inicio Stencil',
      svelte: 'Inicio Svelte',
      tailwindcss: 'Inicio Tailwind CSS',
      tcl: 'Inicio Tcl',
      teal: 'Inicio Teal',
      typescript: 'Inicio TypeScript',
      vue: 'Inicio Vue 3 SFC',
      vue2: 'Inicio Vue 2',
      wat: 'Inicio WebAssembly Text',
    },
    user: {
      heading: 'Mis Plantillas',
      loading: 'Cargando plantillas de usuario...',
    },
  },
  testEditor: {
    heading: 'Editar Pruebas',
    load: 'Cargar',
    tests: 'Pruebas',
  },
  toolspane: {
    close: 'Cerrar',
    compiled: {
      title: 'Compilado',
    },
    console: {
      clear: 'Limpiar consola',
      title: 'Consola',
    },
    test: {
      edit: 'Editar',
      error: '<1><2>¡Error en la prueba!</2></1>',
      loading: '<1>Cargando pruebas...</1>',
      noTest: '<1>¡Este proyecto no tiene pruebas!</1>',
      reset: 'Reiniciar',
      run: {
        desc: 'Ctrl/Cmd + Alt + T',
        heading: 'Ejecutar',
      },
      summary: {
        desc: 'Pruebas: {{failed}}\n         {{passed}}\n         {{skipped}}\n         {{total}}<1></1>\nTiempo: {{duration}}s',
        failed: '{{failedNum}} fallidas',
        passed: '{{passedNum}} pasadas',
        skipped: '{{skippedNum}} omitidas',
        total: '{{totalNum}} total',
      },
      title: 'Pruebas',
      watch: {
        desc: 'Ejecutar pruebas cuando el código cambie',
        heading: 'Observar',
      },
    },
  },
  welcome: {
    about: {
      documentation: 'Documentación',
      heading: 'Acerca de LiveCodes',
    },
    heading: 'Bienvenido',
    recent: {
      heading: 'Reciente',
    },
    recover: {
      cancel: 'Cancelar',
      heading: 'Recuperar',
      lastModified: 'Última modificación: <1></1>',
      recover: 'Recuperar',
      save: 'Guardar',
      unsavedChanges: 'Tu último proyecto tenía cambios sin guardar:',
    },
    showOnStartup: 'Mostrar al inicio',
    start: {
      heading: 'Comenzar',
      import: 'Importar...',
      loadDefaultTemplate: 'Cargar plantilla predeterminada',
      new: 'Nuevo...',
      noDefaultTemplate: 'Sin plantilla predeterminada',
      open: 'Abrir...',
    },
    templates: {
      heading: 'Plantillas de Inicio',
    },
  },
};

export default translation;
