import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Pages/Main";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik/Regular', 
  },
  palette:{
    primColor:{
      main: '#042721'
    }
  }
});


function App() {
  return (
    
    <BrowserRouter>
    <ThemeProvider
    theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
