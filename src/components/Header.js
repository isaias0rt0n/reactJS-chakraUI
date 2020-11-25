import { React } from 'react';

import { Box, Flex, Stack, Image, useColorMode, Link, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import LogoChakra from '../images/logo.svg';

const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const bgColor = { light: 'gray.300', dark: 'gray.600' };
  const textColor = { light: 'black', dark: 'gray.100'}
  return (
    <Flex w='100vw' h='7vh' boxShadow='md' p={2} align='center' justify='center'
      bg={bgColor[colorMode]}
      color={textColor[toggleColorMode]}
      fontSize={['md', 'lg', 'xl', 'xl']} 
    >
      <Flex w={['100vw', '100vw', '80vw', '80vw']} justify='space-around'>
        <Box >
          <Image h='4vh' src={LogoChakra} alt="Logo do Chakra-ui"/>
        </Box>
        <Stack spacing={8} color={textColor[colorMode]} justify='center' align='center' isInline>
          <Box position='relative'>
            <Link href='/'>Home</Link>
          </Box>
          <Box position='relative'>
            <Link href='/form'>Formulário</Link>
          </Box>
          <Box position='relative'>
            <Link href='/card'>Cartão</Link>
          </Box>
          <Box position='relative'>
            <Link href='/'>Lista</Link>
          </Box>
        </Stack>
        <Box>
          <IconButton rounded='full' onClick={toggleColorMode}
            icon={ colorMode==='light' ? <MoonIcon/> : <SunIcon/>}>
              Alterar modo de cor
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;