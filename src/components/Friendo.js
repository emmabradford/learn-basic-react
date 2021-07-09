import React from 'react';
import './Friendo.css';
const Friendo = ({friendo, deleteFriendo}) =>
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
                            <button onClick={() => {deleteFriendo(fernd.id)}}> Delete Friend</button>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}

export default Friendo;