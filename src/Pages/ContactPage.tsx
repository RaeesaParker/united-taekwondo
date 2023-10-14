import { Box, Flex, Text } from "@chakra-ui/react"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import React from "react"

import { Associations } from "../Components/Common/Associations"
import { Footer } from "../Components/Common/Footer"
import { Header } from "../Components/Common/Header"
import { NavBar } from "../Components/Common/Navigation/Navbar"
import { MediaItem } from "../Components/ContactPage/MediaItem"
import { MessageBar } from "../Components/ContactPage/MessageBar"

export const ContactPage = () => {

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
          <Text lineHeight="taller" textAlign="center">Hey there! We&apos;re all ears and ready to assist with any information you might need. Don&apos;t hesitate to reach out using the options below:</Text>
        </Flex>
      </Flex>

      <Flex justifyContent="space-between" gap="2" mt="5">
        <Flex w="80%" bg="tones.white" flexDirection="column" justifyContent="space-between"> 
          <MediaItem title={"Phone"} text={"+44 7368974425"} iconName={faPhone} />
          <MediaItem title={"WhatsApp"} text={"+44 7368974425"} iconName={faWhatsapp} />
          <MediaItem title={"Email"} text={"unitedtaekwondo@gmail.com"} iconName={faEnvelope} />
          <MediaItem title={"Facebook"} text={"United Taekwondo"} iconName={faFacebook} linkToggle={"https://www.facebook.com/unitedtaekwondopreston"}/>
        </Flex>
        <MessageBar />
      </Flex>

      <Associations />
      <Footer />
    </Box>
  )
}