import React from 'react';
class Amigo extends React.Component
{
    state = {
        name: 'Wei Ying',
        age: 30

    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted form " + this.state.name);
    }
    
    render()
    {
        return (
            <div>
            <p> Numero Uno Amigo: {this.state.name}. he is {this.state.age} </p>
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

export default Amigo;