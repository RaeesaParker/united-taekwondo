import { Link as ChakraLink, Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom"

export const DesktopNav = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex 
      bg="blue.dark" 
      alignItems="center" 
      justifyContent="space-around" 
      position="sticky"
      top="0"
      width="100%"
      h={{base:"8vh", sm:"12vh", md:"10vh",  lg:"8vh" , xl:"5vh"}}
      zIndex="9000"
      borderBottom="2px solid white"
    >
      <ChakraLink as={ReactRouterLink} to='/' color="tones.white"> Home </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/about' color="tones.white"> About </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/training' color="tones.white"> Training </ChakraLink>

      <Menu isOpen={isOpen} onClose={onClose}>
        <MenuButton _hover={{ textDecoration: "underline" }} onClick={onOpen} color="tones.white">
          TaeKwonDo {<FontAwesomeIcon icon={faChevronDown} />}
        </MenuButton>
        <MenuList>
          <ChakraLink as={ReactRouterLink} to='/taekwondo' color="tones.white">             
            <MenuItem color="blue.dark">About</MenuItem>
          </ChakraLink>
          <ChakraLink as={ReactRouterLink} to='/taekwondo/belts' color="tones.white">             
            <MenuItem color="blue.dark">Belts</MenuItem>
          </ChakraLink>          
        </MenuList>
      </Menu>

      <ChakraLink as={ReactRouterLink} to='/contact' color="tones.white"> Contact </ChakraLink>
    </Flex>
  );
};