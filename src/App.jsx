import React from "react";
import NavBar from "./components/navbar/index.jsx";


import { ChakraProvider, theme } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/index.jsx";
import { Contact } from "./components/contact/index.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
