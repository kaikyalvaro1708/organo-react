import Banner from "./componentes/Banner/index";
import Form from "./componentes/Form";
import { useState } from "react";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria:'#57c278',
      corSecundaria: '#09f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria:'#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria:'#a6d157',
      corSecundaria: '#fdf8e2'
    },
    {
      nome: 'Devops',
      corPrimaria:'#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria:'#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria:'#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {/* Acessando a lista times com o map */}
      {times.map(time => <Time key={time.nome} 
        nome={time.nome} 
        colorPrimaria={time.corPrimaria} 
        colorSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
      <Footer/>
    </div>
  );
}

export default App;
