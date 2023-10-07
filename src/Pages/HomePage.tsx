import { Box } from "@chakra-ui/react"
import React from "react"
import { NavBar } from "../Components/Common/Navbar"
import { Introduction } from "../Components/Homepage/Introduction"
import { ContactBar } from "../Components/Common/Contact/ContactBar"

export const Homepage = () => {
  return (
    <Box>
      <NavBar />
      <Introduction />
      <ContactBar />
    </Box>
  )
}