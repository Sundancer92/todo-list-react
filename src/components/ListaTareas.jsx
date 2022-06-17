import React from 'react'

import Tarea from './Tarea'

const ListaTareas = ({tareas}) => {
    const listaTareas = tareas.map(tarea => (
        <li key={tarea.id} className=''>
            {tarea.texto}
        </li>
    ));

    return ( 
        <ul className='lista-tareas'>
            {
            listaTareas.length > 0 ? tareas.map((tarea) => {
                return (
                    <Tarea 
                        id={tarea.id}
                        tarea={tarea}
                    />
                )  
            })
            : <div className='lista-tareas__mensaje'>No hay tareas</div>
            } 
        </ul>
     );
}
 
export default ListaTareas;