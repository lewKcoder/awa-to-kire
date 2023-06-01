export type Prefectures = {
  prefectures: {
    prefecture: string;
    beers: Beer[];
  }[];
};

export type Beer = {
  name: string;
  style: string;
  color: string;
  alcohol: number;
  bitterness: string;
  sweetness: string;
  fullBodied: string;
  feature: string;
};

export type Regions = {
  [key: string]: Prefectures;
};
