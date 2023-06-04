import { Component } from './types';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { BeerContents } from '@/components/beer-contents';
import { containerStyles, prefectureTextStyles, imageStyles, flexGap, fontSize } from './styles';

export const BeerPanel: Component = (props) => {
  const { name, src, alt, style, color, alcohol, bitterness, sweetness, fullBodied, feature } =
    props;

  return (
    <Box sx={containerStyles} _notLast={{ marginBottom: '24px' }}>
      <Text sx={prefectureTextStyles}>{name}</Text>
      <Flex sx={flexGap}>
        <Image src={src} alt={alt} sx={imageStyles} />
        <BeerContents
          style={style}
          color={color}
          alcohol={alcohol}
          bitterness={bitterness}
          sweetness={sweetness}
          fullBodied={fullBodied}
        />
        <Text sx={fontSize}>{feature}</Text>
      </Flex>
    </Box>
  );
};
