import React from 'react';
import d from '../data/data';
import { cube } from '../utils/math';
import './App.css';

export default class App extends React.Component {
    render (){
        return <div className="app-wrap">
            <p>{ d.say }</p>
            <p><span onClick={()=>alert('蟹蟹！')}>{ d.btnText }</span></p>
            <p>{'Test Tree Shaking, the result of used function is: ' + cube(5)}</p>
        </div>
    }
}