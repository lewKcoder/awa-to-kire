import { Component } from './types';
import { HokkaidouTouhoku } from '../hokkaidou-touhoku';
import { Kantou } from '../kantou';
import { Tyubu } from '../tyubu';
import { Kinki } from '../kinki';
import { Tyugoku } from '../tyugoku';
import { Shikoku } from '../shikoku';
import { Kyusyu } from '../kyusyu';
import { Box } from '@chakra-ui/react';
import { styles } from './styles';

export const Japan: Component = () => {
  return (
    <Box sx={styles}>
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
