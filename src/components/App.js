import React from 'react';
import d from '../data/data';
import './App.css';

export default class App extends React.Component {
    render (){
        return <div className="app-wrap" onClick={()=>console.log('123')}>{ d.text }</div>
    }
}