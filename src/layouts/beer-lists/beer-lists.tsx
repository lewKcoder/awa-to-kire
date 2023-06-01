import { CommonLayouts } from '../common-layouts';
import { Component } from './types';

export const BeerLists: Component = (props) => {
  const { prefectures } = props;

  return (
    <CommonLayouts>
      <div>
        {prefectures.map(({ prefecture, beers }) => (
          <div key={prefecture}>{prefecture}</div>
        ))}
      </div>
    </CommonLayouts>
  );
};
