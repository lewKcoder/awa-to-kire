import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from '@/components/sidebar';
import { Component } from './types';
import { ChildrenBoxStyles, SidebarBoxStyles } from './styles';

export const CommonLayouts: Component = (props) => {
  const { children } = props;

  return (
    <Flex>
      <Box sx={SidebarBoxStyles}>
        <Sidebar />
      </Box>
      <Box sx={ChildrenBoxStyles}>{children}</Box>
    </Flex>
  );
};
