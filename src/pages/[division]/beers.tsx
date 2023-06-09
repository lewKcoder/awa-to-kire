import { GetStaticPaths, GetStaticProps } from 'next';
import { getDivisionRecord } from '@/utils/get-division-record';
import dataImported from '@/store/data.json';
import { BeerPanels } from '@/layouts/beer-panels';
import Head from 'next/head';
import { Prefectures, Regions } from '@/types/types-beers';

const Page = (props: any) => {
  const { prefectures } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400;500;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <BeerPanels prefectures={prefectures} />
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<Prefectures> = async (props) => {
  const { division } = getDivisionRecord(props);
  const data: Regions = dataImported;

  return {
    props: data[division],
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const divisions = [
    'hokkaidou-touhoku',
    'kantou',
    'tyubu',
    'kinki',
    'tyugoku',
    'shikoku',
    'kyusyu',
  ];

  const paths = divisions.map((division) => {
    return { params: { division } };
  });

  return { paths, fallback: false };
};
