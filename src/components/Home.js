import Amigo from './Amigo';
import Friendo from './Friendo';
import Button from './Button';
import Hover from './Hover';
import Copy from './Copy';
import AddFernd from './AddFernd';
import React, {Component} from 'react';

class Home extends Component{
    state = {
        friendo :[
          { name: "Lan Zhan", age: 30, weapon: "bichen", id: 1 },
          { name: "Wei Ying", age: 30, weapon: "suibian", id: 2 }, 
          { name: "Lan Xichen", age: 35, weapon: "shouyue", id: 3 },
          { name: "Meng Yao", age: 32, weapon: "hensheng", id: 4 } 
        ]
      }  
    
      addFriendo = (firendo) =>{
        firendo.id = Math.random();
        let fernds = [...this.state.friendo, firendo];
        this.setState({
          friendo: fernds
        })
      }
    
      deleteFriendo = (id) => {
        let friendos = this.state.friendo.filter(fernd => {
          return fernd.id !== id
        });
        this.setState({
          friendo: friendos
        })
      }
    
    render(){
    return(
        <div className="container">
            <h1>Hola Amigos</h1>
            <Amigo />
            <Friendo deleteFriendo={this.deleteFriendo} friendo={this.state.friendo}/>
            <Button />
            <Hover />
            <Copy />
            <AddFernd addFriendo={this.addFriendo} />
        </div>
    )
}
}

export default Home;