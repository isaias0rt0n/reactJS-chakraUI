import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, useColorMode, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import Thumb from '../../images/thumb.png';

function Card() {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.300', dark: 'gray.700' }
  const textColor = { light: 'gray.500', dark: 'gray.100'}

  return (
    <Box w='400px' rounded='20px' overflow='hidden' boxShadow='sm' 
    bg={ bgColor[colorMode] }>
      <Image src={Thumb} alt="Curso chakra-ui"/>
      <Box p={5}>
        <Stack isInline align='baseline'>
          <Badge variant='solid' colorScheme='teal' rounded='full' px={2}>
            Novo!
          </Badge>
          <Badge variant='solid' colorScheme='teal' rounded='full' px={2}>
            ReactJS
          </Badge>
          <Text textTransform='uppercase' fontSize='sm' color='gray.500' letterSpacing='wide'>
            2 Horas &bull; 4 desafios
          </Text>
        </Stack>
        <Text as='h2' fontSize="xl" fontWeight='semibold' my={2}>Introdução ao chakra-ui </Text>
        <Text fontWeight='light' fontSize='md'>
          Chakra UI is a simple, modular and accessible component library 
          that gives you the building blocks you need to build your React applications.
        </Text>
        <Stack isInline justify='space-between' color={textColor[colorMode]}>
          <Text fontWeight='semibold' fontSize='lg'>
            R$ 100.00
          </Text>
          <Flex d='flex'>
            <Box>
              {Array(4).fill('').map((_, i)=>(
                <StarIcon color='teal.500' key={i}/>
              ))}
              <StarIcon mr='2'/>
            </Box>
            <Text fontWeight='semibold' fontSize='lg'>
              12 Reviews
            </Text>
          </Flex>
        </Stack>
        <Box textAlign='center'>
          <Button colorScheme='teal' size='md' mt={3} boxShadow='sm' _active={{boxShadow: 'lg'}}>
            Escreva-se agora!
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;