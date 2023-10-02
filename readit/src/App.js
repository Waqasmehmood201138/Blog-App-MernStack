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


function App() {
  return (
    <>


      <BrowserRouter>
        <MainNavbar />
        <Routes>

          <Route path='/htmlcss' element={<Htmlcss />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/card' element={<Firstcard />} />
          <Route path='/jspage' element={<JsPage />} />
          <Route path='/jspage' element={<Htmlcss />} />




        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
