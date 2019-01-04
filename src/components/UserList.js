import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class UserList extends React.Component {
    render (){
        return <main className="main user">
            <nav className="user-nav">
                <NavLink to="/users/list">UserList</NavLink>
                <NavLink to="/users/add">UserAdd</NavLink>
                <NavLink to="/balabala">ErrorUrl</NavLink>
            </nav>
            <section className="user-block">
                <div>UserList</div>
                <ul>
                    <li><Link to='/users/list/detail/1'>user-1</Link></li>
                    <li><Link to='/users/list/detail/2'>user-2</Link></li>
                    <li><Link to='/users/list/detail/3'>user-3</Link></li>
                    <li><Link to='/users/list/detail/4'>user-4</Link></li>
                </ul>
            </section>
        </main>
    }
}