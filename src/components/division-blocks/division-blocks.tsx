import { BloclsComponent as Component } from './types';
import { Block } from '@/components/division-blocks/block';
import { Box } from '@chakra-ui/react';

export const DivisionBlocks: Component = (props) => {
  const { division, width, height, items } = props;

  return (
    <Box className={division} width={`${width}px`} height={`${height}px`} position={'relative'}>
      {items.map((item) => (
        <Block key={item.text} {...item} />
      ))}
    </Box>
  );
};
