import React from "react";
import { Route,Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'

import "./App.css";

function App() {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer></Footer>
    </Box>
  );
}

export default App;
