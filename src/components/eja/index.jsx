import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon, MinusIcon } from "@chakra-ui/icons";

export default function Ensino() {
  return (
    <>
      <Container maxW={1324}>
        <SimpleGrid py={{base: 10, md: 24}}>
          <Flex display={{ base: 'row', md: 'flex'}}>
            <Box pr={{ base: 0, md: 4}} 
            pl={{base: 2, md: 20}}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
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
                <Text as={"span"} color={"orange.900"}>
                  {" "}
                  SELECT
                </Text>
              </Heading>
              <Text
                fontWeight={600}
                fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
              >
                Conclua seus estudos Ensino Fundamental e Médio
              </Text>
              <Text pt="6" textAlign={"justify"}>
                Com a conclusão do Ensino fundamental e o Ensino Médio você já
                estará com as portas abertas o mercado de trabalho, pois
                concluindo essa etapa, você estará pronto para prestar o
                vestibular, participar de concursos públicos e continuar
                seguindo sua caminhada em busca do sucesso profissional.
              </Text>
              <Text pt="4">
                <b>Autorizações:</b> CEE / MT - Conselho Estadual de Educação de
                Mato Grosso.
              </Text>
              <Text pt="4">
                <b>Modalidade:</b> À distância
              </Text>

              <SimpleGrid minChildWidth={"2"} pt={"4"}>
              <Flex display={{ base: 'row', md: 'flex'}} p={2}>
                <Stack mr={8}>
                  <List spacing={4}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Aulas presencial uma vez por semana
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Excelente infraestrutura
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Aulas disponíveis no portal do aluno
                    </ListItem>
                  </List>
                </Stack>

                <Stack >
                  <List spacing={4} mt={{ base: 4, md: 0}}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Flexibilidade de horário
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Material didático atualizado
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      Os alunos interagem e tiram dúvidas nas aulas online.
                    </ListItem>
                  </List>
                </Stack>
                </Flex>
              </SimpleGrid>
            </Box>
            <Image src="./images/eja2.png" 
            mt={{ base: 4, md: 0}}
            ml={{base: 2, md: 0}}
            width={{base: '320', md: '440px'}}
            rounded={"14px"} />
          </Flex>
        </SimpleGrid>

        <Box pl={{base: 4, md: 20}}>
          <Text
            fontWeight={600}
            fontSize={{ base: "xl", sm: "1xl", lg: "2xl" }}
          >
            Dados para matrícula:
          </Text>
          <SimpleGrid minChildWidth={"2"} pt={"6"}>
            <Stack>
              <List spacing={4}>
                <ListItem>
                  <ListIcon as={MinusIcon} w={3} color="orange.900" />
                  Possuir no mínimo 18 anos
                </ListItem>
                <ListItem>
                  <ListIcon as={MinusIcon} w={3} color="orange.900" />
                  01 Cópia autenticada do Histórico Escolar ou atestado
                </ListItem>
                <ListItem>
                  <ListIcon as={MinusIcon} w={3} color="orange.900" />
                  01 Cópia do Comprovante de Residência
                </ListItem>
                <ListItem>
                  <ListIcon as={MinusIcon} w={3} color="orange.900" />
                  01 Foto 3 x 4
                </ListItem>
                <ListItem>
                  <ListIcon as={MinusIcon} w={3} color="orange.900" />
                  01 Cópia do R.G
                </ListItem>
                <ListItem>
                  <ListIcon as={MinusIcon} w={3} color="orange.900" />
                  01 Cópia do CPF
                </ListItem>
              </List>
            </Stack>
          </SimpleGrid>
        </Box>
      </Container>


          </>
  );
}
