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

export function Ages() {
  return (
    <>
      <Container maxW={"100%"}>
        <Container maxW="1024px" pt="24">
          <Text
            bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="bold"
            align="center"
          >
            O ENSINO PENSADO PARA TODAS AS FASES DE SUA VIDA
          </Text>
          <Text fontSize="xl" fontWeight="light" align="center" pt="5">
            Com profissionais qualificados para transmitir o conhecimento com a{" "}
            <br />
            linguagem correta para cada faixa etária.
          </Text>

          <SimpleGrid
            pt="20"
            pb="20"
            gap="16"
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          >
            <Card bg="transparent">
              <Image
                objectFit="cover"
                src="/images/criancas.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  bgGradient="linear(to-tr, #EB4561, #FFEB40)"
                  bgClip="text"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  CRIANÇAS
                </Text>
                <Text align="center">
                  Linguagem adequada para a idade, de forma lúdica e divertida
                  para aprenderem a forma correta e segura a manusear o
                  computador
                </Text>
              </CardBody>
            </Card>
            <Card bg="transparent">
              <Image
                objectFit="cover"
                src="/images/jovens.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  bgGradient="linear(to-tr, #EB4561, #FFEB40)"
                  bgClip="text"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  JOVENS
                </Text>
                <Text align="center">
                  Com linguagem específica para esse momento, abordagem das
                  melhores formas para ingressarem ao mercado de trabalho
                </Text>
              </CardBody>
            </Card>
            <Card bg="transparent">
              <Image
                objectFit="cover"
                src="/images/adultos.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  bgGradient="linear(to-tr, #EB4561, #FFEB40)"
                  bgClip="text"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  ADULTOS
                </Text>
                <Text align="center">
                  Aprender no seu tempo, com atividades práticas e aulas extras
                  para a fixação do conteúdo.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
}
