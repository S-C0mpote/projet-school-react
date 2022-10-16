import React from 'react';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AgentPage from "./pages/AgentPage";

function App() {
    return(
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/agent/:uuid"} element={<AgentPage/>}></Route>
        </Routes>
    )
}

export default App;
