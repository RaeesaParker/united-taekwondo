import { Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"

export const TrainingDetails = () => {
  return (
    <Flex
      mt="12" 
      p="7" 
      bg="blue.dark"
      alignItems={{base:"center", sm:"flex-start"}}
      justifyContent="space-evenly"
      flexDirection={{base:"column", sm:"row"}}
    >
      <Flex justifyContent="flex-start" direction="column">
        <Heading  mb={{base:"1", sm:"5"}} color="tones.white" textAlign="center">Training Times</Heading>
        <Flex direction="column" ml="5" justifyContent="center" gap="3">
          <Text textAlign="center" as="h3" fontWeight="bold" color="tones.white">Fridays</Text>
          <Text textAlign="center" color="tones.white"> 5pm - 6pm &nbsp;&nbsp;&nbsp;&nbsp; Everyone</Text>
          <Text textAlign="center" color="tones.white">6pm - 7pm &nbsp;&nbsp;&nbsp;&nbsp; Blue Belts + </Text>
        </Flex>
      </Flex>

      <Flex direction="column" mt={{base:"7", sm:"0"}}>
        <Heading  mb={{base:"1", sm:"5"}} color="tones.white" textAlign="center">Fees</Heading>
        <Text textAlign="center" as="h3" fontWeight="bold" color="tones.white">£5.50 per class</Text>
      </Flex>

      <Flex  
        w={{base:"95%", sm:"20%"}}
        alignItems="center" 
        borderRight="5px solid #007CBE" 
        borderBottom="5px solid #007CBE" 
        borderTop="3px solid #007CBE" 
        borderLeft="3px solid #007CBE"
        p="5"
        textAlign="justify"
        flexDirection="column"
        mt={{base:"7", sm:"0"}}
        >
        <Text lineHeight="taller" textAlign="center" fontWeight="extrabold" color="tones.white">No membership fees!</Text>
        <Text lineHeight="taller" textAlign="center" color="tones.white">Simply pay as you go!</Text>
      </Flex>

    </Flex>
  )
}