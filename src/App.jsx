
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from "react-router-dom";

import Headers from './Frontend/Header/Headers'
import './App.css'

import Home from './Frontend/Home/Home'
import Landingmain from './Frontend/Landing-Page/Landingmain';
import Details from './Frontend/Details/Details';

function App() {
  
  return (
    
      <Routes>
        <Route path='/' element={<Landingmain/>}/>
        <Route path='/User' element={<Home/>}/>
        <Route path='/Details' element={<Details/>}/>
        {/* <Route path='/' element={<Landing/>}/> */}
      </Routes>
      // <Headers/>
      // <Home/>

  );
}

export default App;
