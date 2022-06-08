import React from "react";

// CSS 적용
import './App.css'

// Router 관련
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './routers/Home';
import About from './routers/About';
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* 복수개의 Route를 사용할 경우 Routes 안에 넣어줘야 한다. */}
      <Routes>
        
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/movie-detail/:id" element={<Detail/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;