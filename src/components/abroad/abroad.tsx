import { Link, Image } from '@chakra-ui/react';

export const Abroad: React.FunctionComponent = () => {
  return (
    <Link
      alignItems={'center'}
      border={'3px solid #d86363'}
      borderTop={'none'}
      backgroundColor={'#fff'}
      borderRadius={'0 0 100px 100px'}
      color={'#363636'}
      display={'flex'}
      fontWeight={'bold'}
      height={'100px'}
      justifyContent={'center'}
      position={'absolute'}
      right={'calc(50% - 100px)'}
      width={'200px'}
      _hover={{ textDecoration: 'none', color: '#fff', backgroundColor: '#d86363' }}
    >
      {/* <Image src="/header/location.png" /> */}
      海外
    </Link>
  );
};
