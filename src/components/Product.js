import React from 'react';

export default class Product extends React.Component {
    render (){
        const { goBack } = this.props.history;
        return <main className="main">
            <div>Product</div>
            <hr />
            <span onClick={ goBack }>← Go back</span>
        </main>
    }
}