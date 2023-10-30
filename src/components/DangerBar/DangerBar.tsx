import { ProgressBar } from "react-bootstrap"

//declaramos las propiedades y sus tipos que puede recibir el componente
type DangerBarProps ={
    value: number;
}

const DangerBar = ({value}: DangerBarProps)=>{

    const getVariant = (value:number)=>{
        if (value < 30){
            return 'sucess';
        }else if (value < 60){
            return 'warning';
        }else{
            return 'danger';
        } 
    };

    return (
        <ProgressBar animated now={value} variant={getVariant(value)}/>
    )
}
export default DangerBar