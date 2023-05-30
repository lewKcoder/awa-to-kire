import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import beers from '@/store/data.json';

const Page = (props: any) => {
  const router = useRouter();
  const { id } = router.query;
  const { regionName } = props;

  return <div>Post: {id}</div>;
};

export default Page;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const division = params?.division;

  return {
    props: {
      regionName: 'werstyuhi',
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // ここで division のリストを取得します。これは API から取得するか、
  // 静的に定義するか、あるいは他の方法でも構いません。
  const divisions = ['hokkaidou-touhoku', 'kantou', 'tyubu', 'kinki', 'tyugoku', 'kyusyu'];

  // paths 配列を生成します。各パスは `division` パラメータを持つオブジェクトです。
  const paths = divisions.map((division) => {
    return { params: { division } };
  });

  return { paths, fallback: false };
};
