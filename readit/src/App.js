import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LoginPage  from './Auth/LoginPage';
import SignupPage from './Auth/SignupPage';
import MainNavbar from './navbar/MainNavbar';
import HomePage from './HomePage/HomePage';

function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/mainnavbar' element={<MainNavbar />}/>
        <Route path='/homepage' element={<HomePage/>}/>

      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
