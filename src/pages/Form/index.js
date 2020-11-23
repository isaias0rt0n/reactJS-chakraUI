import React from 'react';
import { Input, Icon, Stack, InputLeftAddon, InputGroup } from "@chakra-ui/react";

function Form () {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <InputGroup>
          <InputLeftAddon children={<Icon name="info"/>} />
          <Input  />
        </InputGroup>
        <Input />
        <Input />
        <Input />
      </Stack>
    </form>
  );
}

export default Form;