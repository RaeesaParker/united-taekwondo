import { Flex, Button, FormControl, Text, Input, Textarea, useToast} from "@chakra-ui/react"
import { ValidationError, useForm } from "@formspree/react";
import React, { FormEvent } from "react"

export const MessageBox = () => {
  const toast = useToast()
  
  const [state, handleSubmit] = useForm("mknlpazw");
  if (state.succeeded) {
    return <Text> Thanks for your message</Text>
  }


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    const form = e.target as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;


    if (!name.value || !email.value || !message.value) {
      toast({
        title: "Error",
        description: "Please complete all lines of the form",
        status: "error",
        duration: 9000,
        isClosable: true,
        })
    }else{
      handleSubmit(e);
    }
  };

  if (state.succeeded) {
    return <Text> Thanks for your message</Text>;
  }

  return (      
    <Flex 
      mt="10" 
      p="5"
      justifyContent="space-evenly"
      alignContent="center"
    >
      <form onSubmit={onSubmit}>
        <FormControl>
          <Input        
            id="name"
            type="text" 
            name="name" 
            placeholder="Name"
            border="none"
            bg="tones.darkGrey"
            color="blue.dark"
          /> 
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </FormControl>

        <FormControl>
          <Input        
            id="email"
            type="email" 
            name="email" 
            placeholder="Email"
            border="none"
            bg="tones.darkGrey"
            color="blue.dark"
            mt="5"
          /> 
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </FormControl>

        <FormControl>
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            border="none"
            bg="tones.darkGrey"
            color="blue.dark"
            mt="5"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </FormControl>

        <Button type="submit" disabled={state.submitting} mt="5" w="100%" bg="blue.light">
          Submit
        </Button>
      </form>
    </Flex>
  )
}