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
    AspectRatio
  } from "@chakra-ui/react";


export default function Header2() {
  return (
    <>
      <Box
    as='video'
    muted
    loop
    autoPlay='true'
    src='/backgrounds/newhero2.mp4'
    alt='hero'
    objectFit='contain'
    maxH={'cover'}
    sx={{
      aspectRatio: '16/9'
    }}
/>


      <Container maxW={"full"} px={2} backgroundColor='green.500'>
        <Container maxW={{ base: '90%', md: '76%', lg:'70%', xl: '54%' }} px={0} 
        pb={{ base: '10', md: '20'}}
        >
          <SimpleGrid
            pt={20}
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
                src="./images/certificados.png"
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
                src="./images/30anos2.png"
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
                  30 ANOS
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
