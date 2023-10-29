import { Box, Flex, Heading } from "@chakra-ui/react"
import React from "react"

import { ContactMedia } from "./ContactMedia"
import { ContactTraining } from "./ContactTraining"
import { MessageBox } from "./MessageBox"

export const ContactBar = () => {
  return (
  <Flex 
    justifyContent="space-around" 
    alignItems={{base:"flex-start", sm:"center"}} 
    mt="10"
    bg="tones.lightGrey"
    pr="3"
    pl="3"
    pt={{base:"5", sm:"0"}}
    gap={{base:"5", sm:"0"}}
    flexDirection={{base:"column", md:"row"}}
  >
    <Box >
    <Heading as="h2">Training Times</Heading>
    <ContactTraining />
    </Box>

    <Box >
      <Heading  as="h2">Contact Us</Heading>
      <ContactMedia />
    </Box>
    <MessageBox />
  </Flex>
  )
}