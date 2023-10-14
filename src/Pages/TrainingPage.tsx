import { Box, Flex, Text } from "@chakra-ui/react"
import React from "react"

import { Address } from "../Components/Common/Contact/Address"
import { Footer } from "../Components/Common/Footer"
import { Header } from "../Components/Common/Header"
import { NavBar } from "../Components/Common/Navbar"
import { TrainingContact } from "../Components/TrainingPage/TrainingContact"
import { TrainingDetails } from "../Components/TrainingPage/TrainingDetails"

export const TrainingPage = () => {
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
          w="60%" 
          alignItems="center" 
          borderRight="5px solid #011627" 
          borderBottom="5px solid #011627" 
          borderTop="3px solid #011627" 
          borderLeft="3px solid #011627"
          p="5"
          textAlign="justify">
          <Text lineHeight="taller" textAlign="center">Join us for an invigorating training experience led by Master Julie Graham. Whether you&apos;re a beginner or an experienced practitioner, our classes cater to all levels and ages.</Text>
        </Flex>
      </Flex>

      <TrainingDetails />
      <Address />
      <TrainingContact />
      <Footer />
    </Box>
  )
}