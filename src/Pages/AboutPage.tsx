import { Box } from "@chakra-ui/react"
import React from "react"

import { About } from "../Components/AboutPage/About"
import { CTA } from "../Components/AboutPage/CTA"
import { Values } from "../Components/AboutPage/Values"
import { Associations } from "../Components/Common/Associations"
import { Footer } from "../Components/Common/Footer"
import { Header } from "../Components/Common/Header"
import { NavBar } from "../Components/Common/Navigation/Navbar"

export const AboutPage = () => {
  return (
    <Box>
      <Header />
      <NavBar />
      <About />
      <Values />
      <CTA />
      <Associations />
      <Footer />
    </Box>
  )
}