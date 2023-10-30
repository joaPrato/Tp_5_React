import React, { useState } from "react";
import { Form, Modal ,Button} from "react-bootstrap";


type ModalColorPickerProps={
    show:boolean;
    onHide: ()=> void;
    handleColorChangle: (Color:string) =>void;
}

const ModalColorPicker =({show,onHide,handleColorChangle}:ModalColorPickerProps)=>{
    const [selectedColor,setSelectedColor]=useState("#FFF");
    const handleColorPickChangle = (event: React.ChangeEvent <HTMLInputElement>)=>{
        setSelectedColor(event.target.value);
    }

    const handleAceptClick = ()=>{
        handleColorChangle(selectedColor);
        onHide();
    }
    
    return (
        <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Cambiar Color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="exampleColorInput">Elige un color</Form.Label>
                <Form.Control type='color' id='exampleColorInput' defaultValue="#FFF" title="Elige tu color" onChange={handleColorPickChangle} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="scondary" onClick={onHide}>Cancelar</Button>
                <Button variant="primary" onClick={handleAceptClick}>Aceptar</Button>
            </Modal.Footer>

        </Modal>

    )
}
export default ModalColorPicker;