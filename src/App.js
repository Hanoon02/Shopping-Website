import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
   <>
   <BrowserRouter>
    <NavBar/>
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-400 py-6'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   </>
  );
}

export default App;
