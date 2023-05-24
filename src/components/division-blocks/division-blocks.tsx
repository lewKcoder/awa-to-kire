import { Component } from './types';
import { Block } from '@/components/division-blocks/block';
import { Box } from '@chakra-ui/react';

export const DivisionBlocks: Component = (props) => {
  const { division, backgroundColor, hoverBackgroundColor, top, left, items, zIndex } = props;

  return (
    <Box
      className={division}
      left={left && `${left}px`}
      top={top && `${top}px`}
      position={'absolute'}
      zIndex={zIndex && zIndex}
    >
      {items.map((item) => (
        <Block
          key={item.text}
          {...item}
          backgroundColor={backgroundColor}
          hoverBackgroundColor={hoverBackgroundColor}
        />
      ))}
    </Box>
  );
};
