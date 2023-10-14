import { Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import React from "react"

import ImageMobileLogo from "../../Assets/LogoNew.png"
import ImageLogo from "../../Assets/LogoWider.png"

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false }); 

  return (
    <Flex justifyContent="center">
        <Image src={isMobile ? ImageMobileLogo : ImageLogo} alt='United Taekwondo Logo' h="30vh"/>
    </Flex>
  )
}