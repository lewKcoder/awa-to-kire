import { GetStaticProps } from 'next';

export type Util = (args: Parameters<GetStaticProps>[0]) => {
  division: string;
};
