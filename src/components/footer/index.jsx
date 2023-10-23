import { Box, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <>
      <Box
        w='auto'
        h={{ base: "8vh", md:"16vh"}}
        backgroundImage="/backgrounds/footer.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Text
          color="white"
          align="center"
          fontSize={{ base: "10", md: "20"}}
          fontWeight={{ base: "normal", md: "bold"}}
          pt={{ base: "6", md: "20"}}
        >
          Select, as pessoas de Sucesso passam por aqui!
        </Text>
        <Text 
        fontSize={{ base: "8", md: "16"}}
        color="white" 
        align="center">
          Todos os direitos reservados | SELECT TRAINING © 2023
        </Text>
      </Box>
    </>
  )
}
