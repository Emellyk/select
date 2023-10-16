import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Container,
  Heading,
} from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <SimpleGrid pt="8">
        <Flex>
          <Image
            src="./images/fachada.svg"
            width="940px"
            marginLeft={"-2"}
            roundedEnd={"40px"}
          />
          <Box pl="12" pr={"40"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "orange.900",
                  zIndex: -1,
                }}
              >
                SELECT
              </Text>
              <br />
              <Text as={"span"} color={"orange.900"}>
                TRAINING
              </Text>
            </Heading>
            <Text pt="5">
              Há mais de 10 anos a Select Training é escolhida como a melhor <br/>
              escola de treinamentos e cursos de informática em Sinop, com <br/>
              certificado reconhecido em todo território nacional.
            </Text>
            <Text pt="5">- informações</Text>
            <Text pt="5">- informações</Text>
            <Text pt="5">- informações</Text>
            <Text pt="5">- informações</Text>
          </Box>
        </Flex>
      </SimpleGrid>

      <SimpleGrid py="24">
        <Flex justifyContent={"flex-end"}>
          <Box pr="12" pl="40" align="end">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "orange.900",
                  zIndex: -1,
                }}
              >
                COLÉGIO
              </Text>
              <br />
              <Text as={"span"} color={"orange.900"}>
                SELECT
              </Text>
            </Heading>
            <Text pt="5" pl={'20'}>
              Sistema de Ensino EJA. <br/>
              Com a conclusão do Ensino fundamental e o Ensino Médio <br/>
              você já estará com as portas abertas para o mercado de trabalho.
            </Text>
            <Text pt="5">informações -</Text>
            <Text pt="5">informações -</Text>
            <Text pt="5">informações -</Text>
            <Text pt="5">informações -</Text>
          </Box>
          <Image
            src="./images/fachada.svg"
            width="940px"
            marginRight={"-4"}
            roundedStart={"40px"}
          />
        </Flex>
      </SimpleGrid>
    </>
  );
}
