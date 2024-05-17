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
      <Container maxW={"full"} bgColor={"#f5f5f5"} py={6}>
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


          <Text fontSize={{ base: 'sm', md: "xl"}} color={'orange.900'} fontWeight="bold" pt="5">
            Curso de Informática Básica - Ideal para iniciantes:
          </Text>
          <Tabs variant={"tabsTheme"}
          align="center"
          maxWidth={{base: '100%', md: '90%'}}
          size={'sm'}
          fontSize={'sm'}>
            <TabList mt={"4"}>
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
                        Domine as principais tecnologias de informática
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
                        Aprenda a gerênciar e criar planilhas de controles e produtividade.
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
                        Crianças aprendem desde cedo os cuidados e a forma correta de utilizar o computador.
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
                        De forma lúdica e divertida os alunos aprendem a usar ferramentas utilizadas durante a vida estudantil.
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
                        Noçoes básicas de informática
                      </Text>
                      <Text pt={"5"}>
                        Entenda como o computador funciona de um modo geral, como instalar e desinstalar programas.
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
                        Formatação de trabalhos escolares e apresentações
                      </Text>
                      <Text pt={"5"}>
                        Formatação padrão de documentos em normas da ABNT. Utilizados na vida acadêmica e profissional.
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
                        Manutenção preventiva e Cuidados na internet
                      </Text>
                      <Text pt={"5"}>
                        Saiba como cuidar do seu equipamento e navegar de forma segura na internet.
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
                        Opere sem medo seu computador
                      </Text>
                      <Text pt={"5"}>
                        Desenvolva habilidades e perca o medo de utilizar seu computador, e o melhor, usar a seu favor com as necessidades cotidianas.
                      </Text>
                    </CardBody>
                  </Card>
                  </div>
              </Slider>
            </TabPanels>
          </Tabs>


          <Text fontSize={{ base: 'sm', md: "xl"}} mt={'16'} color={'orange.900'} fontWeight="bold" pt="5">
            Informática Avançada - Cursos Profissionalizantes:
          </Text>
          <Tabs variant={"tabsTheme"}
          align="center"
          maxWidth={{base: '100%', md: '90%'}}
          size={'sm'}
          fontSize={'sm'}>
            <TabList mt={"4"}>
              <Tab fontSize={{ base: 'sm', md: 'md' }}>Designer Gráfico</Tab>
              <Tab fontSize={{ base: 'sm', md: 'md' }}>Manutenção de Computadores e Notbooks</Tab>
              <Tab fontSize={{ base: 'sm', md: 'md' }}>AutoCAD</Tab>
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
                    p={'0'}
                  >
                    <CardHeader>
                      <Image src="/courses/des1.svg" />
                    </CardHeader>
                    <CardBody>
                      <Text pt={"2"} fontWeight={"bold"} color={"orange.900"}>
                        Domine as ferramentas de Designer
                      </Text>
                      <Text pt={"5"}>
                        Aprenda a utilizar as principais ferramentas de Designer utilizadas atualmente.
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
                        Adobe Photoshop - Edição de Imagens
                      </Text>
                      <Text pt={"5"}>
                        Principal programa para manipulação de imagens e melhoramento de imagens.
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
                        Identidade Visual para marcas
                      </Text>
                      <Text pt={"5"}>
                        Utilize sua criativade para criar logomarcas, cartões de visitas, outdoors e todos os tipos de elementos visuais para marcas e empresas.
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
                        Atividades práticas completas
                      </Text>
                      <Text pt={"5"}>
                        Trabalho final do curso com entrega totalmente autoral do aluno já para fazer parte do seu portfólio profissional.
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
                        Profissional de fotografia 
                      </Text>
                      <Text pt={"5"}>
                        Crie books fotográficos profissionais, utilizando filtros e melhoramento da qualidade das imagens.
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
                        Profissional de Marketing Digital
                      </Text>
                      <Text pt={"5"}>
                        Desenvolva artes e publicações para as principais redes sociais, com as medidas corretas para vários modelos de anuncios.
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
                        Profissional para Gráficas e Agencias de Publicidade
                      </Text>
                      <Text pt={"5"}>
                        Saiba como utilizar as métricas para impressão e escalonamento de artes de tamanhos variados.
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
                        Diagramação de revistas e jornais
                      </Text>
                      <Text pt={"5"}>
                        Programas específicos para utilização de documentos com textos, como revistas, jornais e informativos. Configure para ser impresso ou publicado de forma digital.
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
                        Conheça as peças e aprenda a montar e desmontar computadores.
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
                        Peças e suas Funções
                      </Text>
                      <Text pt={"5"}>
                        Compreenda o funcionamento de cada peça e quais diferenças para ter melhor desempenho do equipamento.
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
                        Montagem e Desmontagem em Notbooks
                      </Text>
                      <Text pt={"5"}>
                        Saiba como manusear corretamente as peças, identificar onde está o problema e como arruma-lo.
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
                        Formatação e Instalação do Sistema Operacional
                      </Text>
                      <Text pt={"5"}>
                        Faça a formatação e instalação do sistema operacional e como configura-lo da forma correta.
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
                        Hardware x Software
                      </Text>
                      <Text pt={"5"}>
                        Principais conceitos da parte física e lógica de computadores.
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
                        Profissional de Técnico em Informática
                      </Text>
                      <Text pt={"5"}>
                        Torne-se um profissional competente nesse mercado.
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
                        Instalação dos Principais Programas e Periféricos
                      </Text>
                      <Text pt={"5"}>
                        Faça instalações dos programas mais utilizados.
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
                        Limpeza Profissional do Equipamento
                      </Text>
                      <Text pt={"5"}>
                        De tempos em tempos é necessário fazer limpeza interna de todas as peças para garantir o melhor funcionamento e evitar danos.
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
                      Fundamentos do AutoCAD
                      </Text>
                      <Text pt={"5"}>
                      Introdução à interface do programa, configurações básicas e navegação.
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
                      Desenho e Edição
                      </Text>
                      <Text pt={"5"}>
                      Aprenda as ferramentas de desenho, como linhas, polígonos, círculos, elipses, entre outros, bem como técnicas de edição, como mover, copiar, espelhar e estender.
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
                      Dimensionamento e Anotação
                      </Text>
                      <Text pt={"5"}>
                      Utilização de ferramentas para adicionar dimensões, textos e outras anotações aos desenhos.
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
                      Organização e Estruturação
                      </Text>
                      <Text pt={"5"}>
                      Aprender a criar e gerenciar camadas, blocos e referências externas para manter os desenhos organizados e facilmente editáveis.
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
                      Modelagem 3D
                      </Text>
                      <Text pt={"5"}>
                      Introdução à modelagem tridimensional, incluindo a criação de sólidos, superfícies e malhas.
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
                      Renderização e Visualização
                      </Text>
                      <Text pt={"5"}>
                      Noções básicas de como aplicar materiais, luzes e texturas para criar renderizações realistas dos modelos.
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
                      Plotagem e Impressão
                      </Text>
                      <Text pt={"5"}>
                      Configuração de layouts de impressão e preparação de desenhos para impressão em escala.
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
                      Normas e Padronização
                      </Text>
                      <Text pt={"5"}>
                      Conhecimento das normas e padrões de desenho técnico utilizados na indústria, garantindo a conformidade com requisitos específicos de cada projeto.
                      </Text>
                    </CardBody>
                  </Card>
                  </div>
                  </Slider>
              </TabPanel>
            </TabPanels>
          </Tabs>


          <Text fontSize={{ base: 'sm', md: "xl"}} mt={'16'} color={'orange.900'} fontWeight="bold" pt="5">
            Administrativos - Cursos Profissionalizantes:
          </Text>
          <Tabs variant={"tabsTheme" }
          maxWidth={'90%'}
          align={'center'}
          size={'sm'}
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
                        Rotinas Administrativas
                      </Text>
                      <Text pt={"5"}>
                      Organização e arquivamento de documentos. Redação e formatação de correspondências e relatórios. Atendimento telefônico e ao público.
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
                      Gestão de Escritório
                      </Text>
                      <Text pt={"5"}>
                      Controle de agendas e compromissos. Planejamento e organização de reuniões e eventos. Gerenciamento de suprimentos de escritório.
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
                      Noções de Contabilidade
                      </Text>
                      <Text pt={"5"}>
                      Lançamentos contábeis básicos. Emissão e controle de notas fiscais. Noções de fluxo de caixa e conciliação bancária.
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
                      Recursos Humanos
                      </Text>
                      <Text pt={"5"}>
                      Noções básicas de recrutamento e seleção. Controle de ponto e folha de pagamento. Arquivamento e controle de documentos de funcionários.
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
                      Comunicação Empresarial:
                      </Text>
                      <Text pt={"5"}>
                      Técnicas de comunicação escrita e verbal. Atendimento ao cliente e relacionamento interpessoal. Etiqueta empresarial e comportamento profissional.
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
                      Noções de Recursos Humanos
                      </Text>
                      <Text pt={"5"}>
                      Técnicas de organização pessoal e profissional. Métodos para aumentar a eficiência e produtividade no ambiente de trabalho. Prioridade de tarefas e gestão de prazos.
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
                      Atendimento ao Cliente
                      </Text>
                      <Text pt={"5"}>
                      Técnicas de atendimento e satisfação do cliente. Resolução de conflitos e reclamações. Manutenção de um bom relacionamento com clientes e fornecedores.
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
                      Ética e Comportamento Profissional
                      </Text>
                      <Text pt={"5"}>
                      Princípios de ética no ambiente de trabalho. Postura e comportamento profissional. Sigilo e confidencialidade de informações.
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
                        Expressão Verbal
                      </Text>
                      <Text pt={"5"}>
                      Aprender a projetar a voz, articular as palavras de forma clara e enfatizar pontos importantes para garantir que a mensagem seja compreendida e recebida com clareza.
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
                      Expressão Corporal
                      </Text>
                      <Text pt={"5"}>
                      Desenvolver habilidades de postura, gestos e movimentos corporais que transmitam confiança, autoridade e envolvam a audiência durante a apresentação.
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
                      Controle do Nervosismo
                      </Text>
                      <Text pt={"5"}>
                        Técnicas de relaxamento e respiração, estratégias para lidar com o medo de falar em público, desenvolvimento de autoconfiança.
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
                      Comunicação Não Verbal
                      </Text>
                      <Text pt={"5"}>
                      Linguagem corporal e postura, expressões faciais, gestos e movimentos no palco.
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
                      Estruturação do Discurso
                      </Text>
                      <Text pt={"5"}>
                      Organização de ideias e construção de um discurso coerente. Técnicas de introdução, desenvolvimento e conclusão de uma apresentação. Uso de histórias, exemplos e analogias para tornar o discurso mais envolvente.
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
                      Interação com o Público
                      </Text>
                      <Text pt={"5"}>
                      Técnicas para captar e manter a atenção da audiência. Estratégias para envolver o público e incentivar a participação. Respostas a perguntas e gerenciamento de situações inesperadas.
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
                      Uso de Recursos Visuais
                      </Text>
                      <Text pt={"5"}>
                      Eficácia no uso de slides, vídeos e outros recursos multimídia. Técnicas para integrar recursos visuais de forma a complementar o discurso, sem distrair o público.
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
                      Feedback e Melhoria Contínua
                      </Text>
                      <Text pt={"5"}>
                      Recebimento e interpretação de feedback construtivo. Autoavaliação e identificação de áreas para melhoria. Prática contínua e ajustes baseados em experiências passadas.
                      </Text>
                    </CardBody>
                  </Card>
                  </div>
                  </Slider>
              </TabPanel>
              </TabPanels>
              </Tabs>

              <Text fontSize={{ base: 'sm', md: "xl"}} mt={'16'} color={'orange.900'} fontWeight="bold" pt="5">
            Educação para Jovens e Adultos - Conclua seus estudos:
          </Text>
              <Tabs variant={"tabsTheme" }
          maxWidth={'90%'}
          align={"center"}
          size={'sm'}
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
                      Desenvolvimento de Habilidades Gerais
                      </Text>
                      <Text pt={"5"}>
                      Tecnologia da Informação e Comunicação: Uso básico de computadores e internet. Ferramentas de produtividade (editores de texto, planilhas, apresentações).
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
                      Educação para a Cidadania
                      </Text>
                      <Text pt={"5"}>
                      Direitos e deveres do cidadão. Noções de economia e mercado de trabalho. Sustentabilidade e responsabilidade social.
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
                      Preparação para o Mercado de Trabalho
                      </Text>
                      <Text pt={"5"}>
                      Elaboração de currículos e cartas de apresentação. Técnicas de entrevista de emprego. Desenvolvimento de habilidades socioemocionais.
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
                      O EJA modelo rápido oferece uma formação condensada
                      </Text>
                      <Text pt={"5"}>
                      Focada nos conteúdos essenciais, permitindo que os alunos concluam seus estudos de forma mais ágil e possam avançar em suas carreiras ou continuar sua educação em níveis mais elevados.
                      </Text>
                    </CardBody>
                  </Card>
                  </div>
                </Slider>
              </TabPanel>



              {/* ENSINO FUNDAMENTAL */}
            
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
                      Desenvolvimento de Habilidades Gerais
                      </Text>
                      <Text pt={"5"}>
                      Tecnologia da Informação e Comunicação: Uso básico de computadores e internet. Ferramentas de produtividade (editores de texto, planilhas, apresentações).
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
                      Educação para a Cidadania
                      </Text>
                      <Text pt={"5"}>
                      Direitos e deveres do cidadão. Noções de economia e mercado de trabalho. Sustentabilidade e responsabilidade social.
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
                      Preparação para o Mercado de Trabalho
                      </Text>
                      <Text pt={"5"}>
                      Elaboração de currículos e cartas de apresentação. Técnicas de entrevista de emprego. Desenvolvimento de habilidades socioemocionais.
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
                      O EJA modelo rápido oferece uma formação condensada
                      </Text>
                      <Text pt={"5"}>
                      Focada nos conteúdos essenciais, permitindo que os alunos concluam seus estudos de forma mais ágil e possam avançar em suas carreiras ou continuar sua educação em níveis mais elevados.
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