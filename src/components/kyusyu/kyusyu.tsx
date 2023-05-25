import { Component } from './types';
import { DivisionBlocks } from '@/components/division-blocks';
import data from './data.json';

export const Kyusyu: Component = () => {
  return <DivisionBlocks {...data} />;
};
