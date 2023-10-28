import { Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"

import taekwondoImage from "../../Assets/stock/taekwondo1.jpeg";

export const AboutDetails = () => {
  return (
    <Flex
      mt="12" 
      p="7" 
      bg="blue.dark"
      alignItems="flex-start"
      justifyContent="space-evenly"
    >
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
          <Text color="tones.white" >Originating in Korea, Taekwondo is an ancient form of unarmed combat and self-defense.</Text>

          <Text color="tones.white" >&apos;Tae&apos; involves jumping, kicking, or smashing with the foot.</Text>

          <Text color="tones.white" >&apos;Kwon&apos; means punching or striking with the hand.</Text>

          <Text color="tones.white" >&apos;Do&apos; represents the art or way. Beyond physical techniques.</Text>
          
          <Text color="tones.white" >Beyond physical techniques, Taekwondo is a way of life, instilling self-imposed discipline and noble moral values.</Text>
      </Flex>


      <Flex justifyContent="flex-start" direction="column" w="20%">
        <Image 
          src={taekwondoImage} 
          alt="Image of taekwondo" 
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Flex>

    </Flex>
  )
}