export type Prefectures = {
  prefectures: {
    prefecture: string;
    beers: Beers;
  }[];
};

export type Beers = {
  name: string;
  style: string;
  color: string;
  alcohol: number;
  bitterness: string;
  sweetness: string;
  'full-bodied': string;
  feature: string;
}[];

export type Regions = {
  [key: string]: {
    prefectures: {
      prefecture: string;
      beers: Beers;
    }[];
  };
};
