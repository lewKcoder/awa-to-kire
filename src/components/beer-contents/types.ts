type Props = {
  style: string;
  color: string;
  alcohol: number;
  bitterness: number;
  sweetness: number;
  fullBodied: number;
};

export type Component = React.FunctionComponent<Props>;
