import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Conversatorio1 from "./components/Conversatorio1";
import Conversatorio2 from "./components/Conversatorio2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conversatorio1" element={<Conversatorio1 />} />
          <Route path="/conversatorio2" element={<Conversatorio2 />} />
          <Route path="/entrevista" element={<entrevista />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
