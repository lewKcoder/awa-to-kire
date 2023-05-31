import { GetStaticPaths, GetStaticProps } from 'next';
import data from '@/store/data.json';

const Page = (props: any) => {
  const { beers } = props;

  return <div>Post: {beers[1].name}</div>;
};

export default Page;

type Props = {
  beers: Beers;
};

type Util = (args: Parameters<GetStaticProps>[0]) => {
  division: string;
};

type Beers = {
  name: string;
}[];

type Regions = {
  [key: string]: {
    beers: Beers;
  };
};

const getDivisionRecord: Util = (args) => {
  const { params } = args;
  const division = params?.division;

  if (division === undefined) {
    throw new Error('division not defined');
  }

  if (typeof division === 'object') {
    throw new Error('division not defined');
  }

  return { division: division };
};

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const { division } = getDivisionRecord(props);
  const beers: Regions = data;

  return {
    props: beers[division],
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const divisions = ['hokkaidou-touhoku', 'kantou', 'tyubu', 'kinki', 'tyugoku', 'kyusyu'];

  const paths = divisions.map((division) => {
    return { params: { division } };
  });

  return { paths, fallback: false };
};
