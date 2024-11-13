import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'LiveCodes storybook',
  brandImage: './livecodes-text-logo.svg',
  brandTarget: '_self',
  // UI
  appBg: '#1e1e1e',
  appContentBg: '#1c1c1c',
  appPreviewBg: '#111',
  appBorderColor: '#1f1f1f',
  appBorderRadius: 4,
});

addons.setConfig({
  theme,
});
