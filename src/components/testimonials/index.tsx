import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react'
  import React from 'react'
  
  interface Props {
    children: React.ReactNode
  }
  
  const Testimonial = (props: Props) => {
    const { children } = props
  
    return <Box>{children}</Box>
  }
  
  const TestimonialContent = (props: Props) => {
    const { children } = props
  
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    )
  }
  
  const TestimonialHeading = (props: Props) => {
    const { children } = props
  
    return (
      <Heading as={'h3'} fontSize={{base: 'md', md: 'xl'}}>
        {children}
      </Heading>
    )
  }
  
  const TestimonialText = (props: Props) => {
    const { children } = props
  
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={{base: 'xs', md: 'sm'}}>
        {children}
      </Text>
    )
  }
  
  const TestimonialAvatar = ({
    src,
    name,
    title,
    describe,
  }: {
    src: string
    name: string
    title: string
    describe: string
  }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} mb={2} w={100} h={100} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600} color={'blue.900'}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
          <Text fontSize={'sm'} textAlign={'center'} fontStyle={'italic'} mt={'1'} color={useColorModeValue('gray.600', 'gray.400')}>
            {describe}
          </Text>
        </Stack>
      </Flex>
    )
  }
  
  export default function Testimonials() {
    return (
      <Box bg={useColorModeValue('white.500', 'gray.500')}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0}>
          <Text
            bgGradient={"linear(to-tr, #EB4561, #FFEB40)"}
            bgClip={"text"}
            pt={"10"}
            fontSize={{ base: "xl", md: "3xl"}}
            fontWeight="bold"
          >
            O QUE DIZEM NOSSOS ALUNOS:
          </Text>
          </Stack>
          <Stack
           color={'orange.900'}
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 16, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Seguir carreira Profissional</TestimonialHeading>
                <TestimonialText>
                "É um aprendizado e conhecimento para eu seguir uma carreira profissional de sucesso com os cursos que eu fiz e estou fazendo. Os professores explicam muito bem e indico fazer os cursos pois as pessoas de sucesso passam por aqui!"
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={'/images/aluna1.jpg'}
                name={'Amanda Emilly Moraes Oliveira'}
                title={'Atualmente aluna de Auxiliar Administrativo'}
                describe={'Já concluiu cursos de Operador de Computador, Designer Gráfico Profissional e Oratória'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Oportunidade de Qualificação</TestimonialHeading>
                <TestimonialText>
                "Foi muito bom o curso, me abriu bastante a mente. Eu já trabalho com essa função, mas depois do curso eu aprendi mais. O curso da Select é muito bom, eu já havia feito o EJA, então eu já conhecia a escola. E então surgiu a oportunidade para eu me 
                qualificar e aguarrei essa oportunidade e está sendo muito bom para mim."
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={'/images/aluna2.jpg'}
                name={'Andréia dos Santos Martins de Lima'}
                title={'Atualmente aluna de Operador de Computador'}
                describe={'Já concluiu o Ensino Fundamental, Médio e o curso de Auxiliar Administrativo'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Vou concluir meus estudos</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. imperdiet nibh lectus feugiat nunc sem. imperdiet nibh lectus feugiat nunc sem.
                   imperdiet nibh lectus feugiat nunc sem.imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Nome Completo'}
                title={'Aluno do Ensino Médio'}
                describe={'kjkj'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    )
  }
  