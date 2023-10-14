import { Flex, Image, useBreakpointValue } from "@chakra-ui/react"
import React from "react"

import ImageMobileLogo from "../../Assets/LogoNew.png"
import ImageLogoTablet from "../../Assets/LogoWide.png"
import ImageLogo from "../../Assets/LogoWider.png"

export const Header = () => {
  const imageSize = useBreakpointValue({ base: "100%", sm: "80%", md: "60%" });

  const logoSrc = useBreakpointValue({
    base: ImageMobileLogo,
    sm: ImageLogoTablet,
    md: ImageLogo,
  });


  return (
    <Flex justifyContent="center">
      <Image src={logoSrc} alt="United Taekwondo Logo" width={imageSize} />    
    </Flex>
  )
}