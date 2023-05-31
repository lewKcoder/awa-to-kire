import { GetStaticPaths, GetStaticProps } from 'next';
import { getDivisionRecord } from '@/utils/get-division-record';
import data from '@/store/data.json';

const Page = (props: any) => {
  const { beers } = props;

  return (
    <div>
      {beers.map((beer: any) => (
        <p key={beer.name}>{beer.name}</p>
      ))}
    </div>
  );
};

export default Page;

type Props = {
  beers: Beers;
};

type Beers = {
  name: string;
}[];

type Regions = {
  [key: string]: {
    beers: Beers;
  };
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
