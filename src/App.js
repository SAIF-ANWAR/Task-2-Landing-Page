import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts/AllProducts';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Header/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/allProducts" element={<AllProducts></AllProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
