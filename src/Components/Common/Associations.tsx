import { Flex, Image} from "@chakra-ui/react"
import React from "react"
import ImageWTF from "../../Assets/wtf.png"
import ImageBritishTaekwondo from "../../Assets/BritishTaekwondo.png"

export const Associations = () => {
  return (
    <Flex justifyContent="space-around" alignContent="center" mt="5" mb="5">
      <Image src={ImageWTF} alt='World Taekwondo Federation Logo' w="20%"/>
      <Image src={ImageBritishTaekwondo} alt='British Taekwondo Logo'  w="20%"/>
    </Flex>
  )
}