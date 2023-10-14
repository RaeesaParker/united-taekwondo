import { Flex, Image } from "@chakra-ui/react"
import ImageLogo from "../../Assets/LogoWider.png"
import React from "react"

export const Header = () => {
  return (
    <Flex justifyContent="center">
        <Image src={ImageLogo} alt='United Taekwondo Logo' h="30vh"/>
    </Flex>
  )
}