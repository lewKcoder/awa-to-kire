import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '@/components/sidebar';
import { Japan } from '@/components/japan';
import { Abroad } from '@/components/abroad';

export const Map: React.FunctionComponent = () => {
  return (
    <Flex>
      <Box width={'16%'} borderRight={'1px solid #3a3a3a'}>
        <Sidebar />
      </Box>
      <Box height={'100vh'} width={'84%'} position={'relative'}>
        <Abroad />
        <Japan />
      </Box>
    </Flex>
  );
};
