import { Box, Flex, Image } from "@chakra-ui/react"
import React from "react"
import { NavBar } from "../Components/Common/Navbar"
import { Introduction } from "../Components/Homepage/Introduction"
import { ContactBar } from "../Components/Common/Contact/ContactBar"
import { Address } from "../Components/Common/Contact/Address"
import { Associations } from "../Components/Common/Associations"
import { Footer } from "../Components/Common/Footer"
import ImageLogo from "../Assets/LogoWider.png"

export const Homepage = () => {
  return (
    <Box mt="15vh">
      <Flex justifyContent="center">
        <Image src={ImageLogo} alt='United Taekwondo Logo'  w="50%"/>
      </Flex>
      <NavBar />
      <Introduction />
      <ContactBar />
      <Address />
      <Associations />
      <Footer />
    </Box>
  )
}