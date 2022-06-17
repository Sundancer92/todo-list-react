import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquarePlus} from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, cambiarTareas}) => {
    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (e) => {
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        cambiarTareas(
            [
                ...tareas, 
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        );

        cambiarInputTarea('');
    }

    return ( 
        <form className='formulario-tareas'>
                <input 
                    type="text" 
                    className='formulario-tareas__input'
                    placeholder='Añadir una tarea...'
                    value={inputTarea}
                    onChange={(e) => handleInput(e)}
                    />
                <button
                    type="submit"
                    className='formulario-tareas__btn'
                    onClick={handleSubmit}
                    >
                    <FontAwesomeIcon icon={faSquarePlus} className='formulario-tareas__icono-btn'/>
                </button>
        </form>
     );
}
 
export default FormularioTareas;