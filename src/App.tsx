import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/items' element={<Items />}></Route>
        <Route path='/categories' element={<Menu />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
