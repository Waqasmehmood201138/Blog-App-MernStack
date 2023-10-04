import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Auth/LoginPage';
import SignupPage from './Auth/SignupPage';
import MainNavbar from './navbar/MainNavbar';
import HomePage from './HomePage/HomePage';
import Firstcard from './cards/firstcard/Firstcard';
import Footer from './footer/Footer';
import JsPage from './categoryBarPages/javascript/JsPage';
import Htmlcss from './categoryBarPages/htmlcss/Htmlcss';
import AiPage from './categoryBarPages/aiPage/AiPage';
import Java from './categoryBarPages/java/Java';
import Wordpress from './categoryBarPages/wordpress/Wordpress';
import Php from './categoryBarPages/php/Php';
import Python from './categoryBarPages/python/Python';
import VanillaJsPage from './VanillaJs/VanillaJsPage';




function App() {
  return (
    <>

      <BrowserRouter>
        <MainNavbar />
        <Routes>

          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/card' element={<Firstcard />} />
          <Route path='/jspage' element={<JsPage />} />
          <Route path='/htmlcss' element={<Htmlcss />} />
          <Route path='/aipage' element={<AiPage />} />
          <Route path='/java' element={<Java />} />
          <Route path='/wordpress' element={<Wordpress />} />
          <Route path='/php' element={<Php />} />
          <Route path='/python' element={<Python />} />
          <Route path='/vanillajs' element={<VanillaJsPage />} />




        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
