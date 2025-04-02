import { Route, Routes } from 'react-router-dom';

import './style.css';
import MainLayout from './MainLayout';
import Welcome from './Welcome';
import Product from './Product';
import Cart from './Cart';
import Total from './Total';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Welcome/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/total' element={<Total/>}></Route>
        </Route>
    </Routes>
    </>
  );
}

export default App;
