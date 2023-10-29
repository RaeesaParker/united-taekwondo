import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"

import { Associations } from "../../Components/Common/Associations"
import { CallToTrain } from "../../Components/Common/CallToTrain"
import { Footer } from "../../Components/Common/Footer"
import { Header } from "../../Components/Common/Header"
import { NavBar } from "../../Components/Common/Navigation/Navbar"
import { AboutDetails } from "../../Components/TaekwondoPage/AboutDetails"
import { BeltsIntro } from "../../Components/TaekwondoPage/BeltsIntro"
import { FeaturesDetails } from "../../Components/TaekwondoPage/FeaturesDetails"
import { TenetsDetails } from "../../Components/TaekwondoPage/TenetsDetails"

export const TaekwondoPage = () => {
  return (
    <Box>
      <Header />
      <NavBar />

      <Flex
        mt="8" 
        p="5" 
        justifyContent="center"
        alignContent="center"
      >
        <Flex  
          w={{base:"95%", sm:"60%" }}
          alignItems="center" 
          borderRight="5px solid #011627" 
          borderBottom="5px solid #011627" 
          borderTop="3px solid #011627" 
          borderLeft="3px solid #011627"
          p="5"
          textAlign="justify">
          <Text lineHeight="taller" textAlign="center">TaeKwonDo is a dynamic practice that intertwines mental focus and physical agility while promoting the ideals of courtesy, perseverance, self-control, and indomitable spirit at its core.</Text>
        </Flex>
      </Flex>

      <AboutDetails />
      <TenetsDetails />
      <FeaturesDetails />
      <BeltsIntro />
      <CallToTrain />
      <Associations />
      <Footer />
    </Box>
  )
}