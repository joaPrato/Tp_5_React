import  {useState} from 'react';
import ModalColorPick from '../ModalColorPicker/ModalColorPicker';
import { Button } from 'react-bootstrap';



const ButtonColorPick =()=>{

    const [buttonColor, setButtonColor] =useState("#3d7c40");
    const [showModal,setShowModal]=useState(false);
    
    const handleColorChangle = (color:string) =>{
        setButtonColor(color);
    }

    const handleShowModal = ()=>{
        setShowModal(true);
    }

    return (
        <div className='m-3'>
            <h2>Ejemplo 3</h2>

            {/*componente Padre */}
            <Button variant="primary" style={{backgroundColor: buttonColor}} onClick={handleShowModal}>Cambiar Color</Button>

            {/*Componente hijo*/}
            {showModal && <ModalColorPick show={showModal} onHide={()=>setShowModal(false)} handleColorChangle={handleColorChangle}/>}

        </div>
    )

}
export default ButtonColorPick;