import { useState } from 'react'
import { HashRouter as Router , Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './assets/Components/Pages/Home/Home'
import Sobre from './assets/Components/Pages/Sobre/Sobre'
import Busca from "./assets/Components/Pages/Busca/Busca"
import Dicas from './assets/Components/Pages/Dicas/Dicas'
import Fazemos from './assets/Components/Pages/Fazemos/Fazemos'


function App() {



  return (

    // Rotas 
    
      <>
       
      

        <Router>

          <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/Sobre" element={<Sobre />} />
              <Route path="/Busca" element={<Busca />} />
              <Route path="/Dicas" element={<Dicas/>} />
              <Route path='/Fazemos' element={<Fazemos/>} />
          </Routes>

        </Router>
        
     

      
      </>
  );
}

export default App
