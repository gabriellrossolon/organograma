import { useState } from "react";
import { Banner } from "./componentes/Banner";
import { Form } from "./componentes/Formulario"
import { Time } from "./componentes/Time";


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Back-end"/>
    </div>
  );
}

export default App;
