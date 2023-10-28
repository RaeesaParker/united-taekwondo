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
      alignItems="flex-start"
      justifyContent="space-evenly"
    >
      <Flex  
        w="50%"
        alignItems="left" 
        p="5"
        gap="10"
        textAlign="center"
        flexDirection="column"
        >
          <Text color="blue.dark" >In Taekwondo, belts indicate skill level—each color represents progress and expertise gained through training.</Text>
          <Link to="/taekwondo/belts">
            <Button bg="blue.light" color="tones.white" _hover={{color:"blue.dark", bg:"tones.lightGrey"}}>  
                Learn more
            </Button>
          </Link>
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