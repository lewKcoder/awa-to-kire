import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { CommonLayouts } from '../common-layouts';

export const CommingSoon: React.FunctionComponent = () => {
  return (
    <CommonLayouts>
      <Box
        width={'350px'}
        position={'absolute'}
        left={'50%'}
        transform={'translate(-50%, 50%)'}
        textAlign={'center'}
      >
        <Image
          src="/comming-soon/alert.gif"
          alt="CommingSoon"
          sx={{ width: '200px', height: 'auto', margin: 'auto' }}
        />
        <Text>こちらのコンテンツは近日公開予定です。</Text>
        <Text>もうしばらくお待ちください。</Text>
      </Box>
    </CommonLayouts>
  );
};
