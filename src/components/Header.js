import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render (){
        return <header>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/users" activeClassName="active">Users</NavLink>
            <NavLink to="/products" activeClassName="active">Products</NavLink>
        </header>
    }
}