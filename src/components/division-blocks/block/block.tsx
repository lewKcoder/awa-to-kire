import { Component } from './types';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { styles } from './styles';

export const Block: Component = (props) => {
  const { text, backgroundColor, left, top, width, height, division } = props;
  return (
    <Link href={`${division}/beers#${text}`}>
      <Text
        sx={styles}
        border={`3px solid ${backgroundColor}`}
        height={`${height}px`}
        width={`${width}px`}
        left={left && `${left}px`}
        top={top && `${top}px`}
        _hover={{ bg: backgroundColor, color: '#fff', textDecoration: 'none' }}
      >
        {text}
      </Text>
    </Link>
  );
};
