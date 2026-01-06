import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Signup from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
