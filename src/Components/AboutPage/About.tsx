import { Box, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

import imageJulie from "../../Assets/clubImages/1Image.jpg";

export const About = () => {
  return (
    <Flex 
      mt={{base:"5" }}
      p="5" 
      gap="3"
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Flex  
        w={{base:"95%", md:"75%", lg:"60%"}} 
        alignItems="center" 
        borderRight="5px solid #011627" 
        borderBottom="5px solid #011627" 
        borderTop="3px solid #011627" 
        borderLeft="3px solid #011627"
        p="5"
        textAlign="justify">
        <Text lineHeight="taller">Welcome to United Taekwondo in Preston, where tradition and community converge. With a legacy spanning over two decades, our club, led by the dedicated 6th Dan Master Julie Graham, has been a beacon for individuals of all ages, genders, and abilities. Like a family, we`ve fostered a supportive environment where members, ranging from as young as 5 years old, come together in unity.</Text>
      </Flex>

      <Box  mt={{base:"3", sm:"0"}}>
        <Image 
          src={imageJulie} 
          alt="Image of instructor Master Julie Graham" 
          boxSize={{base:"60vw", sm:"25vw", lg:"20vw"}}
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Box>
    </Flex>
  )
}