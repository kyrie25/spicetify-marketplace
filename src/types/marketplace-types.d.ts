declare global {
  interface Window {
    Marketplace: Record<string, unknown>;
  }
}

// e.g. CONFIG.tabs
export type TabItemConfig = {
  name: string;
  enabled: boolean;
};

export type SortBoxOption = {
  key: string;
  value: string;
};

export type TabType = "Extensions" | "Themes" | "Snippets" | "Installed";

export type CardType = "extension" | "theme" | "snippet";

export type RepoType = "extension" | "theme";

export type Author = {
  name: string;
  url: string;
};

// From snippets.json
export type Snippet = {
  title: string;
  description: string;
  code: string;

  // TODO: clean this up somehow
  // It complains bitterly in Card.tsx
  // if I don't have all the same properties as CardItem
  manifest: undefined;
  subtitle: undefined;
  authors: undefined;
  user: undefined;
  repo: undefined;
  branch: undefined;
  imageURL: undefined;
  extensionURL: undefined;
  readmeURL: undefined;
  stars: undefined;
  tags: undefined;
  cssURL: undefined;
  schemesURL: undefined;
  include: undefined;
};

// From `fetchExtensionManifest()` and `fetchThemeManifest()`
export type Manifest = {
  name: string;
  description: string;
  main: string;
  authors: Author[];
  preview: string;
  readme: string;

  // TODO: split these into different types?
  tags?: string[];
  usercss?: string;
  schemes?: string[];
  include?: string[];
};

// From fetchExtensionManifest
// (Card.props.item)
export type CardItem = {
  manifest: Manifest;
  title: string;
  subtitle: string;
  authors: Author[];
  user: string;
  repo: string;
  branch: string;
  imageURL: string;
  extensionURL: string;
  readmeURL: string;
  stars: number;
  tags: string[];

  // For themes only
  cssURL?: string;
  schemesURL?: string;
  include?: string[];

  // TODO: clean this up somehow
  // It complains bitterly in Card.tsx
  // if I don't have all the same properties as CardItem
  code: undefined;
  description: undefined;
};

// TODO: use this in `fetchThemeManifest()`
// export type ThemeCardItem = CardItem & {
//   cssURL?: string;
//   schemesURL?: string;
//   include?: string[];
// };

export type VisualConfig = {
  stars: boolean;
  tags: boolean;
  hideInstalled: boolean;
  colorShift: boolean;
  // Legacy from reddit app
  type: boolean;
  // I was considering adding watchers as "followers" but it looks like the value is a duplicate
  // of stargazers, and the subscribers_count isn't returned in the main API call we make
  // https://github.community/t/bug-watchers-count-is-the-duplicate-of-stargazers-count/140865/4
  followers: boolean;
}

// example colour scheme
// const exampleSchemes = {
//   "blue": {
//     "text": "00bcd4",
//     "subtext": "ff9800",
//     "main": "ff5722",
//   },
//   "red": {
//     "text": "00bcd4",
//     "subtext": "ff9800",
//     "main": "2257ff",
//   },
// };

// https://bobbyhadz.com/blog/typescript-key-string-string
export type ColourScheme = {
  [key: string]: string;
};

export type SchemeIni = {
  [key: string]: ColourScheme;
};

export type Config = {
  // Fetch the settings and set defaults. Used in Settings.js
  visual: VisualConfig,
  tabs: TabItemConfig[],
  activeTab: string;
  theme: {
    activeThemeKey?: string;
    schemes?: SchemeIni;
    activeScheme?: string | null;
  },
};
