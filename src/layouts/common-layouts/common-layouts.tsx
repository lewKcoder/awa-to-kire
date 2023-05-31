import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '@/components/sidebar';
import { Component } from './types';

export const CommonLayouts: Component = (props) => {
  const { children } = props;

  return (
    <Flex>
      <Box width={'16%'} borderRight={'1px solid #3a3a3a'}>
        <Sidebar />
      </Box>
      <Box height={'100vh'} width={'84%'} position={'relative'}>
        {children}
      </Box>
    </Flex>
  );
};
