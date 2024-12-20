## API Report File for "@red-hat-developer-hub/backstage-plugin-marketplace-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
// @public (undocumented)
export const MARKETPLACE_API_VERSION = 'marketplace.backstage.io/v1alpha1';

// @public (undocumented)
export enum MarketplaceKinds {
  // (undocumented)
  plugin = 'Plugin',
  // (undocumented)
  pluginList = 'PluginList',
}

// @public (undocumented)
export interface MarketplacePluginEntry {
  // (undocumented)
  metadata: MarketplacePluginMetadata;
  // (undocumented)
  spec?: MarketplacePluginSpec;
}

// @public (undocumented)
export interface MarketplacePluginLink {
  // (undocumented)
  icon?: string;
  // (undocumented)
  title?: string;
  // (undocumented)
  type?: string;
  // (undocumented)
  url: string;
}

// @public (undocumented)
export interface MarketplacePluginList {
  // (undocumented)
  metadata: MarketplacePluginMetadata;
  // (undocumented)
  spec?: {
    plugins: string[];
  } & MarketplacePluginSpec;
}

// @public (undocumented)
export interface MarketplacePluginMetadata {
  // (undocumented)
  annotations?: Record<string, string>;
  // (undocumented)
  description?: string;
  // (undocumented)
  labels?: Record<string, string>;
  // (undocumented)
  links?: MarketplacePluginLink[];
  // (undocumented)
  name: string;
  // (undocumented)
  tags?: string[];
  // (undocumented)
  title: string;
}

// @public (undocumented)
export interface MarketplacePluginSpec {
  // (undocumented)
  categories?: string[];
  // (undocumented)
  description?: string;
  // (undocumented)
  developer?: string;
  // (undocumented)
  highlights?: string[];
  // (undocumented)
  icon?: string;
  // (undocumented)
  installation?: {
    markdown?: string;
    appconfig?: string;
  };
}
```
