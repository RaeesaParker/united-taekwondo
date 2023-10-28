import { Box } from "@chakra-ui/react"
import React from "react"

import { Belts } from "../../Components/BeltsPage/Belts"
import { BeltsOrder } from "../../Components/BeltsPage/BeltsOrder"
import { Footer } from "../../Components/Common/Footer"
import { Header } from "../../Components/Common/Header"
import { NavBar } from "../../Components/Common/Navigation/Navbar"

export const BeltsPage = () => {
  return (
    <Box>
      <Header />
      <NavBar />
      <Belts />
      <BeltsOrder />
      <Footer />
    </Box>
  )
}