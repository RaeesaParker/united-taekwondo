import React from "react"
import { Link as ReactRouterLink } from "react-router-dom"
import { Link as ChakraLink, LinkProps, Flex} from "@chakra-ui/react"

<ChakraLink as={ReactRouterLink} to='/home'>
  Home
</ChakraLink>
export const NavBar = () => {

  return (
    <Flex bg="blue.dark" alignContent="center" justifyContent="space-around" padding="4">      
      <ChakraLink as={ReactRouterLink} to='/home' color="tones.white"> Home </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/about' color="tones.white"> About </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/training' color="tones.white"> Training </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/taekwondo' color="tones.white"> Taekwondo </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/contact' color="tones.white"> Contact </ChakraLink>
    </Flex>
  )

}