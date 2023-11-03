import { Button, Flex, Text } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"

export const CallToTrain = () => {
  return (
    <Flex bg="tones.lightGrey" p="7" mb="10" direction="column" alignItems="center" gap="5">
      <Text  lineHeight="taller" textAlign="center" fontWeight="bold">Begin your Taekwondo journey today. Unlock your potential, build strength, and achieve mastery.</Text>

      <Link to="/training"> <Button bg="red.dark" color="tones.white" _hover={{bg:"blue.dark"}}> Train with Us </Button> </Link>   
    </Flex>
  )
}