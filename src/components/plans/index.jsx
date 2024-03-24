import {
  Box,
  Center,
  Text,
  Heading,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Plans() {
  return (
    <>
      <Box
        w="full"
        h={{ base: '28vh', md: "42vh"}}
        backgroundImage="./backgrounds/planos.svg"
        backgroundSize='cover'
        backgroundPosition={'center'}
      />

      <Heading
        pt={"10"}
        align={"center"}
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
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
          PLANOS DE
        </Text>
        <Text as={"span"} color={"orange.900"}>
          {" "}
          CARREIRA
        </Text>
      </Heading>
      <Text
        fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
        align={"center"}
        pt={"2"}
        fontWeight={"medium"}
        color="orange.900"
      >
        Escolha o plano ideal para você
      </Text>


      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: '4', md: "8"}} 
      px={{ base:'10', md: "40"}} py={"10"}>
        <Card boxShadow={"2xl"} rounded={"xl"}>
          <CardHeader h={{ base: '180', md: "280"}}>
            <Text
              fontSize={{ base: "sm", md: "md", xl: 'xl' }}
              fontWeight={500}
              bg={"orange.100"}
              p={2}
              px={3}
              color={"orange.900"}
              rounded={"full"}
              textAlign={"center"}
            >
              PLANO 1
            </Text>
            <Text
              fontSize={{ base: "xl", sm: "xl", md: 'xl', lg: "3xl" }}
              fontWeight="bold"
              color="blue.900"
              align={"center"}
              pt={"5"}
            >
              Operador de Computador + Designer Gráfico Profissional
            </Text>
          </CardHeader>
          <CardBody bg={"gray.50"} px={6} py={2}>
            <List spacing={3} fontSize={{ base: "xs", sm: "md", lg: "xl" }}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Domine os principais programas do computador e aprenda a magia
                do mundo gráfico
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas Operador: Windows, Pacote Office e Internet
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas Designer: CorelDRAW, Photoshop, Illustrator, Indesign,
                Animate e Vegas
              </ListItem>
            </List>
          </CardBody>
          <CardFooter bg={"gray.50"} rounded={"xl"}>
            <Button
              w={"full"}
              bg={"orange.900"}
              color={"white"}
              fontSize={{base:  "sm", md: "md" }}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(215 215 215 / 100%)"}
              _hover={{
                bg: "orange.500",
              }}
              _focus={{
                bg: "orange.500",
              }}
              href='https://api.whatsapp.com/send?phone=5566999712567'
            >
              Escolher plano
            </Button>
          </CardFooter>
        </Card>

        <Card boxShadow={"2xl"} rounded={"xl"}>
          <CardHeader h={{ base: '180', md: "280"}}>
            <Text
              fontSize={{ base: "sm", md: "xl" }}
              fontWeight={500}
              bg={"orange.100"}
              p={2}
              px={3}
              color={"orange.900"}
              rounded={"full"}
              textAlign={"center"}
            >
              PLANO 2
            </Text>
            <Text
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="blue.900"
              align={"center"}
              pt={"5"}
            >
              Operador de Computador + Manutenção de Comp. e Notebooks
            </Text>
          </CardHeader>
          <CardBody bg={"gray.50"} px={6} py={2}>
            <List spacing={3} fontSize={{ base: "xs", sm: "md", lg: "xl" }}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Fique expert em computação e aprenda a fazer manutenção em
                programas, computadores e notebooks
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas Operador: Windows, Pacote Office e Internet
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas Manutenção: Formatação de Computadores, Configurações
                de programas e Sistemas Operacionais
              </ListItem>
            </List>
          </CardBody>
          <CardFooter bg={"gray.50"} rounded={"xl"}>
            <Button
              w={"full"}
              bg={"orange.900"}
              color={"white"}
              fontSize={{base:  "sm", md: "md" }}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(215 215 215 / 100%)"}
              _hover={{
                bg: "orange.500",
              }}
              _focus={{
                bg: "orange.500",
              }}
            >
              Escolher plano
            </Button>
          </CardFooter>
        </Card>

        <Card boxShadow={"2xl"} rounded={"xl"}>
          <CardHeader h={{ base: '180', md: "280"}}>
            <Text
              fontSize={{ base: "sm", md: "xl" }}
              fontWeight={500}
              bg={"orange.100"}
              p={2}
              px={3}
              color={"orange.900"}
              rounded={"full"}
              textAlign={"center"}
            >
              PLANO 3
            </Text>
            <Text
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="blue.900"
              align={"center"}
              pt={"5"}
            >
              Operador de Computador + AutoCAD
            </Text>
          </CardHeader>
          <CardBody bg={"gray.50"} px={6} py={2}>
            <List spacing={3} fontSize={{ base: "xs", sm: "md", lg: "xl" }}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Domine os principais programas do computador e aprenda a criar
                projetos arquitetônicos em 2D
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas Operador: Windows, Pacote Office e Internet
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas AutoCAD: AutoCAD
              </ListItem>
            </List>
          </CardBody>
          <CardFooter bg={"gray.50"} rounded={"xl"}>
            <Button
              w={"full"}
              bg={"orange.900"}
              color={"white"}
              fontSize={{base:  "sm", md: "md" }}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(215 215 215 / 100%)"}
              _hover={{
                bg: "orange.500",
              }}
              _focus={{
                bg: "orange.500",
              }}
            >
              Escolher plano
            </Button>
          </CardFooter>
        </Card>

        <Card boxShadow={"2xl"} rounded={"xl"}>
          <CardHeader h={{ base: '180', md: "280"}}>
            <Text
              fontSize={{ base: "sm", md: "xl" }}
              fontWeight={500}
              bg={"orange.100"}
              p={2}
              px={3}
              color={"orange.900"}
              rounded={"full"}
              textAlign={"center"}
            >
              PLANO 4
            </Text>
            <Text
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
              fontWeight="bold"
              color="blue.900"
              align={"center"}
              pt={"5"}
            >
              Operador de Computador + Auxiliar Administrativo e Oratória
            </Text>
          </CardHeader>
          <CardBody bg={"gray.50"} px={6} py={2}>
            <List spacing={3} fontSize={{ base: "xs", sm: "md", lg: "xl" }}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Domine os programas mais requisitados no mercado de trabalho,
                aprenda a rotina administrativa de uma empresa e melhore a
                capacidade de se comunicar
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Programas Operador: Windows, Pacote Office e Internet
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Auxiliar Administrativo e Oratória: Rotinas administrativas,
                principais documentos utilizados. Perder o medo de falar com
                público
              </ListItem>
            </List>
          </CardBody>
          <CardFooter bg={"gray.50"} rounded={"xl"}>
            <Button
              w={"full"}
              bg={"orange.900"}
              color={"white"}
              fontSize={{base:  "sm", md: "md" }}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(215 215 215 / 100%)"}
              _hover={{
                bg: "orange.500",
              }}
              _focus={{
                bg: "orange.500",
              }}
            >
              Escolher plano
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}
