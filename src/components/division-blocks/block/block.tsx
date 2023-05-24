import { Component } from './types';
import { Link } from '@chakra-ui/react';

export const Block: Component = (props) => {
  const { text, backgroundColor, hoverBackgroundColor, left, top, width, height } = props;
  return (
    <Link
      href="#"
      alignItems={'center'}
      bgColor={backgroundColor}
      border={'1px solid #fff'}
      borderRadius={'8px'}
      color="#fff"
      display={'flex'}
      fontWeight={'bold'}
      justifyContent={'center'}
      height={`${height}px`}
      width={`${width}px`}
      left={left && `${left}px`}
      top={top && `${top}px`}
      position={'absolute'}
      _hover={{ bg: hoverBackgroundColor, textDecoration: 'none' }}
    >
      {text}
    </Link>
  );
};
