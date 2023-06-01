import { Component } from './types';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Block: Component = (props) => {
  const { text, backgroundColor, left, top, width, height, division } = props;
  return (
    <Link href={`${division}/beers#${text}`}>
      <Text
        alignItems={'center'}
        bgColor={'#fff'}
        border={`3px solid ${backgroundColor}`}
        borderRadius={'4px'}
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
      </Text>
    </Link>
  );
};
