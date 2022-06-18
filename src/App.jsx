import React, {useState, useEffect} from 'react';
import './App.css'

import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {

  const tareasGuardadas = (JSON.parse(localStorage.getItem('tareas'))) || [];
  // Hook useState
  const [tareas, cambiarTareas] = useState(tareasGuardadas) 

    useEffect(() => {
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }, [tareas])

    let configMostrarCompletadas = '';

    if(localStorage.getItem('mostrarCompletadas') === null){
      configMostrarCompletadas = true;
      }else{
        configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
    }
    

    const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);

    useEffect(() => {
      localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())
    }, [mostrarCompletadas])

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
