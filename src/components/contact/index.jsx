import {
  Divider,
  Box,
  Flex,
  AbsoluteCenter,
  Button,
  Text,
  Container,
  Image,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaWhatsapp, FaMapMarkerAlt, FaGifts } from "react-icons/fa";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

<script src="https://cdn.lordicon.com/bhenfmcm.js"></script>;

export function Contact() {
  return (
    <>
      <Box py="6">
        <Divider />
      </Box>

      <Container maxW={{ base: "90%", md: "70%" }} pb={"10"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} align={"center"}>
          <Box>
            <Text fontSize={{ base: "xl", md: "2xl" }} color={"orange.900"}>
              ATENDIMENTO SELECT
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="#014181" pt="2">
              (66) 3531-4428
            </Text>
            <Text color="#014181" fontSize={{ base: "sm", md: "md" }} pb={"2"}>
              Segunda à Sábado,
              <br /> das 07:30 às 20:00.
            </Text>
          </Box>
          <Box mt={{ base: "8", md: "0" }} align={"center"}>
            <Text fontSize={{ base: "xl", md: "2xl" }} color="#F37A02">
              SIGA NOSSAS REDES SOCIAIS
            </Text>
            <Flex pt={2} align="center">
              <Image src="/icons/facebook.png" maxW="40px" />
              <Link
                color="blue.500"
                fontSize={{ base: "sm", md: "md" }}
                textDecoration={"none"}
                _hover={{
                  color: "orange.900",
                }}
                pl="2"
                href="https://www.facebook.com/selecttraining"
                target="_blank"
              >
                Escola Select Training
              </Link>
            </Flex>
            <Flex align="center" pt="2">
              <Image src="/icons/instagram.png" maxW="42px" />
              <Link
                color="blue.500"
                fontSize={{ base: "sm", md: "md" }}
                textDecoration={"none"}
                _hover={{
                  color: "orange.900",
                }}
                pl="2"
                href="https://www.instagram.com/selectsinopoficial/"
                target="_blank"
              >
                @selecttraining
              </Link>
            </Flex>
            <Flex align="center" pt="1" pb="2">
              <Image src="/icons/youtube.png" maxW="42px" />
              <Link
                color="blue.500"
                fontSize={{ base: "sm", md: "md" }}
                textDecoration={"none"}
                _hover={{
                  color: "orange.900",
                }}
                pl="2"
                href="https://www.youtube.com/@escolaselectsinop/featured"
                target="_blank"
              >
                @escolaselectsinop
              </Link>
            </Flex>
          </Box>

          <Box mt={{ base: "6", md: "0" }}>
            <Text fontSize={{ base: "xl", md: "2xl" }} color="#F37A02">
              LOCALIZAÇÃO
            </Text>
            <Text
              color="#014181"
              fontSize={{ base: "sm", md: "md" }}
              pt="2"
              pb="2"
            >
              Rua das Primaveras, 2774 - Centro - Sinop/MT
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}
