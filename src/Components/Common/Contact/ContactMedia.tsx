import { Flex, Heading, Link, Text } from "@chakra-ui/react"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const ContactMedia = () => {
  return (
    <Flex       
      pb="5" pr="5" pl="5"
      justifyContent="space-evenly"
      alignContent="center" direction="column">

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
  )
}