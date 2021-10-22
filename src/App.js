import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./assets/UI";
import { temaClaro, temaEscuro } from "./assets/UI/temas";
import SwitchTema from "./Components/SwitchTema"

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle"

function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () =>{
    setTema((tema) => !tema )
  }

  return (
    <ThemeProvider theme={tema? temaClaro :temaEscuro}>
      <BtnTema onClick= {toggleTema}>
        <SwitchTema tema = {tema}/>

        
      </BtnTema>
      <GlobalStyle/>
      <Cabecalho />
      <Container/>
    </ThemeProvider>
  );
}

export default App;
