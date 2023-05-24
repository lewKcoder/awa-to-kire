import { Component } from './types';
import { DivisionBlocks } from '@/components/division-blocks';
import data from './data.json';

export const HokkaidouTouhoku: Component = () => {
  return <DivisionBlocks {...data} />;
};
