import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { PROD_server, DEV_server } from "../../index";

const AddToWaitingList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      await axios.post(
        `${PROD_server}/excited`,
        { name, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(data);

      setLoading(false);
      toast({
        title: `Thanks ${name}`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      onClose();
    } catch (error) {
      console.log(error);
      toast({
        title: "Some error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Tooltip label={`To get future updates`} hasArrow placement="top">
        <Button variant={"solid"} colorScheme={"blue"} onClick={onOpen}>
          Click here
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize={"40px"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Tooltip label={"I am also excited"} placement={"top-end"} hasArrow>
              <Heading fontFamily={"body"}>I'll get you a GF</Heading>
            </Tooltip>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            {/* -----Form----- */}
            <form style={{ width: "100%" }} onSubmit={submitHandler}>
              <Box marginY={4}>
                <FormLabel htmlFor="name" children="Your Name" />
                <Tooltip
                  hasArrow
                  label={"Your kind name please"}
                  placement={"bottom-start"}
                >
                  <Input
                    required
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name please"
                    type="text"
                    focusBorderColor="yellow.500"
                  />
                </Tooltip>
              </Box>
              <Box marginY={4}>
                <FormLabel htmlFor="email" children="Your Email Address" />
                <Tooltip
                  hasArrow
                  label={"So that we can notify you for future updates"}
                  placement={"bottom-start"}
                >
                  <Input
                    required
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email please"
                    type="email"
                    focusBorderColor="yellow.500"
                  />
                </Tooltip>
              </Box>
              <Box marginY={4}>
                <FormLabel htmlFor="message" children="Message" />
                <Textarea
                  required
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I am very excited! `If you have any message or query, please do let me know 😄"
                  focusBorderColor="yellow.500"
                />
              </Box>
              <Tooltip
                label={`Thank you ${name}`}
                placement={"right-start"}
                hasArrow
              >
                <Button
                  isLoading={loading}
                  my={4}
                  colorScheme="yellow"
                  type="submit"
                >
                  Send
                </Button>
              </Tooltip>
            </form>
            {/* ---------- */}
          </ModalBody>
          <ModalFooter height={"6rem"}>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddToWaitingList;
