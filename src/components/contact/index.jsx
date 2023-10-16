import {
    Divider,
    Box,
    Flex,
    AbsoluteCenter,
    Button,
    Text,
    Container,
    Image,
    Link
  } from '@chakra-ui/react'
  
  import { FaWhatsapp, FaMapMarkerAlt, FaGifts } from 'react-icons/fa'
  
  import lottie from 'lottie-web'
  import { defineElement } from '@lordicon/element'
  
  // define "lord-icon" custom element with default properties
  defineElement(lottie.loadAnimation);
  
  <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
  
  export function Contact() {
    return (
      <>
        <Box padding="14">
          <Divider />
        </Box>
  
        <Container maxW="1324" pb={'10'}>
          <Flex gap="10" justifyContent="space-between">
            <Box>
              <Text fontSize="2xl" color={'orange.900'}>
                ATENDIMENTO SELECT
              </Text>
              <Text color="#014181" fontSize="md" pt="2">
                (66) 3531-4428
              </Text>
              <Text color="#014181" fontSize="md" pb={'2'}>
                Segunda à Sábado,
                <br /> das 07:30 às 20:00.
              </Text>
              <Button
                variant={'primary'}
                fontSize={'x-large'}
                fontWeight={'normal'}
                leftIcon={<lord-icon src="/icons/icon-whats.json" trigger="hover" />}
                w={'full'}
              >
                Matricule-se
              </Button>
            </Box>
            <Box>
              <Text fontSize="2xl" color="#F37A02">
                SIGA NOSSAS REDES SOCIAIS
              </Text>
              <Flex align="center">
                <Image src="/icons/face.svg" maxW="50px" />
                <Link
                  color="blue.500"
                  fontSize="md"
                  textDecoration={'none'}
                  _hover={{
                    color: 'orange.900'
                  }}
                  pl="2"
                  href="https://www.facebook.com/selecttraining"
                  target="_blank"
                >
                  Escola Select Training
                </Link>
              </Flex>
              <Flex align="center" pt="2">
                <Image src="/icons/insta.svg" maxW="52px" />
                <Link
                  color="blue.500"
                  fontSize="md"
                  textDecoration={'none'}
                  _hover={{
                    color: 'orange.900'
                  }}
                  pl="2"
                  href="https://www.instagram.com/selectsinopoficial/"
                  target="_blank"
                >
                  @selecttraining
                </Link>
              </Flex>
              <Flex align="center" pt="2" pb="2">
                <Image src="/icons/youtube.svg" maxW="46px" />
                <Link
                  color="blue.500"
                  fontSize="md"
                  textDecoration={'none'}
                  _hover={{
                    color: 'orange.900'
                  }}
                  pl="2"
                  href="https://www.youtube.com/@escolaselectsinop/featured"
                  target="_blank"
                >
                  @escolaselectsinop
                </Link>
              </Flex>
            </Box>
  
            <Box>
              <Text fontSize="2xl" color="#F37A02">
                LOCALIZAÇÃO
              </Text>
              <Text color="#014181" fontSize="md" pt="2" pb="2">
                Rua das Primaveras, 2774 - Centro - Sinop/MT
              </Text>
  
              <Button
                src="https://maps.app.goo.gl/jZuPj3MkAXmuxZER9"
                leftIcon={<lord-icon src="/icons/icon-locate.json" trigger="hover" />}
                w={'220px'}
                bg={'orange.900'}
                color={'white'}
                rounded={'xl'}
                boxShadow={'0 5px 20px 0px rgb(215 215 215 / 100%)'}
                _hover={{
                  bg: 'orange.500'
                }}
                _focus={{
                  bg: 'orange.500'
                }}
              >
                Abrir no GoogleMaps
              </Button>
            </Box>
          </Flex>
        </Container>
      </>
    )
  }
  