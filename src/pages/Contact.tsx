import React, { useState } from "react";
import {
  Button,
  Center,
  Container,
  Text,
  Heading,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { PRIMARY, SECONDARY } from "../utils/constants/Theme";
import { MdEmail } from "react-icons/md";
import Email from "../types/Email";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { EmailError } from "../types/Errors";
import { validateEmail } from "../services/contact/validateEmail";
import { sendEmail } from "../services/contact/sendEmail";

const Contact: React.FC = () => {
  const toast = useToast();
  const [email, setEmail] = useState<Email>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<EmailError>({
    hasError: false,
    isEmail: false,
    isMessage: false,
    isName: false,
    isSubject: false,
    messages: new Array<string>(),
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [hasSent, setHasSent] = useState<boolean>(false);
  const [buttonMessage, setButtonMessage] = useState<string>("Send Message");

  const handleEmailSendClick = async () => {
    setIsSending(true);
    const isEmailValid = validateEmail(email);
    if (isEmailValid.hasError) {
      setErrors({
        hasError: isEmailValid.hasError,
        isEmail: isEmailValid.isEmail,
        isMessage: isEmailValid.isMessage,
        isName: isEmailValid.isName,
        isSubject: isEmailValid.isSubject,
        messages: isEmailValid.messages,
      });

      setIsSending(false);

      toast({
        title: "Error Sending Email",
        description: isEmailValid.messages[0],
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      try {
        await sendEmail(email);
        setErrors({
          hasError: false,
          isEmail: false,
          isMessage: false,
          isName: false,
          isSubject: false,
          messages: new Array<string>(),
        });

        setIsSending(false);
        setHasSent(true);
        setButtonMessage("Message Sent");

        toast({
          title: "Email Sent",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      } catch (e: any) {
        setIsSending(false);
        toast({
          title: "Failed Sending Email",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Center bg="#1f2833" h="100vh">
      <Container minW="50vw">
        <Heading mb="32px" color={PRIMARY}>
          Contact Me
        </Heading>
        <Text mb="32px" color="white">
          I'm interested in everything computer science, especially web
          development. So if you have any questions are are interested int
          contacting me about an opportunity, my inbox is always open!
        </Text>
        <HStack mb="8px">
          <Input
            mr="8px"
            placeHolder="Name"
            onChangeHandler={(e) =>
              setEmail((prevState) => ({ ...prevState, name: e.target.value }))
            }
            hasError={errors.hasError && errors.isName}
          />
          <Input
            ml="8px"
            placeHolder="Email"
            onChangeHandler={(e) =>
              setEmail((prevState) => ({ ...prevState, email: e.target.value }))
            }
            hasError={errors.hasError && errors.isEmail}
          />
        </HStack>
        <Input
          mt="8px"
          mb="8px"
          placeHolder="Subject"
          onChangeHandler={(e) =>
            setEmail((prevState) => ({ ...prevState, subject: e.target.value }))
          }
          hasError={errors.hasError && errors.isSubject}
        />
        <Textarea
          mt="8px"
          mb="8px"
          placeHolder="Message"
          onChangeHandler={(e) =>
            setEmail((prevState) => ({ ...prevState, message: e.target.value }))
          }
          hasError={errors.hasError && errors.isMessage}
        />
        <Button
          leftIcon={<MdEmail />}
          isLoading={isSending}
          isDisabled={hasSent}
          loadingText="Sending Email"
          mt="8px"
          h="50px"
          float="right"
          variant="outline"
          color={SECONDARY}
          borderColor={SECONDARY}
          textColor={PRIMARY}
          _hover={{ color: PRIMARY, borderColor: PRIMARY }}
          onClick={() => handleEmailSendClick()}
        >
          {buttonMessage}
        </Button>
      </Container>
    </Center>
  );
};

export default Contact;
