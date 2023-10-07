import { Box, Flex, Image } from "@chakra-ui/react"
import React from "react"
import imageJulie from "../../Assets/Julie.png";

export const Introduction = () => {
  return (
    <Flex>
      <Box>

      </Box>
      <Flex justifyContent="center">
        <Image src={imageJulie} alt="Image of instructor Master Julie Graham" />
      </Flex>
    </Flex>
  )
}