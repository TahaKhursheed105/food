import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Pages/Home/Home'
import About from './Components/Pages/About'
import Menu from './Components/Pages/Menu'
import Shop from './Components/Pages/Shop'
import Blog from './Components/Pages/Blog'
import Contact from './Components/Pages/Contact'


const App = () => {
  return (
    <div>
<Router>
<Routes>
        <Route path="/" element={<Home />}></Route> 

        <Route path="/about" element={<About />}></Route> 

        <Route path="/menu" element={<Menu />}></Route> 

        <Route path="/shop" element={<Shop />}></Route>

        <Route path="/blog" element={<Blog />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
</Router>
      
    </div>
  )
}

export default App

