import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <NavLink exact activeClassName='Navbar-active' to= '/'>
                Home
            </NavLink> 
            <NavLink exact activeClassName='Navbar-active' to= '/chips'>
                Chips
            </NavLink>
            <NavLink exact activeClassName='Navbar-active' to='/soda'>
                Soda
            </NavLink>
            <Navbar exact activeClassName= 'Navbar-active' to='/dardines'>
                Sardines
            </Navbar>
        )
    }
}
export default Navbar;
