import React from 'react';
import { Input, Stack, InputLeftAddon, InputGroup,
Button, FormControl, FormHelperText } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

function LoginForm () {
  return (
    <form action="submit">
      <Stack spacing={3}>
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
          Entrar
        </Button>
        <FormControl>
          <FormHelperText textAlign='center'>
            Bem-vindo de volta🏠.
          </FormHelperText>
        </FormControl>
      </Stack>
    </form>
  );
}

export default LoginForm;