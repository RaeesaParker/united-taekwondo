import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"

export const BeltsOrder = () => {



  return (
    <Flex justifyContent="center" alignItems="center" mt="10" mb="10" direction="column" >

      <Flex direction="column" alignItems="center" >
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1">White</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bg="#f0e890">Yellow</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bgGradient="linear(to-l, #9fd6a9, #f0e890)">Green Tag</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bg="#9fd6a9">Green</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bgGradient="linear(to-l, #cae2fc, #9fd6a9)">Blue Tag</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bg="#cae2fc">Blue</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bgGradient="linear(to-l, #ffb3b8, #cae2fc)">Red Tag</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bg="#ffb3b8">Red</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bgGradient="linear(to-l, #c2c0c0, #ffb3b8)">Black Tag</Text>
        <Box height="20px" w="3px" bg="#011627"></Box>
      </Flex>

      <Flex direction="column" alignItems="center" mt="1">
        <Text border="3px solid #011627" pt="2" pb="2" pl="10" pr="10" mb="1" bg="#c2c0c0">Black</Text>
      </Flex>

    </Flex>
  )
}