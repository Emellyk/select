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
        <SimpleGrid py="24">
          <Flex>
            <Box pr="4" pl="20">
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
                Conclua seus estudos Fundamental e Médio
              </Text>
              <Text pt="6">
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

              <SimpleGrid minChildWidth={"2"} pt={"6"}>
                <Stack>
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

                <Stack>
                  <List spacing={4}>
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
              </SimpleGrid>
            </Box>
            <Image src="./images/eja2.png" width="440px" rounded={"10px"} />
          </Flex>
        </SimpleGrid>

        <Box pl={20}>
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
