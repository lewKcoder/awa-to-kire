import { FunctionComponent } from 'react';
import { Props as BlockComponentProps } from './block/types';

type Props = {
  division: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  width: string;
  height: string;
  top?: string;
  left?: string;
  items: BlockComponentProps[];
};

export type Component = FunctionComponent<Props>;
