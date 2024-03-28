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
    <Box 
    h={'72vh'}
    backgroundImage="/images/footer4.png"
    backgroundRepeat="no-repeat"
    >

      <Box px={'60'}>
        <Divider pt={'20'} borderColor={'orange.900'}/>
      </Box>

      <Container
      py="24"
      maxW={{ base: "90%", md: "70%" }} pb={"10"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} align={"center"}>
          <Box>
            <Text fontSize={{ base: "xl", md: "2xl" }} 
            bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
            bgClip="text"
            fontWeight="bold"> 
              ATENDIMENTO SELECT
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="blue.900" pt="8">
              (66) 3531-4428
            </Text>
            <Text color="blue.900" fontSize={{ base: "sm", md: "md" }} pb={"2"}>
              Segunda à Sábado,
              <br /> das 07:30 às 20:00.
            </Text>
          </Box>
          <Box mt={{ base: "8", md: "0" }} align={"center"}>
            <Text fontSize={{ base: "xl", md: "2xl" }} 
            bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
            bgClip="text"
            fontWeight="bold">
              SIGA NOSSAS REDES SOCIAIS
            </Text>
            <Flex pt={8} align="center">
              <Image src="/icons/facebook.png" maxW="40px" />
              <Link
                color="blue.900"
                fontSize={{ base: "sm", md: "md" }}
                textDecoration={"none"}
                _hover={{
                  color: "blue.200",
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
                color="blue.900"
                fontSize={{ base: "sm", md: "md" }}
                textDecoration={"none"}
                _hover={{
                  color: "blue.200",
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
                color="blue.900"
                fontSize={{ base: "sm", md: "md" }}
                textDecoration={"none"}
                _hover={{
                  color: "blue.200",
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
            <Text fontSize={{ base: "xl", md: "2xl" }} 
            bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
            bgClip="text"
            fontWeight="bold">
              LOCALIZAÇÃO
            </Text>
            <Text
              color="blue.900"
              fontSize={{ base: "sm", md: "md" }}
              pt="8"
              pb="2"
            >
              Rua das Primaveras, 2774 - Centro - Sinop/MT
            </Text>
          </Box>
        </SimpleGrid>

        <Box mt={'28'} mr={20}>
        <Text
          bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
          bgClip="text"
          align="center"
          fontSize={{ base: "2xs", md: "20"}}
          fontWeight={{ base: "normal", md: "bold"}}
          pt={{ base: "6", md: "20"}}
        >
          Select, as pessoas de Sucesso passam por aqui!
        </Text>
        <Text 
        fontSize={{ base: "8", md: "16"}}
        bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
            bgClip="text" 
        align="center">
          Todos os direitos reservados | <b>SELECT TRAINING © 2024</b>
        </Text>
      </Box>

      </Container>
      </Box>
    </>
  );
}
