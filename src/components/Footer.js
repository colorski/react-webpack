import React from 'react';

export default class Footer extends React.Component {
    render (){
        const { version } = this.props;
        return <div className="footer">
            <p>footer</p>
            <p>version: @{ version }</p>
        </div>
    }
}