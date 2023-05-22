import { Component } from './types';
import styles from './styles.scss';
import { DivisionBlocks } from '@/components/division-blocks';
import data from './data.json';

export const HokkaidouTouhoku: Component = () => {
  return (
    <div className="container">
      <DivisionBlocks {...data} />

      <style jsx>{``}</style>
    </div>
  );
};
