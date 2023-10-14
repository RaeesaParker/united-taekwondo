import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"

import { ContactMedia } from "./ContactMedia"
import { ContactTraining } from "./ContactTraining"
import { MessageBox } from "./MessageBox"

export const ContactBar = () => {
  return (
  <Flex 
    justifyContent="space-around" 
    alignItems="center" 
    mt="10"
    bg="tones.lightGrey"
    pt="10"
    pb="5"
  >
    <Box>
    <Heading as="h2">Training Times</Heading>
    <ContactTraining />
    </Box>

    <Box>
      <Heading  as="h2">Contact Us</Heading>
      <ContactMedia />
    </Box>
    <MessageBox />
  </Flex>
  )
}