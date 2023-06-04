import { Box, Text, Flex } from '@chakra-ui/react';
import { Component } from './types';
import {
  containerStyles,
  chartCommonStyles,
  lineTitleStyles,
  colorOutlineStyles,
  colorInlineStyles,
  marginBottom,
  alignItems,
  bitternessTrueStyle,
  bitternessFalseStyle,
  sweetnessTrueStyle,
  sweetnessFalseStyle,
  fullBodiedTrueStyle,
  fullBodiedFalseStyle,
} from './styles';

export const BeerContents: Component = (props) => {
  const { style, color, alcohol, bitterness, sweetness, fullBodied } = props;

  console.log(new Array(bitterness));

  return (
    <Box sx={containerStyles}>
      <Flex sx={marginBottom}>
        <Text sx={lineTitleStyles}>スタイル</Text>
        <Text>{style}</Text>
      </Flex>

      <Flex sx={marginBottom}>
        <Text sx={lineTitleStyles}>ビールの色</Text>
        <Box sx={colorOutlineStyles}>
          <Box backgroundColor={color} sx={colorInlineStyles} />
        </Box>
      </Flex>

      <Flex sx={marginBottom}>
        <Text sx={lineTitleStyles}>アルコール度数</Text>
        <Text>{alcohol}%</Text>
      </Flex>

      <Flex sx={{ ...marginBottom, ...alignItems }}>
        <Text sx={lineTitleStyles}>苦味</Text>
        {[...Array(bitterness)].map((_, index) => (
          <Box key={index} sx={{ ...chartCommonStyles, ...bitternessTrueStyle }} />
        ))}
        {[...Array(5 - bitterness)].map((_, index) => (
          <Box key={index} sx={{ ...chartCommonStyles, ...bitternessFalseStyle }} />
        ))}
      </Flex>

      <Flex sx={{ ...marginBottom, ...alignItems }}>
        <Text sx={lineTitleStyles}>甘味</Text>
        {[...Array(sweetness)].map((_, index) => (
          <Box key={index} sx={{ ...chartCommonStyles, ...sweetnessTrueStyle }} />
        ))}
        {[...Array(5 - sweetness)].map((_, index) => (
          <Box key={index} sx={{ ...chartCommonStyles, ...sweetnessFalseStyle }} />
        ))}
      </Flex>

      <Flex sx={alignItems}>
        <Text sx={lineTitleStyles}>コク</Text>
        {[...Array(fullBodied)].map((_, index) => (
          <Box key={index} sx={{ ...chartCommonStyles, ...fullBodiedTrueStyle }} />
        ))}
        {[...Array(5 - fullBodied)].map((_, index) => (
          <Box key={index} sx={{ ...chartCommonStyles, ...fullBodiedFalseStyle }} />
        ))}
      </Flex>
    </Box>
  );
};
