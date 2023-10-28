import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"

import taekwondoImage from "../../Assets/stock/taekwondo1.jpeg";

export const TenetsDetails = () => {
  return (
    <Flex
      mt="12" 
      p="7" 
      direction="column"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Heading mb="7" color="blue.dark">Tenets of Taekwondo</Heading>
      <Flex direction="column" gap="5">
        <Flex alignItems="center" gap="7"> <FontAwesomeIcon icon={faLandmark} /> <Text fontSize="lg"> Courtesy </Text> </Flex>
        <Flex alignItems="center" gap="7"> <FontAwesomeIcon icon={faLandmark} /> <Text fontSize="lg"> Integrity </Text> </Flex>
        <Flex alignItems="center" gap="7"> <FontAwesomeIcon icon={faLandmark} /> <Text fontSize="lg"> Perseverance </Text> </Flex>
        <Flex alignItems="center" gap="7"> <FontAwesomeIcon icon={faLandmark} /> <Text fontSize="lg"> Self-Control  </Text> </Flex>
        <Flex alignItems="center" gap="7"> <FontAwesomeIcon icon={faLandmark} /> <Text fontSize="lg"> Indomitable Spirit </Text> </Flex>
      </Flex>

    </Flex>
  )
}