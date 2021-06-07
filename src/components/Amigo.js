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
            <p> Numero Uno Amigo: {this.state.name}. he is {this.state.age} </p>
        )
    }
}

export default Amigo;