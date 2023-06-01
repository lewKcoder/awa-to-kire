import { CommonLayouts } from '../common-layouts';
import { Component } from './types';
import { Circle } from '@/components/circle';
import { BeerPanel } from '@/components/beer-panel';

export const BeerPanels: Component = (props) => {
  const { prefectures } = props;

  return (
    <CommonLayouts>
      <div>
        <Circle type="image" href="/" src="/beer-list/color-japan.png" alt="ColorJapanIcon" />
        {prefectures.map(({ prefecture, beers }) => (
          <>
            <div key={prefecture}>{prefecture}</div>
            {beers.map((beer) => (
              <BeerPanel key={beer.name} {...beer} />
            ))}
          </>
        ))}
      </div>
    </CommonLayouts>
  );
};
