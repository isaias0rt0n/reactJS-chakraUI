import React from 'react';
import { Input, Stack, InputLeftAddon, InputGroup,
Button, FormControl, FormHelperText, Divider } from "@chakra-ui/react";
import { EmailIcon, LockIcon, InfoIcon } from '@chakra-ui/icons';

function SingUpForm () {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<InfoIcon />} />
            <Input  type='name' placeholder='Primeiro nome' aria-label='Primeiro nome'/>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<InfoIcon />} />
            <Input  type='name' placeholder='Último nome' aria-label='Último nome'/>
          </InputGroup>
        </FormControl>
        <Divider borderColor='gray.300'/>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<EmailIcon/>} />
            <Input  type='name' placeholder='Email' aria-label='Email'/>
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftAddon children={<LockIcon />} />
            <Input  type='password' placeholder='Senha' aria-label='Senha'/>
          </InputGroup>
        </FormControl>
        <Button type='submit' boxShadow='sm' _hover={{ boxShadow: 'md' }} _active={{ boxShadow: 'lg' }}>
          Escreva-se
        </Button>
        <FormControl>
          <FormHelperText textAlign='center'>
            Nunca compartilharemos seu email🤞.
          </FormHelperText>
        </FormControl>
      </Stack>
    </form>
  );
}

export default SingUpForm;