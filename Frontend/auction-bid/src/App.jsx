import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/SignUp.jsx';
import Login from './pages/Login.jsx';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
