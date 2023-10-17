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

export default function Historic() {
  return (
    <>
      <Container maxW={1324} pt={8}>
        <Text
          bgGradient="linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
          align="center"
        >
          Não possui histórico escolar?
        </Text>
        <Text fontSize="xl" fontWeight="light" align="center" pt="2">
          Ajudamos você a realizar seus sonhos. Como funciona:
        </Text>
        <SimpleGrid
          h={300}
          columns={{ base: 1, md: 3 }}
          spacing={20}
          alignItems={"center"}
        >
          <Stack align={"center"}>
            <Text
              w={12}
              h={12}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"8"}
              fontSize={30}
              bg={"orange.900"}
              mb={1}
            >
              01
            </Text>
            <Text fontWeight={600} color={"orange.900"}>
              Avisar ao Cesas
            </Text>
            <Text color={"gray.600"} align={"center"}>
              O candidato informa à Secretaria do Cesas que não possui
              documentação e que, portanto, não tem como apresentá-la para
              matrícula.
            </Text>
          </Stack>

          <Stack align={"center"}>
            <Text
              w={12}
              h={12}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"8"}
              fontSize={30}
              bg={"orange.900"}
              mb={1}
            >
              02
            </Text>
            <Text fontWeight={600} color={"orange.900"}>
              Coordenação Pedagógica
            </Text>
            <Text color={"gray.600"} align={'center'}>
              O candidato é encaminhado à coordenação pedagógica da EaD, para
              análise da situação, caso a caso.
            </Text>
          </Stack>

          <Stack pt={16} align={"center"}>
            <Text
              w={12}
              h={12}
              align={"center"}
              justify={"center"}
              color={"white"}
              rounded={"8"}
              fontSize={30}
              bg={"orange.900"}
              mb={1}
            >
              03
            </Text>
            <Text fontWeight={600} color={"orange.900"}>
              Prova de Classificação
            </Text>
            <Text color={"gray.600"} align={'center'}>
              Após essa análise, a coordenação inscreve o candidato na agenda da
              próxima Prova de Classificação e lhe informa sobre os conteúdos a
              serem estudados. Para estudar no 2º Segmento (equivalente ao
              Ensino Fundamental), é preciso fazer prova em nível de 5ª série.
            </Text>
          </Stack>
        </SimpleGrid>
       </Container>
    </>
  );
}
