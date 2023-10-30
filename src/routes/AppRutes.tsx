import { Route, Routes } from "react-router-dom";//importamos esas funciones que vienen con las dependencias que tenemos instaladas
import HomePage from "../pages/HomePage";
import Componentes from "../pages/Componentes";
import Administracion from "../pages/Administracion";



const AppRutes : React.FC =()=>{
    return(//Routes le decimo que es un contenedor de rutas. Y en Rute proveemos las rutas en el path y cuando se ponga esa ruta se renderiza el componendte que le pasamos
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/componentes" element={ <Componentes/> }/>
            <Route path="/administracion" element={ <Administracion/> }/>
        </Routes>
    )
}
export default AppRutes;