import { Flex} from "@chakra-ui/react"


import React from "react"
import { ContactTraining } from "./ContactTraining"
import { ContactMedia } from "./ContactMedia"
export const ContactBar = () => {
  return (
  <Flex justifyContent="space-around" alignContent="center">
    <ContactTraining />
    <ContactMedia />
  </Flex>
  )
}