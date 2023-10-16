import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Container,
  Heading,
} from "@chakra-ui/react";

import SimpleSlider from "../components/slider";
import MaterialSlider from "../components/materialSlider";
import Header from "../components/header";
import About from "../components/about";
import { Ages } from "../components/ages";

function Home() {
  return (
    <>
      <Header />
      <About />
      <SimpleSlider />

      
      <Text align={"center"} pt={20}>
        Missão - Visão - Valores
      </Text>
    </>
  );
}

export default Home;
