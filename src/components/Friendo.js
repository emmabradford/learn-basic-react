import React from 'react';

const Friendo = ({friendo}) =>
{    
    return(
        <div className="firendo-list">
            { 
                friendo.map(fernd => {
                    return fernd.age>=30 ? (
                        <div className="friendo" key={friendo.id}>
                            <div>Name: {fernd.name}</div>
                            <div>Age: {fernd.age}</div>
                            <div>Weapon: {fernd.weapon}</div>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}

export default Friendo;