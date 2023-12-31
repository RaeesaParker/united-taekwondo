import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom";

import imageJulie from "../../Assets/clubImages/Julie.png";

export const CTA = () => {
  return (
    <Flex 
      mt="5" 
      mb="10"
      gap="3"
      p="5" 
      justifyContent="space-evenly"
      alignContent="center"
      alignItems="center"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Box >
        <Image 
          src={imageJulie} 
          alt="Image of instructor Master Julie Graham" 
          boxSize={{base:"60vw", sm:"25vw", lg:"20vw"}}
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Box>

      <Flex  
        w={{base:"95%", md:"75%", lg:"60%"}} 
        alignItems="center" 
        borderRight="5px solid #011627" 
        borderBottom="5px solid #011627" 
        borderTop="3px solid #011627" 
        borderLeft="3px solid #011627"
        p="5"
        mt={{base:"3", sm:"0"}}
        textAlign="justify"
        flexDirection="column"
        >
        <Text lineHeight="taller">Discover excellence at United Taekwondo in Preston! Our club embraces values of discipline and unity as proud members of British Taekwondo. Ready for a transformative martial arts journey? Visit a class or contact us. Join our close-knit family, and thrive in an environment of unity, discipline, and personal growth. Your martial arts journey begins here!</Text>
        <Link to="/training"> <Button  mt="5" bg="red.dark" color="tones.white" _hover={{color:"blue.dark", bg:"tones.lightGrey"}}> Train with Us </Button> </Link>
      </Flex>


    </Flex>
  )
}