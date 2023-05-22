import { Component } from './types';
import { HokkaidouTouhoku } from '../hokkaidou-touhoku';
import { Kantou } from '../kantou';
import { Tyubu } from '../tyubu';
import { Kinki } from '../kinki';
import { Tyugoku } from '../tyugoku';
import { Shikoku } from '../shikoku';
import { Kyusyu } from '../kyusyu';

export const Japan: Component = () => {
  return (
    <div>
      <HokkaidouTouhoku />
      <Kantou />
      <Tyubu />
      <Kinki />
      <Tyugoku />
      <Shikoku />
      <Kyusyu />
    </div>
  );
};
