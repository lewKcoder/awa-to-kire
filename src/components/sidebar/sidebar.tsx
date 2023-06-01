import { Box, Image, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { TextStyles, ImageStyles } from './styles';

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
          <Text sx={TextStyles}>
            <Image src="/header/light-bulb.png" alt="siteIcon" sx={ImageStyles} />
            ビールの種類
          </Text>
        </Link>
        <Link href="#">
          <Text sx={TextStyles}>
            <Image src="/header/restaurant.png" alt="siteIcon" sx={ImageStyles} />
            おつまみ
          </Text>
        </Link>
        <Link href="#">
          <Text sx={TextStyles}>
            <Image src="/header/cocktail.png" alt="siteIcon" sx={ImageStyles} />
            アレンジ
          </Text>
        </Link>
        <Link href="#">
          <Text sx={TextStyles}>
            <Image src="/header/light-bulb.png" alt="siteIcon" sx={ImageStyles} />
            豆知識
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};
