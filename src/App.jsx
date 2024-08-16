import React from 'react';
import AdminForm from './Frontend/Form/AdminForm';
import UserForm from './Frontend/Form/UserForm';
import Headers from "./Frontend/Header/Headers";
import Home from "./Frontend/Home/Home";
import Details from "./Frontend/Details/Details";
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Home />
      <Details />
      <AdminForm />
      <UserForm />
    </>
  );
}

export default App;
