import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"

import { MessageBox } from "../Common/Contact/MessageBox"

export const MessageBar = () => {
  return (
    <Flex
      justifyContent="space-around" 
      alignItems="center" 
      bg="tones.lightGrey"
      pt="10"
      pb="5"
      w={{base:"100%", sm:"50%"}}
      direction="column"
    >
      <Box> <Heading color="blue.dark" textAlign="center">Message</Heading> </Box>
      <MessageBox />
    </Flex>
  )
}