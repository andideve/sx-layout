import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

export interface LayoutProps {
  width?: ResponsiveValue<CSSProperties['width']>;
  height?: ResponsiveValue<CSSProperties['height']>;
  minWidth?: ResponsiveValue<CSSProperties['minWidth']>;
  minHeight?: ResponsiveValue<CSSProperties['minHeight']>;
  maxWidth?: ResponsiveValue<CSSProperties['maxWidth']>;
  maxHeight?: ResponsiveValue<CSSProperties['maxHeight']>;
  size?: ResponsiveValue<CSSProperties['width'] | CSSProperties['height']>;
  overflow?: ResponsiveValue<CSSProperties['overflow']>;
  overflowX?: ResponsiveValue<CSSProperties['overflowX']>;
  overflowY?: ResponsiveValue<CSSProperties['overflowY']>;
  display?: ResponsiveValue<CSSProperties['display']>;
  verticalAlign?: ResponsiveValue<CSSProperties['verticalAlign']>;
}
