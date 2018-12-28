import React from 'react';
import d from '../data/data';
import './App.css';

export default class App extends React.Component {
    render (){
        return <div className="app-wrap">
            <p>{ d.say }</p>
            <span onClick={()=>alert('蟹蟹！')}>{ d.btnText }</span>
        </div>
    }
}