import { Flex} from "@chakra-ui/react"


import React from "react"
import { ContactTraining } from "./ContactTraining"
import { ContactMedia } from "./ContactMedia"
import { MessageBox } from "./MessageBox"
export const ContactBar = () => {
  return (
  <Flex 
    justifyContent="space-around" 
    alignContent="center" 
    mt="10"
    bg="tones.lightGrey"
  >
    <ContactTraining />
    <ContactMedia />
    <MessageBox />
  </Flex>
  )
}