import React from "react";
import { Container, Box } from "@chakra-ui/react";

import { Ages } from "../components/ages";
import MaterialSlider from "../components/materialSlider";
import { Courses } from "../components/courses";
import Plans from "../components/plans";
import Testimonials from "../components/testimonials";


function Cursos() {
  return (
    <>
          <Box
        w="full"
        h={{ base: '28vh', md: "42vh"}}
        backgroundImage="./backgrounds/planos.svg"
        backgroundSize="cover"
        backgroundPosition={'center'}
      />
      
      <Container
        maxW={"full"}
        bgImage="/backgrounds/idades.svg"
        bgSize={{ base: "contain", md: "cover"}}
        bgAttachment="fixed"
        pos="relative"
      >
        <Ages />
        <MaterialSlider />
      </Container>

<Courses/>
      <Plans />
      <Testimonials />
    </>
  );
}

export default Cursos;
