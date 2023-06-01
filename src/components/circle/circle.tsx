import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { Component } from './types';
import { TextCircleStyles, ImageCircleStyles, ImageStyles, HoverStyles } from './styles';

export const Circle: Component = (props) => {
  const { type, href, text, src, alt } = props;
  return (
    <Link href={href}>
      <Box sx={type === 'text' ? TextCircleStyles : ImageCircleStyles} _hover={HoverStyles}>
        {type === 'text' ? <>{text}</> : <Image src={src} alt={alt} sx={ImageStyles} />}
      </Box>
    </Link>
  );
};
