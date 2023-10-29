import { Flex, Heading, Text } from "@chakra-ui/react"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import MapContainer from "./MapContainer"

export const Address = () => {

  return (
    <Flex 
      justifyContent="space-around" 
      alignContent="center" 
      alignItems="center"
      mt="5"
      bg="tones.lightGrey"
      pt="5" pb="5"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Flex  direction="column" justifyContent="center" alignItems="center">
        <Heading as="h2">Address</Heading>

        <Flex mt="7" height="30vh" >
          <Flex alignItems="center"  pr="5" borderRight="3px solid black">
            <FontAwesomeIcon icon={faLocationPin} color="blue.dark" size="2x" />
          </Flex>
          <Flex direction="column" ml="5" justifyContent="center">
            <Text as="h3" fontWeight="bold">1st Lostock Hall Scout HQ</Text>
            <Text> Moss Ln, </Text>
            <Text> Lostock Hall,  </Text>
            <Text> Preston </Text>
            <Text> PR5 5BT </Text>
          </Flex>
        </Flex>
      </Flex>
      
    <Flex w={{base:"85%", sm:"60%"}} mt={{base:"3", sm:"0"}}>
        <MapContainer />
      </Flex>
    </Flex>
  )

}