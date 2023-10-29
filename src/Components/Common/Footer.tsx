import { Flex, Text } from "@chakra-ui/react"
import React from "react"

export const Footer = () => {
  return (
    <Flex bg="blue.dark" justifyContent="center" alignContent="center" pt="1" pb="1">
      <Text color="tones.white" fontSize="xs"> &copy; United Taekwondo 2023</Text>
    </Flex>
  )
}