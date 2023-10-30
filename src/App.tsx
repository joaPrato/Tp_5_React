import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRutes from "./routes/AppRutes";
import {BrowserRouter as Router} from 'react-router-dom'
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  //El suspense se usa para una tarea asincrono; es coomo que queres que haga mientras se carga el appRutes en segundo plano
  return (//Siempre vamos a tener el header y el footer, y el contenido dendera de la ruta, segun las rutas definidas en el AppRoutes
    <>
    <ToastContainer/>
      <Router>
        <Header/>
          <Container style={{minHeight:'80vh',minWidth: '80vh',padding:'0'}}>
            <Suspense fallback={ <Loader/> }>
              <AppRutes/>
            </Suspense>
            
          </Container>
        <Footer/>
      </Router>
    </>
  )
}

export default App
