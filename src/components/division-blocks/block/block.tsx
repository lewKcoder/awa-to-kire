import { Component } from './types';
import { Link } from '@chakra-ui/react';

export const Block: Component = (props) => {
  const { text, backgroundColor, left, top, width, height } = props;
  return (
    <Link
      href="#"
      alignItems={'center'}
      bgColor={'#fff'}
      border={`3px solid ${backgroundColor}`}
      borderRadius={'8px'}
      color="#363636"
      display={'flex'}
      fontWeight={'bold'}
      fontSize={'14px'}
      justifyContent={'center'}
      height={`${height}px`}
      width={`${width}px`}
      left={left && `${left}px`}
      top={top && `${top}px`}
      position={'absolute'}
      _hover={{ bg: backgroundColor, color: '#fff', textDecoration: 'none' }}
    >
      {text}
    </Link>
  );
};
