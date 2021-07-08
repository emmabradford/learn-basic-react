import React from 'react';

class Friendo extends React.Component
{
    render(){
        const {name, age, instrament} = this.props;
        return(
            <div className="friendo">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>instrament: {instrament}</div>
            </div>
        )
    }
}

export default Friendo;