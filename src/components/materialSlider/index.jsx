
import React, { Component } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  Flex,
  Box,
  Text,
  Image,
  Card,
  Container,
  Stack,
  SimpleGrid
} from '@chakra-ui/react'

export default class MaterialSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <>
        <Container maxW={'100%'}>
          <Container
            maxW={'1024'}
            height={'700px'}
            position={'relative'}
            bgColor={'transparent'}
            /*bgImg={'vector-bg.svg'}
            bgPosition={'right'}
            bgRepeat={'no-repeat'}
    bgSize={'450px'}*/
          >
            <Text
              background={'linear-gradient(107deg, #EB4561 38.38%, #FFEB40 107.75%)'}
              bgClip={'text'}
              pt={'10'}
              fontSize={{ base: "xl", md: "3xl" }}
              fontWeight="bold"
            >
              MATERIAL DIDÁTICO EXCLUSIVO SELECT
            </Text>
            <Text fontSize={{ base: "sm", md: "xl" }} fontWeight="light" align="center" pt="5">
                  Kits de Materiais exclusivos diagramados por nossos
                  professores, adaptado de acordo com a faixa etária.
                  Todos os kits possuem camiseta, bolsa, apostila e caneta.
                </Text>

            <SimpleGrid
              pt={'10'}
              gap={'20'}
              h={'400px'}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            >
              <Card bgColor={'transparent'} textAlign={'justify'} fontWeight={'light'} variant={'unstyled'} color={'blue.900'} 
              fontSize={{ base: "sm", md: "xl" }} >
                <Text pt={'14'}>
                  - Manutenção de Computadores: com ferramentas extras para cada
                  aluno ter o seu para desmontagem dos equipamentos
                </Text>
                <Text pt={'10'}>
                  - Auxiliar administrativo: com folhas de cheque, promissórias,
                  calculadora etc para treinar quantas vezes forem necessárias
                </Text>
              </Card>

              <Stack
              pt={'14'}
              bgImage={'/backgrounds/material.svg'}
              bgSize={{ base: '300px', md:'450px'}}
              bgRepeat={'no-repeat'}
              bgPos={'center'}
              >
                <Slider {...settings} >
                  <div>
                    <Image w={{ base: '300px', md: 'auto'}} src="/images/material.svg" />
                  </div>
                  <div>
                    <Image w={{ base: '300px', md: 'auto'}} src="/images/material.svg" />
                  </div>
                  <div>
                    <Image w={{ base: '300px', md: 'auto'}} src="/images/material.svg" />
                  </div>
                  <div>
                    <Image w={{ base: '300px', md: 'auto'}} src="/images/material.svg" />
                  </div>
                </Slider>
              </Stack>
            </SimpleGrid>
          </Container>
        </Container>
      </>
    )
  }
}

