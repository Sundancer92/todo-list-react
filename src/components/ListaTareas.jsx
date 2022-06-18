import React from 'react'
import Tarea from './Tarea'

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {
    const toggleCompletada = (id) => {
        cambiarTareas(tareas.map( (tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: !tarea.completada
                }
            }
            return tarea
        } ))
    }
    
    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map( (tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    texto: nuevoTexto
                }
            }
            return tarea
        } ))
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea;
            }
        }))
    }

    const listaTareas = tareas.map(tarea => (
        <li key={tarea.id} className=''>
            {tarea.texto}
        </li>
    ));

    return ( 
        <ul className='lista-tareas'>
            {
            listaTareas.length > 0 ? tareas.map((tarea) => {
                if(mostrarCompletadas){
                    return (
                        <Tarea 
                            id={tarea.id}
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    )  
                }else if(tarea.completada === false){
                    return (
                        <Tarea 
                            id={tarea.id}
                            tarea={tarea}
                            toggleCompletada={toggleCompletada}
                            editarTarea={editarTarea}
                            borrarTarea={borrarTarea}
                        />
                    )
                    return;  
                }
                
            })
            : <div className='lista-tareas__mensaje'>No hay tareas</div>
            } 
        </ul>
     );
}
 
export default ListaTareas;