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
      <Flex justifyContent={"space-between"}
      pt={{base: '12', md: '0'}}
      >
        <Box>
          <Heading
            lineHeight={1.1}
            fontWeight={"bold"}
            pl="5"
            pt={{ base: "4", sm: "18", md: "90", lg:"140", xl: "180" }}
            fontSize={{ base: "xs", sm: "xl", md: "2xl", lg: "3xl", xl: "5xl" }}
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
            fontSize={{ base: "sm", md: "2xl", lg: "2xl", xl: "5xl" }}
            color="orange.900"
          >
            FAÇA SELECT
          </Text>
          <Text
            pt={{ base: "2", md: "4" }}
            pl="5"
            fontWeight="light"
            fontSize={{ base: "9px", md: "md", lg: "xl" }}
          >
            As pessoas de sucesso passam por aqui!
          </Text>
          <Text pl="5" fontWeight="light" 
          fontSize={{ base: "9px", md: "md", lg: "xl" }}
>
            28 anos formando pessoas para o sucesso.
          </Text>
        </Box>
          <Image
          w={{ base: "2xs", md:"lg", lg:"4xl", xl: "8xl" }}
          src="/backgrounds/banner.svg" alt="Banner hero" />
      </Flex>

      <Container maxW={"full"} px={0}>
        <Container maxW={{ base: '90%', md: '76%', lg:'70%', xl: '54%' }} px={0} 
        pb={{ base: '10', md: '20'}}>
          <SimpleGrid
            mt={{ base: '-4', md: '-8', xl: '-70'}}
            spacing={{ base: 2, md: 6 }}
            columns={'4'}
            w={{ base: '100%', md: '2xl', lg: '3xl', xl: '5xl' }}
            px={0}
            >
            <Card
            bg="transparent" variant={"unstyled"}>
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
                  fontSize={{ base: '2xs', md: 'md'}}
                  pt={{ base: '2', md: '6'}}
                >
                  PREMIAÇÕES
                </Text>
                <Text align="center"
                fontSize={{ base: '2xs', md: 'md'}}>
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
                  fontSize={{ base: '2xs', md: 'md'}}
                  pt={{ base: '2', md: '6'}}
                >
                  PROFISSIONAIS
                </Text>
                <Text align="center"
                fontSize={{ base: '2xs', md: 'md'}}>
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
                  fontSize={{ base: '2xs', md: 'md'}}
                  pt={{ base: '2', md: '6'}}
                >
                  CERTIFICAÇÃO
                </Text>
                <Text align="center"
                fontSize={{ base: '2xs', md: 'md'}}>
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
                  fontSize={{ base: '2xs', md: 'md'}}
                  pt={{ base: '2', md: '6'}}
                >
                  28 ANOS
                </Text>
                <Text align="center"
                fontSize={{ base: '2xs', md: 'md'}}>
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
