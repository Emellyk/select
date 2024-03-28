import { Box, Container } from "@chakra-ui/react";

import Ensino from "../components/eja";
import Historic from "../components/historic";

function Eja() {
  return (
    <>
      <Box
        w="full"
        h="62vh"
        backgroundImage="./backgrounds/colegio3.png"
        backgroundSize="cover"
      />

      <Container
        maxW={"full"}
        bgImage="/backgrounds/idades.svg"
        bgSize="cover"
        bgAttachment="fixed"
        pos="relative"
        pb={12}
      >
        <Ensino />
      </Container>

      <Container maxW={"full"} bgColor={"#f5f5f5"} pb={10}>
        <Historic />
      </Container>
    </>
  );
}

export default Eja;
