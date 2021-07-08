import React from 'react';

class Friendo extends React.Component
{
    render(){
        console.log(this.props);        return(
            <div className="friendo">
                <div>Name: Lan Zhan</div>
                <div>Age: 30</div>
                <div>instrament: wangji</div>
            </div>
        )
    }
}

export default Friendo;