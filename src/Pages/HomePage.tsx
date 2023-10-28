import { Box } from "@chakra-ui/react"
import React from "react"

import { Associations } from "../Components/Common/Associations"
import { Address } from "../Components/Common/Contact/Address"
import { ContactBar } from "../Components/Common/Contact/ContactBar"
import { Footer } from "../Components/Common/Footer"
import { FSF } from "../Components/Common/FSF"
import { Header } from "../Components/Common/Header"
import { NavBar } from "../Components/Common/Navigation/Navbar"
import { Introduction } from "../Components/Homepage/Introduction"

export const Homepage = () => {
  return (
    <Box>
      <Header /> 
      <NavBar />
      <FSF/>
      <Introduction />
      <ContactBar />
      <Address />
      <Associations />
      <Footer />
    </Box>
  )
}