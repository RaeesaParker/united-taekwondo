import { Box } from "@chakra-ui/react"
import React from "react"

import { Footer } from "../../Components/Common/Footer"
import { Header } from "../../Components/Common/Header"
import { NavBar } from "../../Components/Common/Navigation/Navbar"

export const TaekwondoPage = () => {
  return (
    <Box>
      <Header />
      <NavBar />
      <Footer />
    </Box>
  )
}