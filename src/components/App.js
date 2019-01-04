import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
import Product from './Product';
import Footer from './Footer';
import d from '../data/data';
import './App.css';

export default class App extends React.Component {
    render (){
        return <BrowserRouter>
            <div className="app-wrap">
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products' component={Product} />
                    <Route path='/users/list' exact component={UserList} />
                    <Route path='/users/list/detail/:userId' component={UserDetail} />
                    <Route path='/users/add' component={UserAdd} />
                    <Redirect to='/' />
                </Switch>
                <Footer version={d.version} />
            </div>
        </BrowserRouter>
    }
}

