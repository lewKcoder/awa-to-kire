import { Link, Image } from '@chakra-ui/react';

export const Abroad: React.FunctionComponent = () => {
  return (
    <Link
      alignItems={'center'}
      backgroundColor={'#d86363'}
      borderRadius={'0 0 100px 100px'}
      color={'#fff'}
      display={'flex'}
      fontWeight={'bold'}
      height={'100px'}
      justifyContent={'center'}
      position={'absolute'}
      right={'calc(50% - 100px)'}
      width={'200px'}
      _hover={{ textDecoration: 'none', backgroundColor: '#e79898' }}
    >
      {/* <Image src="/header/location.png" /> */}
      海外
    </Link>
  );
};
