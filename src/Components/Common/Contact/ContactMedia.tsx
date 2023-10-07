import { Flex, Heading, Link, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import React from "react"

export const ContactMedia = () => {
  return (
    <Flex 
      mt="10" 
      p="5"
      bg="tones.lightGrey"
      justifyContent="space-evenly"
      alignContent="center"
    >
      <Flex  direction="column">
        <Heading as="h2">Contact Us</Heading>

        <Flex mt="7" height="30vh">
          <Flex justifyContent="space-around" pr="5" borderRight="3px solid black" direction="column">
            <FontAwesomeIcon icon={faPhone} color="blue.dark" size="2x" />
            <FontAwesomeIcon icon={faEnvelope} color="blue.dark" size="2x" />
            <FontAwesomeIcon icon={faFacebook} color="blue.dark" size="2x" />
          </Flex>

          <Flex direction="column" ml="5" justifyContent="space-around">
            <Text> +44 7368974425</Text>
            <Text> unitedtaekwondo@gmail.com</Text>
            <Link href="https://www.facebook.com/unitedtaekwondopreston" isExternal>
              <Text>United Taekwondo</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}