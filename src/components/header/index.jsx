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



export default function Header() {
  return (
    <>
      <Flex pos="absolute" right="0">
        <Flex direction={"column"}>
          {/*}
    <Box
      pt= {{ base:'100', md:'150', lg:'224'}}
      pl="5"
      fontWeight="bold"
      fontSize= {{ base:'2xl', md:'4xl', lg:'5xl' }}
      color="blue.900"

    >
      CONSTRUA <br />
      SUA HISTÓRIA
    </Box>
*/}

          <Heading
            lineHeight={1.1}
            fontWeight={"bold"}
            pl="5"
            pt={{ base: "100", md: "150", lg: "224" }}
            fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "12%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "orange.900",
                zIndex: -1,
              }}
            >
              CONSTRUA <br />
              SUA HISTÓRIA
            </Text>
          </Heading>

          <Text
            pl="5"
            fontWeight="bold"
            fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
            color="#F37A02"
          >
            FAÇA SELECT
          </Text>
          <Text
            pt="4"
            pl="5"
            fontWeight="light"
            fontSize="22px"
            color="#001F55"
          >
            As pessoas de sucesso passam por aqui!
          </Text>
          <Text pl="5" fontWeight="light" fontSize="20px" color="#001F55">
            28 anos formando pessoas para o sucesso.
          </Text>
        </Flex>
        <Box
          h={{ base: "26vh", md: "46vh", lg: "84vh" }}
          t={{ base: "0", md: "0", lg: "0" }}
          l={{ base: "0", md: "0", lg: "0" }}
          p={"fixed"}
        >
          <Image src="/backgrounds/banner.svg" alt="Banner hero" />
        </Box>
      </Flex>

      <Container maxW={"full"}>
        <Container maxW="1024px" pt="32" pb="20">
          <SimpleGrid
            pt="600"
            spacing={6}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card bg="transparent" variant={"unstyled"}>
              <Image
                objectFit="cover"
                src="./images/premios.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  color="orange.900"
                  fontWeight="bold"
                  pt={"5"}
                >
                  PREMIAÇÕES
                </Text>
                <Text align="center">
                  Eleita há 19 anos a melhor escola de cursos de Sinop
                </Text>
              </CardBody>
            </Card>
            <Card bg="transparent" variant={"unstyled"}>
              <Image
                objectFit="cover"
                src="/images/profissionais.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  color="orange.900"
                  fontWeight="bold"
                  pt={"5"}
                >
                  PROFISSIONAIS
                </Text>
                <Text align="center">
                  Profissionais qualificados com garantia de aprendizado
                </Text>
              </CardBody>
            </Card>
            <Card bg="transparent" variant={"unstyled"}>
              <Image
                objectFit="cover"
                src="./images/premios.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  color="orange.900"
                  fontWeight="bold"
                  pt={"5"}
                >
                  CERTIFICAÇÃO
                </Text>
                <Text align="center">
                  Certificado reconhecido em todo território brasileiro
                </Text>
              </CardBody>
            </Card>
            <Card bg="transparent" variant={"unstyled"}>
              <Image
                objectFit="cover"
                src="./images/premios.svg"
                borderRadius="lg"
              />
              <CardBody>
                <Text
                  align="center"
                  color="orange.900"
                  fontWeight="bold"
                  pt={"5"}
                >
                  28 ANOS
                </Text>
                <Text align="center">
                  Desde 1994 fazendo história e transformando vidas
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
}
