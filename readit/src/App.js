import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LoginPage  from './Auth/LoginPage';
import SignupPage from './Auth/SignupPage';
import MainNavbar from './navbar/MainNavbar';

function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/mainnavbar' element={<MainNavbar />}/>

      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
