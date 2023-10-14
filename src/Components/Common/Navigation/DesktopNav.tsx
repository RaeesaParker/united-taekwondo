import { Box, Button, ButtonGroup, Link as ChakraLink, Flex, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom"

export const DesktopNav = () => {

  return (
    <Flex 
      bg="blue.dark" 
      alignContent="center" 
      justifyContent="space-around" 
      padding="4"
      position="sticky"
      top="0"
      width="100%"
      h="10vh"
      zIndex="9000"
      borderBottom="2px solid white"
    >
      <ChakraLink as={ReactRouterLink} to='/' color="tones.white"> Home </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/about' color="tones.white"> About </ChakraLink>
      <ChakraLink as={ReactRouterLink} to='/training' color="tones.white"> Training </ChakraLink>

      <ChakraLink as={ReactRouterLink} to='/' color="tones.white"> 
        <Menu>
          <MenuButton color="tones.white"> Taekwondo </MenuButton>
          <MenuList >
            <Text color="blue.dark">COMING SOON!</Text>
          </MenuList>
        </Menu>
      </ChakraLink>
{/* 
      <Menu>
        <MenuButton color="tones.white"> Taekwondo </MenuButton>
        <MenuList >
          <Text>COMING SOON!</Text>
        </MenuList> */}

        {/* <MenuList >
          <Button bg="none" fontWeight="normal"_hover={{backgroundColor:"none"}}>
            <ChakraLink as={ReactRouterLink} to="/taekwondo/belts"> About </ChakraLink>
          </Button>

          <Popover placement="bottom-start" trigger="hover" >
            <PopoverTrigger  >
              <Button 
                bg="none"
                fontWeight="normal"
                _hover={{ textDecoration:"underline"}}
                width="100%"
                justifyContent="flex-start"
              >
                <Text textAlign="left">Belts</Text>
              </Button>
            </PopoverTrigger>

            <Portal>
              <PopoverContent w="100%">
                <PopoverBody >
                  <DropDownButton text={"White"} link={"taekwondo/belt/white"}/>
                  <DropDownButton text={"Yellow"} link={"taekwondo/belt/yellow"} />
                  <DropDownButton text={"Green Tag"} link={"taekwondo/belt/green-tag"} />
                  <DropDownButton text={"Green"} link={"taekwondo/belt/green"} />
                  <DropDownButton text={"Blue Tag"} link={"taekwondo/belt/blue-tag"} />
                  <DropDownButton text={"Blue"} link={"taekwondo/belt/blue"} />
                  <DropDownButton text={"Red Tag"} link={"taekwondo/belt/red-tag"}/>
                  <DropDownButton text={"Red"} link={"taekwondo/belt/red"}/>
                  <DropDownButton text={"Black Tag"} link={"taekwondo/belt/black-tag"} />
                  <DropDownButton text={"Black"} link={"taekwondo/belt/black"} />
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          
        </MenuList> */}
      {/* </Menu> */}

      <ChakraLink as={ReactRouterLink} to='/contact' color="tones.white"> Contact </ChakraLink>
    
    </Flex>
  );
};


export const DropDownButton = ({text, link}: {text:string, link:string}) => {
  return (
    <Box>
      <Button 
        bg="none"
        fontWeight="normal"
        _hover={{ textDecoration:"underline"}}
        justifyContent="flex-start"
      >
        <ChakraLink as={ReactRouterLink} to={link} color="blue.dark"> {text} </ChakraLink>
      </Button>
      <br></br>
    </Box>
  )
}