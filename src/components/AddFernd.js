import React, {Component} from 'react';

class AddFernd extends Component {
    state = {
        name: null,
        age: null,
        weapon: null
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id='age' onChange={this.handleChange} />
                    <label htmlFor="weapon">Weapon:</label>
                    <input type="text" id="weapon" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}