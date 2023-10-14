import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react"
import React from "react"

import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

export const NavBar = () => {

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>      
      <DesktopNav /> 
    </Box>

  
  )
}


