import React from 'react';
import { Box, Image, Tabs, TabList, TabPanels, Tab, TabPanel,useColorMode } from '@chakra-ui/react';

import Security from '../../images/security.svg';

import SingUpForm from '../../components/SingUpForm';
import LoginForm from '../../components/LoginForm';

function Form () {
  const { colorMode } = useColorMode();
  return (
    <Box 
    bg={colorMode === 'light' ? 'gray.300' : 'teal.500'}
    w='350px' p={3} boxShadow='sm' rounded='lg'>
      <Image src={Security} w='80px' mx='auto' mt={12} mb={10}/>
      <Tabs variant='enclosed' isFitted m={4} colorScheme="white">
        <TabList >
          <Tab >Registrar</Tab>
          <Tab>Entrar</Tab>
        </TabList>
        <TabPanels mt={3}>
          <TabPanel>
            <SingUpForm />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Form;