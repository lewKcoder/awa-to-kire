import { FunctionComponent } from 'react';
import { Props as BlockComponentProps } from './block/types';

type Props = {
  division: string;
  backgroundColor: string;
  top?: string;
  left?: string;
  zIndex?: number;
  items: BlockComponentProps[];
};

export type Component = FunctionComponent<Props>;
