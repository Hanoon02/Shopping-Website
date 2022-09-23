import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
