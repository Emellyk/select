import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react'
import { FcAssistant, FcBinoculars, FcCloseUpMode, FcDonate, FcElectricalSensor, FcInTransit, FcLike } from 'react-icons/fc'
import React from 'react'


interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} color={'orange.900'}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function Organizational() {
  return (
    <Container maxW={{ base: '90%', md: '70%'}} pt={16} pb={16}>
    <Box p={4} textAlign={'center'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcElectricalSensor} w={10} h={10} />}
          title={'Nossa Missão'}
          text={
            'Formar profissionais comprometidos com a excelência na sua área de atuação, com uma postura ética e conscientes de sua responsabilidade social.'
          }
        />
        <Feature
          icon={<Icon as={FcBinoculars} w={10} h={10} />}
          title={'Nossa Visão'}
          text={
            'Ser referência como uma das principais instituições na formação de cidadãos competentes e preparados para o mercado de trabalho, conscientes da responsabilidade social.'
          }
        />
        <Feature
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={'Nossos Valores'}
          text={
            'Compromisso, transparência, conhecimento, integração, ética nas relações, responsabilidade, afetividade, respeito e solidariedade.'
          }
        />
      </SimpleGrid>
    </Box>
    </Container>
  )
}