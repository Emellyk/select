import React from "react";
import { Container, Box } from "@chakra-ui/react";

import { Ages } from "../components/ages";
import MaterialSlider from "../components/materialSlider";
import { Courses } from "../components/courses";
import Plans from "../components/plans";
import Testimonials from "../components/testimonials";
import { Courses2 } from "../components/courses copy";


function Cursos() {
  return (
    <>
          <Box
          w={'full'}
        h={{ base: '26vh', md: "62vh"}}
        backgroundImage="./backgrounds/matriculas3.png"
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
      <Courses2 />
      <Plans />
      <Testimonials />
    </>
  );
}

export default Cursos;
