import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import InsertProduct from './Pages/InsertProduct';
import Display from './Pages/Display';
import ProductSummery from './Pages/ProductSummery';
import SearchProduct from './Pages/SearchProduct';
import Update from './Pages/Update';
import Home from './Pages/Home';
import Dataupdate from './Pages/Dataupdate';

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Layout/>}>
<Route path="home"  element={<Home/>}/>
<Route index element={ <Home/> }/>
<Route path="INP"  element={<InsertProduct/>}/>
<Route path="DIS"  element={<Display/>}/>
<Route path="PS"  element={<ProductSummery/>}/>
<Route path="SP"  element={<SearchProduct/>}/>
<Route path="UP"  element={<Update/>}/>
<Route path="UPD/:id" element={<Dataupdate />}/>


</Route>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
