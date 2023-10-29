import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

import imageBelt from "../../Assets/stock/red.jpg";

export const Belts = () => {
  return (
    <Flex 
      mt={{base:"5"}} 
      p="5" 
      justifyContent={{base:"center", sm:"space-evenly"}}
      alignContent="center"
      alignItems="center"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Flex  
        w={{base:"95%", sm:"60%" }}
        alignItems="center" 
        borderRight="5px solid #011627" 
        borderBottom="5px solid #011627" 
        borderTop="3px solid #011627" 
        borderLeft="3px solid #011627"
        p="5"
        textAlign="justify">
        <Text lineHeight="taller">Belts in Taekwondo represent a practitioner&apos;s journey and proficiency, serving as visual markers of their skill level. Advancement from one belt to the next involves a comprehensive evaluation, testing the practitioner&apos;s abilities in poomsae, sparring, kicks, strikes, and self-defense.</Text>
      </Flex>
      <Box mt={{base:"3", sm:"0"}}>
        <Image 
          src={imageBelt} 
          boxSize={{base:"60vw", sm:"25vw", lg:"20vw"}}
          alt="Image of instructor Master Julie Graham" 
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Box>
    </Flex>
  )
}