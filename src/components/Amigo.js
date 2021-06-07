import React from 'react';
class Amigo extends React.Component
{
    state = {
        name: 'Wei Ying',
        age: 30

    }
    render()
    {
        return (
            <p> Numero Uno Amigo: {this.state.name} </p>
        )
    }
}

export default Amigo;