import { Flex, Text } from "@chakra-ui/react"
import React from "react"

export const FSF = () => {
  return (
    <Flex bg="red.dark" justifyContent="center" alignContent="center" pt="5" pb="5" mt="5">
      <Text color="tones.white" fontWeight="bold"> First Session Free </Text>
    </Flex>
  )
}