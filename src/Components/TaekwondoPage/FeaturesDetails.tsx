import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

import taekwondoImage from "../../Assets/stock/kick.jpeg";

export const FeaturesDetails = () => {
  return (
    <Flex
      mt="12" 
      p="7" 
      bg="blue.dark"
      alignItems="flex-start"
      justifyContent="space-evenly"
    >

      <Flex justifyContent="flex-start" direction="column" w="20%">
        <Image 
          src={taekwondoImage} 
          alt="Image of taekwondo" 
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Flex>

      <Flex  
        w="50%"
        alignItems="left" 
        borderRight="5px solid #007CBE" 
        borderBottom="5px solid #007CBE" 
        borderTop="3px solid #007CBE" 
        borderLeft="3px solid #007CBE"
        p="5"
        gap="3"
        textAlign="center"
        flexDirection="column"
        >
          <Text color="tones.white" >Taekwondo is distinguished by its unique characteristics, highlighted by a focus on head-height kicks, dynamic jumping and spinning kicks, and swift kicking techniques. </Text>

          <Text color="tones.white" >We focus on a variety of training techniques including - </Text>

          <Text color="tones.white" >Poomsae - predefined patterns of movement</Text>

          <Text color="tones.white" >Sparring - controlled and supervised combat </Text>
          
          <Text color="tones.white" >Self-defense techniques </Text>
      </Flex>


    </Flex>
  )
}