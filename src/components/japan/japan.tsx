import { Component } from './types';
import { HokkaidouTouhoku } from '../hokkaidou-touhoku';
import { Kantou } from '../kantou';
import { Tyubu } from '../tyubu';
import { Kinki } from '../kinki';
import { Tyugoku } from '../tyugoku';
import { Shikoku } from '../shikoku';
import { Kyusyu } from '../kyusyu';
import { Box } from '@chakra-ui/react';

export const Japan: Component = () => {
  return (
    <Box
      width={'775px'}
      height={'485px'}
      position={'absolute'}
      right={'50%'}
      top={'120px'}
      transform={'translateX(50%)'}
    >
      <HokkaidouTouhoku />
      <Kantou />
      <Tyubu />
      <Kinki />
      <Tyugoku />
      <Shikoku />
      <Kyusyu />
    </Box>
  );
};
