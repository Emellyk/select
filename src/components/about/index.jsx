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
      <SimpleGrid
        pt={{ base: "0", md: "20" }}
        maxW={{ base: "90%", md: "100%" }}
      >
        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Image
            src="./images/fachada.svg"
            mt={{ base: '8', md: '0'}}
            width={{ base: '320px', md: '420px', xl: "880px" }}
            marginLeft={"-2"}
            roundedEnd={"40px"}
          />
          <Box
            pt={{ base: "4", md: "0" }}
            pl={{ base: "6", md: "12" }}
            pr={{ base: "6", md: "40" }}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "6xl" }}
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
            <Text pt="5" fontSize={{ base: "xs", md: "md" }}>
              Há mais de 10 anos a Select Training é escolhida como a melhor
              <br />
              escola de treinamentos e cursos de informática em Sinop, com
              <br />
              certificado reconhecido em todo território nacional.
            </Text>
            <Text pt="5" fontSize={{ base: "xs", md: "md" }}>
              Select, recebe em 2024 o prêmio <b>DESTAQUE EMPRESARIAL</b>, em
              três categorias:
              <br />
              - Escola de Informática <br />
              - Escola de Qualificação Profissional <br />- Escola de Oratória{" "}
            </Text>
          </Box>
        </Flex>
      </SimpleGrid>

      <SimpleGrid py={{ sm: '20', md: "24"}}>
        <Flex flexDirection={{ base: "column", md: "row" }}
          justifyContent={"flex-end"}
        >
          <Box align="end"
          mr={6}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "6xl" }}
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
            <Text pt="5" pl={"20"} fontSize={{ base: "xs", md: "md" }}>
              Sistema de Ensino EJA. <br />
              Com a conclusão do Ensino fundamental e o Ensino Médio <br />
              você já estará com as portas abertas para o mercado de trabalho.
              <br />
            </Text>
            <Text pt="5" fontSize={{ base: "xs", md: "md" }}>
              Select, recebe em 2024 o prêmio <b>MÉRITO LOGISTA</b>, como:
              <br />- Melhor EJA de Sinop/MT
            </Text>
            </Box>
          <Image
          justifyContent={"flex-end"}
          align={'end'}
            src="./images/fachada2.svg"
            width={{ base: "334px", xl: "880px" }}
            roundedStart={"40px"}
            marginLeft={8}
            mt={'2'}
            />
        </Flex>
      </SimpleGrid>
    </>
  );
}
