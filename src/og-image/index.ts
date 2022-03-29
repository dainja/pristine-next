interface Config {
  title: string;
  id: string;
}

export const configs: Record<string, Config> = {
  unknown: {
    id: "unknown",
    title: "Unknown",
  },
  start: {
    id: "start",
    title: "Start",
  },
  pricelist: {
    id: "pricelist",
    title: "Prislista",
  },
};

export type ImageConfigKeys = keyof typeof configs;

export function getImageConfig(config?: string | string[]) {
  if (!config) {
    return configs.unknown;
  }
  if (Array.isArray(config)) {
    config = config.join("/");
  }
  return configs[config] ?? configs.unknown;
}
