import { Button, VStack } from "@chakra-ui/react";
import { Box } from "framer-motion";
import React from "react";

export const MobileNav = () => {

  return (
    <VStack
      p={4}
      display={{ lg: "none" }}
      border="1px solid grey"
      mb="3"
      mt="3"
      bg="#000000"
      w="80vw"
    >

      <Button
        fontWeight="400"
        display="block"
        variant="none"
      >
        Hello
      </Button>

          <Button
        fontWeight="400"
        display="block"
        variant="none"
      >
        Bye
      </Button>

    </VStack>
  );
};