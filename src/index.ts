import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { LayoutProps } from './types';

const config: SystemConfig<LayoutProps> = {
  width: {
    property: 'width',
    scale: ThemeKey.sizes,
  },
  height: {
    property: 'height',
    scale: ThemeKey.sizes,
  },
  minWidth: {
    property: 'minWidth',
    scale: ThemeKey.sizes,
  },
  minHeight: {
    property: 'minHeight',
    scale: ThemeKey.sizes,
  },
  maxWidth: {
    property: 'maxWidth',
    scale: ThemeKey.sizes,
  },
  maxHeight: {
    property: 'maxHeight',
    scale: ThemeKey.sizes,
  },
  size: {
    properties: ['width', 'height'],
    scale: ThemeKey.sizes,
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
};

export const layout = system(config);

export { LayoutProps };
export default layout;
