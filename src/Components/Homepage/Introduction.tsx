import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom";

import imageJulie from "../../Assets/clubImages/Julie2.jpg";

export const Introduction = () => {
  return (
    <Flex 
      mt="7" 
      p="5" 
      bg="blue.dark"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection={{base:"column", sm:"row"}}
      >
      <Box  >
        <Image 
          src={imageJulie} 
          alt="Image of instructor Master Julie Graham" 
          boxSize={{base:"50vw", sm:"30vw", md:"25vw"}}
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Box>

      <Flex  
        w={{base: "90%", sm:"60%", md:"60%" }}
        mt={{base:"3", md:"0"}}
        direction="column" 
        justifyContent="space-around"
        alignContent="center"
        >
        <Text color="tones.white" textAlign="center"> Welcome to United Taekwondo, where unity, discipline, and personal growth are at the core of our practice. Led by Master Julie Graham, a seasoned 6th Dan instructor with decades of experience, we embody the values of hard work and perseverance. Join us in the journey of self-discovery, fitness, and camaraderie as we uphold the rich traditions of Taekwondo.</Text>
        
        <Flex justifyContent="space-around" mt={{base:"3", md:"10"}} >
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