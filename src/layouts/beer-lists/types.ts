type Beers = {
  name: string;
  style: string;
  color: string;
  alcohol: number;
  bitterness: string;
  sweetness: string;
  'full-bodied': string;
  feature: string;
}[];

type Regions = {
  prefectures: {
    prefecture: string;
    beers: Beers;
  }[];
};

export type Component = React.FunctionComponent<Regions>;
