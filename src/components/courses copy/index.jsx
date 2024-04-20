import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Image,
  CardHeader,
  Card,
  CardBody,
  Text,
  styled,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { color } from "framer-motion";



export function Courses2() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <Container maxW={"full"} bgColor={"#f5f5f5"} pt={4}>
        <Container maxW={"1324px"}>
          <Text
            bgGradient={"linear(to-tr, #EB4561, #FFEB40)"}
            bgClip={"text"}
            align={"center"}
            pt={"10"}
            fontSize={{ base: '2xl', md: "4xl"}}
            fontWeight="bold"
          >
            O CURSO IDEAL PARA VOCÊ ESTÁ AQUI
          </Text>
          <Text fontSize={{ base: 'sm', md: "xl"}} fontWeight="light" align="center" py="5">
            Conheça nossos cursos e escolha o que mais combina com você
          </Text>

          <Tabs variant={"tabsTheme"}
          maxWidth={{base: '100%', md: '90%'}}
          align={"center"}
          size={'sm'}
          py={"8"}
          fontSize={'sm'}>
            <TabList mt={"4"} px={'10'}>
              <Tab mb={'6'} fontSize={{ base: 'sm', md: 'md' }}>Operador de Computador</Tab>
            </TabList>
            <TabPanels >

              {/* OPERADOR DE COMPUTADOR */}
              <Slider {...settings} >
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
              </Slider>
            </TabPanels>
          </Tabs>

              <Tabs variant={"tabsTheme" }
          maxWidth={'90%'}
          align={"center"}
          size={'sm'}
          py={"8"}
          fontSize={'sm'}>
            <TabList mt={"4"}>
              <Tab fontSize={{ base: 'sm', md: 'md' }}>Designer Gráfico</Tab>
              <Tab>Manutenção em Comp. e Notbooks</Tab>
              <Tab>AutoCAD</Tab>
            </TabList>
            <TabPanels>

              {/* DESIGNER GRÁFICO */}

            <TabPanel>            
              <Slider {...settings}>
              <div>
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
                  </div>


                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                  </Slider>
                  </TabPanel>

              {/* MANUTENÇÃO EM COMP. E NOTBOOKS */}

                  <TabPanel>
                  <Slider {...settings}>
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                  </Slider>
                  </TabPanel>

              {/* AUTOCAD */}

              <TabPanel>
                <Slider {...settings}>
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                  </Slider>
              </TabPanel>
            </TabPanels>
          </Tabs>


          <Tabs variant={"tabsTheme" }
          maxWidth={'90%'}
          align={'center'}
          size={'sm'}
          py={"8"}
          fontSize={'sm'}>
            <TabList mt={"4"}>
              <Tab fontSize={{ base: 'sm', md: 'md' }}>Auxiliar Administrativo</Tab>
              <Tab>Oratória</Tab>
            </TabList>
            <TabPanels>

              {/* AUXILIAR ADMNISTRATIVO */}

                <TabPanel>
                <Slider {...settings}>
                <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                </Slider>
              </TabPanel>


              {/* ORATÓRIA */}

                  <TabPanel>
                  <Slider {...settings}>
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>
                  </Slider>
              </TabPanel>
              </TabPanels>
              </Tabs>


              <Tabs variant={"tabsTheme" }
          maxWidth={'90%'}
          align={"center"}
          size={'sm'}
          py={"8"}
          fontSize={'sm'}>
            <TabList mt={"4"}>
              <Tab fontSize={{ base: 'sm', md: 'md' }}>Ensino EJA</Tab>
              <Tab>Ensino Fundamental</Tab>
              <Tab>Ensino Médio</Tab>
            </TabList>
            <TabPanels>

            {/* ENSINO EJA */}
            
              <TabPanel>
                <Slider {...settings}>
                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                  </div>

                  <div>
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
                </div>
                </Slider>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Container>
    </>
  );
}