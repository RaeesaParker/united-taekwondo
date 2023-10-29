import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom";

import taekwondoImage from "../../Assets/stock/belt.jpeg";

export const BeltsIntro = () => {
  return (
    <Flex
      mt="12" 
      mb="10"
      p="7" 
      alignItems={{base:"center", sm:"flex-start"}}
      justifyContent="space-evenly"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Flex  
        w={{base:"95%", sm:"60%" }}
        alignItems="left" 
        p="5"
        gap={{base:"5", sm:"10"}}
        textAlign="center"
        flexDirection="column"
        mb={{base:"5", sm:"0"}}
        >
          <Text color="blue.dark" >In Taekwondo, belts indicate skill level—each color represents progress and expertise gained through training.</Text>
          <Link to="/taekwondo/belts">
            <Button bg="blue.light" color="tones.white" _hover={{color:"blue.dark", bg:"tones.lightGrey"}}>  
                Learn more
            </Button>
          </Link>
      </Flex>

      <Flex justifyContent="flex-start" direction="column" >
        <Image 
          src={taekwondoImage} 
          boxSize={{base:"60vw", sm:"25vw", lg:"20vw"}}
          alt="Image of taekwondo" 
          fallbackSrc='https://via.placeholder.com/150'
          />
      </Flex>
    </Flex>
  )
}