import { BlockComponent as Component } from '../types';
import { Box } from '@chakra-ui/react';

export const Block: Component = (props) => {
  const { text, backgroundColor, left, top, width, height } = props;
  return (
    <Box
      color="#fff"
      bgColor={backgroundColor}
      left={left && `${left}px`}
      top={top && `${top}px`}
      width={`${width}px`}
      height={`${height}px`}
      borderRadius={'8px'}
      position={'absolute'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      border={'1px solid #fff'}
    >
      <a href="#">{text}</a>
    </Box>
  );
};
