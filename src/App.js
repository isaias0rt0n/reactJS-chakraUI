import React from 'react';
import {
  ChakraProvider,
  theme,
  ThemeProvider, Flex, CSSReset
} from '@chakra-ui/react';

import Routes from './routes';
import Header from './components/Header';

function App({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Flex direction='column' align='center' justify='center'>
          <CSSReset />
          <Header />
          <Flex justify='center' align='center' w='100%' h='93vh'>
            <Routes />
            {children}
          </Flex>
        </Flex>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
