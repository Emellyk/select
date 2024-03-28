import React from "react";
import NavBar from "./components/navbar/index.jsx";

import { Outlet } from "react-router-dom";
import { Contact } from "./components/contact/index.jsx";
import { Footer } from "./components/footer/index.jsx";
import { Footer2 } from "./components/footer_new/index.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Contact />

    </>
  );
}

export default App;
