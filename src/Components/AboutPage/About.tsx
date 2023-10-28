import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

import imageJulie from "../../Assets/clubImages/1Image.jpg";

export const About = () => {
  return (
    <Flex 
      mt="16" 
      p="5" 
      justifyContent="space-evenly"
      alignContent="center"
    >
      <Flex  
        w="40%" 
        alignItems="center" 
        borderRight="5px solid #011627" 
        borderBottom="5px solid #011627" 
        borderTop="3px solid #011627" 
        borderLeft="3px solid #011627"
        p="5"
        textAlign="justify">
        <Text lineHeight="taller">Welcome to United Taekwondo in Preston, where tradition and community converge. With a legacy spanning over two decades, our club, led by the dedicated 6th Dan Master Julie Graham, has been a beacon for individuals of all ages, genders, and abilities. Like a family, we`ve fostered a supportive environment where members, ranging from as young as 5 years old, come together in unity.</Text>
      </Flex>
      <Box w="30%">
        <Image 
          src={imageJulie} 
          alt="Image of instructor Master Julie Graham" 
          boxSize="25vw"
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Box>
    </Flex>
  )
}