import React from "react";
import { Link } from "react-router-dom";
import { Courses } from "../components/courses";
import MaterialSlider from "../components/materialSlider";
import Plans from "../components/plans";
import { Ages } from "../components/ages";
import Testimonials from "../components/testimonials";

import { Container, Box } from "@chakra-ui/react";

function Cursos() {
  return (
    <>
          <Box
        w="full"
        h="42vh"
        backgroundImage="./backgrounds/planos.svg"
        backgroundSize="cover"
      />
      
      <Container
        maxW={"full"}
        bgImage="/backgrounds/idades.svg"
        bgSize="cover"
        bgAttachment="fixed"
        pos="relative"
      >
        <Ages />
        <MaterialSlider />
      </Container>

      <Courses />
      <Plans />
      <Testimonials />
    </>
  );
}

export default Cursos;
