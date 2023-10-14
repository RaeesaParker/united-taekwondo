import { Flex, Heading, Text } from "@chakra-ui/react"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const ContactTraining = () => {
  return (
    <Flex 
      pb="5" pr="5" pl="5"
      justifyContent="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Flex mt="7" height="30vh">
        <Flex alignItems="center"  pr="5" borderRight="3px solid black">
          <FontAwesomeIcon icon={faClock} color="blue.dark" size="2x" />
        </Flex>
        <Flex direction="column" ml="5" justifyContent="center">
          <Text as="h3" fontWeight="bold">Friday</Text>
          <Text> 5pm - 6pm &nbsp;&nbsp;&nbsp;&nbsp; Everyone</Text>
          <Text>6pm - 7pm &nbsp;&nbsp;&nbsp;&nbsp; Blue Belts + </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}