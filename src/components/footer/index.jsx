import { Box, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <>
      <Box
        w="full"
        h="15vh"
        backgroundImage="/backgrounds/footer.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Text
          color="white"
          align="center"
          fontSize="24"
          fontWeight="bold"
          pt="20"
        >
          Select, as pessoas de Sucesso passam por aqui!
        </Text>
        <Text color="white" align="center">
          Todos os direitos reservados | SELECT TRAINING © 2023
        </Text>
      </Box>
    </>
  )
}
