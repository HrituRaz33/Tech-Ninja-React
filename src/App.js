import {   Route, Routes  } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
