import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class UserDetail extends React.Component {
    render (){
        const { match, history } = this.props;
        return <main className="main user">
            <nav className="user-nav">
                <NavLink to="/users/list">UserList</NavLink>
                <NavLink to="/users/add">UserAdd</NavLink>
                <NavLink to="/balabala">ErrorUrl</NavLink>
            </nav>
            <section className="user-block">
                UserDetail, UserId: <strong style={{fontWeight:'bold', color:'#f00'}}>{ match.params.userId }</strong>
                <hr />
                <span onClick={ history.goBack }>← Go back</span>
                <hr />
                <span><Link to="/products">Go to Products →</Link></span>
            </section>
        </main>
    }
}