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
import Organizational from "../components/organizational";

function Home() {
  return (
    <>
      <Header />
      <About />
      <SimpleSlider />
      <Organizational />
    </>
  );
}

export default Home;
