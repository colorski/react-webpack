import React from 'react';
import { NavLink } from 'react-router-dom';

export default class UserAdd extends React.Component {
    render (){
        return <main className="main user">
            <nav className="user-nav">
                <NavLink to="/users/list">UserList</NavLink>
                <NavLink to="/users/add">UserAdd</NavLink>
                <NavLink to="/balabala">ErrorUrl</NavLink>
            </nav>
            <section className="user-block">
            UserAdd
            </section>
        </main>
    }
}