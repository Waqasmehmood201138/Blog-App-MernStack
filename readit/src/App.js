import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LoginPage  from './Auth/LoginPage';
import SignupPage from './Auth/SignupPage';
import MainNavbar from './navbar/MainNavbar';
import HomePage from './HomePage/HomePage';
import Firstcard from './cards/firstcard/Firstcard';
import JsPage from './categoryBarPages/JsPage';

function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/mainnavbar' element={<MainNavbar />}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/card' element={<Firstcard/>}/>
        <Route path='/jspage' element={<JsPage/>}/>

      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
