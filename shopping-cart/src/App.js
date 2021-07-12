import './App.css';
import NavBar from './components/navBar';
import Counters from './components/counters';
import React, { Component } from 'react'


class App extends Component {
  state = {
    counters : [
      {id:1, value: 1},
      {id:2, value: 2},
      {id:3, value: 3},
      {id:4, value: 4}
  ]
    }

    constructor(){
      super();
      console.log("App - constructor");
    }

    handleDelete = counterId => {
      let counters = this.state.counters.filter(counter => counter.id !== counterId);
      this.setState({counters});
  }

  handleReset = () => {
      let counters = this.state.counters.map(c => {c.value = 0;
          return c});
      this.setState({counters});
  }

  handleIncrement = id => {      
      let newArray = [...this.state.counters];
      for(let element of newArray){
          if(element.id === id){
              element.value = element.value+1;
      }
      }
      this.setState({counters:newArray});
  }

  handleDecrement = id => {
    let newArray = [...this.state.counters];
      for(let element of newArray){
          if(element.id === id){
              element.value = element.value-1;
      }
      }
      this.setState({counters:newArray});
  }

  componentDidUpdate(){
    console.log("App - componentDidUpdate");
  }

  componentDidMount(){
    console.log("App - componentDidMount");
  }

  render() {   
    console.log("App - render");

    return (  
      <React.Fragment>
        <NavBar counters={this.state.counters}/>
        <main>
            <Counters 
            counters={this.state.counters} 
            onDelete={this.handleDelete} 
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement} 
            />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
