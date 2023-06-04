export type Prefectures = {
  prefectures: {
    prefecture: string;
    beers: Beer[];
  }[];
};

export type Beer = {
  name: string;
  src: string;
  alt: string;
  style: string;
  color: string;
  alcohol: number;
  bitterness: number;
  sweetness: number;
  fullBodied: number;
  feature: string;
};

export type Regions = {
  [key: string]: Prefectures;
};
