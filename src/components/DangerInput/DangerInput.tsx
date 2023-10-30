import React , {useState} from 'react';
import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';


const DangerInput = ()=>{
    //Variable que va a guardar el valor elegido por el usuario
    const[value,setValue]= useState(0);

    const handleChangle = (event : React.ChangeEvent<HTMLInputElement>) => { //este parametro es que se va a ejecuar el handleChangle cada vez que que se modifique el input es decir cada vez que se mueva la barra
        setValue (Number(event.target.value)); 
    }

    return(
        <>
            <div className='m-3 w-50'>
                <h2>Ejemplo 1</h2>
                {/*Componente padre*/}
                <Form.Range value={value} onChange ={handleChangle}/>
                 
                 {/* Componente Hijo*/}
                 <DangerBar value={value} />

            </div>
        
        </>

    )
}
export default DangerInput;