import React, {useState} from 'react';
import './App.css'

import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {

  // Hook useState
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Hacer la comida',
        completada: false
      }
    ]) 

    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);

  return (
    <div className="contenedor">
      <Header 
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
      />
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas} 
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
