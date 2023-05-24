import { FunctionComponent } from 'react';

type Prop = {
  text: string;
  backgroundColor: string;
  width: string;
  height: string;
  top?: string;
  left?: string;
};

type Props = {
  division: string;
  width: string;
  height: string;
  items: Prop[];
};

export type BlockComponent = FunctionComponent<Prop>;

export type BloclsComponent = FunctionComponent<Props>;
