import { Box } from "@chakra-ui/react"
import React from "react"
import { NavBar } from "../../Components/Common/Navbar"
import { Footer } from "../../Components/Common/Footer"
import { Header } from "../../Components/Common/Header"

export const TaekwondoPage = () => {
  return (
    <Box>
      <Header />
      <NavBar />
      <Footer />
    </Box>
  )
}