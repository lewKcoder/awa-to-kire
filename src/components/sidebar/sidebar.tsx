import { Box, Image, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Sidebar: React.FunctionComponent = () => {
  return (
    <Flex flexDirection={'column'}>
      <Link href="/">
        <Flex flexDirection={'column'} alignItems={'center'} padding={'32px 0'}>
          <Image src="/header/beer.png" alt="siteIcon" width={'80px'} />
          <Text fontWeight={900} fontSize={'20px'}>
            ビール日和
          </Text>
        </Flex>
      </Link>
      <Box width={'100%'}>
        <Link href="#">
          <Text display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
            <Image src="/header/light-bulb.png" alt="siteIcon" width={'32px'} height={'32px'} />
            ビールの種類
          </Text>
        </Link>
        <Link href="#">
          <Text display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
            <Image src="/header/restaurant.png" alt="siteIcon" width={'32px'} height={'32px'} />
            おつまみ
          </Text>
        </Link>
        <Link href="#">
          <Text display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
            <Image src="/header/cocktail.png" alt="siteIcon" width={'32px'} height={'32px'} />
            アレンジ
          </Text>
        </Link>
        <Link href="#">
          <Text display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
            <Image src="/header/light-bulb.png" alt="siteIcon" width={'32px'} height={'32px'} />
            豆知識
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
