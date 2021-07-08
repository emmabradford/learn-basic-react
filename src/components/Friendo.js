import React from 'react';

class Friendo extends React.Component
{
    render(){
        const {friendo} = this.props;
        const friendoList = friendo.map(fernd => {
            return(
                <div className="friendo" key={friendo.id}>
                    <div>Name: {fernd.name}</div>
                    <div>Age: {fernd.age}</div>
                    <div>Weapon: {fernd.weapon}</div>
                </div>
            )
        })
        return(
            <div className="firendo-list">
                {friendoList}
            </div>
        )
    }
}

export default Friendo;