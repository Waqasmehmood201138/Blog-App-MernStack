import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  LoginPage  from './Auth/LoginPage';
import SignupPage from './Auth/SignupPage';

function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>} />

      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
