import './App.css';
//import Amigo from './components/Amigo';
//import Button from './components/Button';
//import Hover from './components/Hover';
//import Copy from './components/Copy';
//import Friendo from './components/Friendo';
import React, {Component} from 'react';
//import AddFernd from './components/AddFernd';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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

  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log('prev props: ', prevProps, 'prev state', prevState);
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
