import { Component } from './types';
import { Block } from '@/components/division-blocks/block';
import { Box } from '@chakra-ui/react';

export const DivisionBlocks: Component = (props) => {
  const {
    division,
    backgroundColor,
    hoverBackgroundColor,
    width,
    height,
    top,
    left,
    items,
    zIndex,
  } = props;

  return (
    <Box
      className={division}
      width={`${width}px`}
      height={`${height}px`}
      left={left && `${left}px`}
      top={top && `${top}px`}
      position={'relative'}
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
