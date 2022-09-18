import { ReactElement } from "react";

export interface SectionProps {
  id: string;
  Element: () => ReactElement;
  pageProps?: any;
  start?: boolean;
}

export type SectionConfigStarter = Omit<SectionConfig, "pageProps">;

export type HardcodedConfig = Array<SectionConfigStarter>;

export type SectionConfig = Array<SectionProps>;
