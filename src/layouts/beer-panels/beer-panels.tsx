import { CommonLayouts } from '../common-layouts';
import { Component } from './types';
import { Circle } from '@/components/circle';
import { BeerPanel } from '@/components/beer-panel';
import { Text, Box } from '@chakra-ui/react';

export const BeerPanels: Component = (props) => {
  const { prefectures } = props;

  return (
    <CommonLayouts>
      <Circle type="image" href="/" src="/beer-list/color-japan.png" alt="ColorJapanIcon" />
      <Box padding={'0 64px'}>
        {prefectures.map(({ prefecture, beers }) => (
          <Box key={prefecture} marginBottom={'32px'} id={prefecture}>
            <Text fontWeight={900} fontSize={'22px'} padding={'24px 0'}>
              {prefecture}
            </Text>
            {beers.map((beer) => (
              <BeerPanel key={beer.name} {...beer} />
            ))}
          </Box>
        ))}
      </Box>
    </CommonLayouts>
  );
};
