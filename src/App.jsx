import React, {useState} from 'react';
import './App.css'

import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas';
import ListaTareas from './components/ListaTareas';

const App = () => {
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
    ],[]) // El segundo parámetro es un array vacío, porque no queremos que se ejecute ninguna función al iniciar la aplicación.;
  return (
    <div className="contenedor">
      <Header />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;
