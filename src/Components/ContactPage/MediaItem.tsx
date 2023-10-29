import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react"
import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const MediaItem = ({title, text, iconName, linkToggle} : {title:string, text:string, iconName:IconDefinition, linkToggle?:string}) => {
  return (
    <Flex
      p="5" 
      justifyContent="space-evenly"
      alignItems="center"
      alignContent="center"
      bg="tones.lightGrey"
    >
      <Flex  w={{base:"10%" , sm:"33%"}} justifyContent="center">    <FontAwesomeIcon icon={iconName} color="blue.dark" size="2x" /> </Flex>
    
      <Box w={{base:"35%" , sm:"33%"}}> <Heading color="blue.dark" textAlign="center">{title}</Heading> </Box>
    
      {linkToggle ? 
      <Box w={{base:"45%" , sm:"33%"}}>
        <Link href={linkToggle}isExternal >
          <Text  as="h3" fontWeight="bold" color="blue.dark" textAlign="center">{text}</Text>
        </Link>
      </Box>
      :
        <Box w={{base:"45%" , sm:"33%"}}> <Text  as="h3" fontWeight="bold" color="blue.dark" textAlign="center"> {text}</Text> </Box>
      }
    </Flex>
  )
}