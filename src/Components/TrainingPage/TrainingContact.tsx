import { Flex, Text } from "@chakra-ui/react"
import React from "react"

import { ContactMedia } from "../Common/Contact/ContactMedia"
import { MessageBox } from "../Common/Contact/MessageBox"

export const TrainingContact = () => {
  return (
    <Flex
      mt="8" 
      mb="8"
      p="5" 
      justifyContent="space-around"
      alignItems="space-evenly"
    >
      <Flex 
        w="30%"
        alignItems="center" 
        borderRight="5px solid #011627" 
        borderBottom="5px solid #011627" 
        borderTop="3px solid #011627" 
        borderLeft="3px solid #011627"
        p="5"
        textAlign="justify">
        <Text lineHeight="taller" textAlign="center">Embark on your Taekwondo journey by attending one of our classes! For additional details, connect with us on Facebook, give us a call, or send a message—we&apos;re here to guide you every step of the way.</Text>
      </Flex>
      <ContactMedia />
      <MessageBox />
    </Flex>
  )
}