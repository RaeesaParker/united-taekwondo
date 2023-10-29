import { Box } from "@chakra-ui/react"
import React from "react"

import { Belts } from "../../Components/BeltsPage/Belts"
import { BeltsOrder } from "../../Components/BeltsPage/BeltsOrder"
import { Associations } from "../../Components/Common/Associations"
import { CallToTrain } from "../../Components/Common/CallToTrain"
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
      <CallToTrain />
      <Associations />
      <Footer />
    </Box>
  )
}