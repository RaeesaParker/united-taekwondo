import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"

import { MessageBoxFlat } from "./MessageBoxFlat"

export const MessageBar = () => {
  return (
    <Flex
      justifyContent="space-around" 
      alignItems="center" 
      mt="10"
      mb="10"
      bg="tones.lightGrey"
      pt="10"
      pb="5"
    >
      <Box w="33%"> <Heading color="blue.dark" textAlign="center">Message</Heading> </Box>
      <MessageBoxFlat />
    </Flex>
  )
}