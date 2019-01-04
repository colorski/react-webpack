import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render (){
        return <header>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/users/list">Users</NavLink>
            <NavLink to="/products">Products</NavLink>
        </header>
    }
}