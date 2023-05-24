import { FunctionComponent } from 'react';

export type Props = {
  text: string;
  width: string;
  height: string;
  top?: string;
  left?: string;
};

export type Component = FunctionComponent<
  Props & {
    backgroundColor: string;
    hoverBackgroundColor: string;
  }
>;
