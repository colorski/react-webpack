import React from 'react';
import { Link } from 'react-router-dom';
import d from '../data/data';
import { cube } from '../utils/math';

export default class Home extends React.Component {
    render (){
        return <main className="main">
            <pre>
                <p>webpack :  ^4.28.2</p>
                <p>react :  ^16.7.0</p>
                <p>react-router-dom :  ^4.3.1</p>
            </pre>
            <hr />
            <p>{ d.say }</p>
            <p><span onClick={()=>alert('蟹蟹！')}>{ d.btnText }</span></p>
            <p>{'Test Tree Shaking, the result of used function is: ' + cube(5)}</p>
            <hr />
            <p><Link to="/users/list">Go to Users page from here.</Link></p>
            <p><Link to="/users/list/detail/2">Go to User-2 Detail page from here.</Link></p>
        </main>
    }
}