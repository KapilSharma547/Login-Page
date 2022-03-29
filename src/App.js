import React from 'react';
import './App.css';
import Register from './Register'
import Second from './Second';
import Button from './Button';
import {

  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={Button} />
        <Route exact path="/register" element={Register} />
        <Route  exact path="/second" element={Second} />
      </Routes>

    </>
  );
}

export default App;
