import { Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

import taekwondoImage from "../../Assets/stock/taekwondo1.jpeg";

export const AboutDetails = () => {
  return (
    <Flex
      mt="5" 
      p="7" 
      gap="5"
      bg="blue.dark"
      alignItems={{base:"center", sm:"flex-start"}}
      justifyContent="space-evenly"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Flex  
        w={{base:"95%", sm:"60%" }}
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


      <Flex justifyContent="flex-start" direction="column" mt={{base:"5", sm:"0"}}>
        <Image 
          src={taekwondoImage} 
          alt="Image of taekwondo" 
          boxSize={{base:"60vw", sm:"25vw", lg:"20vw"}}
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Flex>

    </Flex>
  )
}