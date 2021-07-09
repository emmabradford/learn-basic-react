import './App.css';
import Amigo from './components/Amigo';
import Button from './components/Button';
import Hover from './components/Hover';
import Copy from './components/Copy';
import Friendo from './components/Friendo';
import react, {Component} from 'react';
import AddFernd from './components/AddFernd';

class App extends Component {
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

  componentDidMount(){
    console.log('componendt mounted');
  }

  render(){
    return (
      <div className="App">
        <h1>Hola Amigos</h1>
        <Amigo />
        <Friendo deleteFriendo={this.deleteFriendo} friendo={this.state.friendo}/>
        <Button />
        <Hover />
        <Copy />
        <AddFernd addFriendo={this.addFriendo} />
      </div>
    );
  }
}

export default App;
