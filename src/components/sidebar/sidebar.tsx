import { Box, Image, Flex, Text, Link } from '@chakra-ui/react';

export const Sidebar: React.FunctionComponent = () => {
  return (
    <Flex flexDirection={'column'}>
      {/* 仮アイコン */}
      <Flex flexDirection={'column'} alignItems={'center'} padding={'32px 0'}>
        <Image src="/header/beer.png" alt="siteIcon" width={'72px'} />
        <Text fontWeight={900}>ビール日和</Text>
      </Flex>
      <Box width={'100%'}>
        <Link display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
          <Image src="/header/light-bulb.png" alt="siteIcon" width={'32px'} height={'32px'} />
          豆知識
        </Link>
        <Link display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
          <Image src="/header/restaurant.png" alt="siteIcon" width={'32px'} height={'32px'} />
          おつまみ
        </Link>
        <Link display={'flex'} alignItems={'center'} gap={'8px'} margin={'24px'}>
          <Image src="/header/cocktail.png" alt="siteIcon" width={'32px'} height={'32px'} />
          アレンジ
        </Link>
      </Box>
    </Flex>
  );
};
