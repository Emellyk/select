import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  SimpleGrid,
  Image,
  CardHeader,
  Card,
  CardBody,
  Text,
  Heading,
} from "@chakra-ui/react";

export function Courses() {
  return (
    <>
      <Container maxW={"full"} bgColor={"#f5f5f5"} pt={4}>
        <Container maxW={"1324px"}>
          <Text
            bgGradient={"linear(to-tr, #EB4561, #FFEB40)"}
            bgClip={"text"}
            align={"center"}
            pt={"10"}
            fontSize="4xl"
            fontWeight="bold"
          >
            O CURSO IDEAL PARA VOCÊ ESTÁ AQUI
          </Text>
          <Text fontSize="xl" fontWeight="light" align="center" py="5">
            Conheça nossos cursos e escolha o que mais combina com você
          </Text>

          <Tabs variant={"tabsTheme"} orientation="vertical" py={"8"}>
            <TabList mt={"4"}>
              <Tab>Operador de Computador</Tab>
              <Tab>Designer Gráfico</Tab>
              <Tab>Manutenção em Comp. e Notbooks</Tab>
              <Tab>AutoCAD</Tab>
              <Tab>Auxiliar Administrativo</Tab>
              <Tab>Oratória</Tab>
              <Tab>Ensino EJA</Tab>
            </TabList>
            <TabPanels>

              {/* OPERADOR DE COMPUTADOR */}
              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Operador para Jovens e Adultos
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Adultos - Excel
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Crianças - Operador Kids
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses4.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Crianças aprendem com diversão
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Operador para Jovens e Adultos
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Adultos - Excel
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Crianças - Operador Kids
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses4.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Crianças aprendem com diversão
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>

              {/* DESIGNER GRÁFICO */}

              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/des1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Designer Gráfico Profissional
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/des2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Edição de Imagens
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/des3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Identidade Visual Completa
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/des4.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Aulas Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/des4.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Operador para Jovens e Adultos
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Adultos - Excel
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Crianças - Operador Kids
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/courses4.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Crianças aprendem com diversão
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>

              {/* MANUTENÇÃO EM COMP. E NOTBOOKS */}

              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Manutenção em Computadores
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Manutenção em Notbooks
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Montagem e Desmontagem
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Formatação e Instalação dos Principais Programas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Operador para Jovens e Adultos
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Adultos - Excel
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Curso para Crianças - Operador Kids
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/man2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Crianças aprendem com diversão
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>

              {/* AUTOCAD */}

              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        AutoCad
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Plantas Residenciais
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Principais Configurações
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Principais Configurações
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Principais Configurações
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Principais Configurações
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Principais Configurações
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/cad1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Principais Configurações
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>

              {/* AUXILIAR ADMNISTRATIVO */}

              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Auxiliar Administrativo
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades em Grupo
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/aux1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades Práticas
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>

              {/* ORATÓRIA */}

              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Oratória
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Atividades em Grupo
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Perca o medo de falar em Público
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Decubra o poder que existe em você
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Decubra o poder que existe em você
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Decubra o poder que existe em você
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Decubra o poder que existe em você
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/ora2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Decubra o poder que existe em você
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>

              {/* ENSINO EJA */}
              <TabPanel>
                <SimpleGrid
                  gap="6"
                  spacing={4}
                  templateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                >
                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Educação Jovens e Adultos
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Termine seus estudos
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Ensino Fundamental e Médio
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Ensino EJA
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja2.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Ensino EJA
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja3.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Ensino EJA
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Ensino EJA
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>

                  <Card
                    bgColor={"transparent"}
                    fontWeight={"light"}
                    variant={"unstyled"}
                    color={"blue.900"}
                    fontSize={"16"}
                  >
                    <CardHeader>
                      <Image src="/courses/eja1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Ensino EJA
                      </Text>
                      <Text pt={"5"}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Velit consequatur, nam.
                      </Text>
                    </CardBody>
                  </Card>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Container>
    </>
  );
}
