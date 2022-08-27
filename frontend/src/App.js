

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ContactosPage from './pages/ContactosPage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';
import NovedadesPage from './pages/NovedadesPage';


import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Header>  </Header>

      <BrowserRouter>

        <Nav>    </Nav>
          <Routes>
          <Route path="/" element={<HomePage/>}> </Route>

          <Route path="NosotrosPage" element={<NosotrosPage/>}> </Route>

          <Route path="ServiciosPage" element={<ServiciosPage/>}> </Route>

          <Route path="GaleriaPage" element={<GaleriaPage/>}> </Route>

          <Route path="NovedadesPage" element={<NovedadesPage/>}> </Route>

          <Route path="ContactosPage" element={<ContactosPage/>}> </Route>

          </Routes>
        
       
      </BrowserRouter>


      <Footer>   </Footer>

     


    </div>
  );
}

export default App;
