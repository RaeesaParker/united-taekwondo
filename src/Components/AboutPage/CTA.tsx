import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom";

import imageJulie from "../../Assets/Julie.png";

export const CTA = () => {
  return (
    <Flex 
      mt="16" 
      mb="16"
      p="5" 
      justifyContent="space-evenly"
      alignContent="center"
    >
      <Box w="30%">
        <Image 
          src={imageJulie} 
          alt="Image of instructor Master Julie Graham" 
          boxSize="25vw"
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Box>

      <Flex  
        w="40%" 
        alignItems="center" 
        borderRight="5px solid #011627" 
        borderBottom="5px solid #011627" 
        borderTop="3px solid #011627" 
        borderLeft="3px solid #011627"
        p="5"
        textAlign="justify"
        flexDirection="column"
        >
        <Text lineHeight="taller">Discover excellence at United Taekwondo in Preston! Led by Master Julie Graham, our club embraces values of discipline and unity as proud members of British Taekwondo. Ready for a transformative martial arts journey? Visit a class or contact us. Join our close-knit family, and thrive in an environment of unity, discipline, and personal growth. Your martial arts journey begins here!</Text>
        <Link to="/training"> <Button  mt="5" bg="red.dark" color="tones.white" _hover={{color:"blue.dark", bg:"tones.lightGrey"}}> Train with Us </Button> </Link>
      </Flex>


    </Flex>
  )
}