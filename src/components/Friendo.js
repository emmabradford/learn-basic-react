import React from 'react';

const Friendo = ({friendo}) =>
{
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

export default Friendo;