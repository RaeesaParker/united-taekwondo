import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom";

import imageJulie from "../../Assets/Julie.png";

export const Introduction = () => {
  return (
    <Flex 
      mt="7" 
      p="5" 
      bg="blue.dark"
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
        w="60%" 
        direction="column" 
        justifyContent="space-around"
        alignContent="center"
        >
        <Text color="tones.white"> Welcome to United Taekwondo, where unity, discipline, and personal growth are at the core of our practice. Led by Master Julie Graham, a seasoned 6th Dan instructor with decades of experience, we embody the values of hard work and perseverance. At United Taekwondo, every member is valued and encouraged to reach their full potential. Join us in the journey of self-discovery, fitness, and camaraderie as we uphold the rich traditions of Taekwondo.</Text>
        <Flex justifyContent="space-around" >
          <Link to="/about">
            <Button 
              bg="blue.light" 
              color="tones.white" 
              _hover={{color:"blue.dark", bg:"tones.lightGrey"}}>
                Find Out More
            </Button>
          </Link>

          <Link to="/training">
            <Button 
              bg="red.dark" color="tones.white" _hover={{color:"blue.dark", bg:"tones.lightGrey"}}>  
                Train with Us
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}