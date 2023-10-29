import { Box, Flex, Heading, List, ListItem } from "@chakra-ui/react"
import { faAsterisk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const Values = () => {

  return (
    <Flex
      mt="16" 
      p="7" 
      bg="blue.dark"
      alignItems="center"
      flexDirection="column"
    >
      <Heading mb="5" color="tones.white">Our Values</Heading>

      <Flex  alignItems={{base:"flex-start", sm:"space-evenly" }}w="70%" justifyContent="space-around" alignContent="center" direction={{base:"column", sm:"row"}}>
        
        <Box>
          <List spacing={{base:"1", sm:"5"}}>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Courtesy
            </ListItem>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Integrity
            </ListItem>
          </List>
        </Box>

        <Box>
          <List spacing={{base:"1", sm:"5"}}>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Humility
            </ListItem>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Community
            </ListItem>
          </List>
        </Box>

        <Box>
          <List spacing={{base:"1", sm:"5"}}>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Courage
            </ListItem>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Focus
            </ListItem>
          </List>          
        </Box>

        <Box>
          <List spacing={{base:"1", sm:"5"}}>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Self-Control
            </ListItem>
            <ListItem color="tones.white">
              <FontAwesomeIcon icon={faAsterisk} color="#FDFFFC" size="1x" style={{ paddingRight: "10px" }}/>
              Respect
            </ListItem>
          </List>          
        </Box>
      </Flex>
    </Flex>
  )
}