import { FunctionComponent } from 'react';

type Prop = {
  text: string;
  backgroundColor: string;
  left: string;
  right: string;
  width: string;
  height: string;
};

type Props = {
  division: string;
  items: Prop[];
};

export type BlockComponent = FunctionComponent<Prop>;

export type BloclsComponent = FunctionComponent<Props>;
