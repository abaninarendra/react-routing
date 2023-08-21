import React, { Component } from "react";
import {
    Routes,
    Route,    
    NavLink,
    HashRouter,   
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render(){
        return(
            <HashRouter>
        <div>
            <h1>Simple SPA</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink path to="/Stuff">Stuff</NavLink></li>
                <li><NavLink path to="/Contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Stuff" element={<Stuff/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                </Routes>
                
            </div>
        </div>
        </HashRouter>
        );
    }
}

export default Main;