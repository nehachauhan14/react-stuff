import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium , {StyleRoot} from 'radium';


class App extends Component {

  state = {
    persons : [
      {id : 'wrwerw', name:'Neha' , age: 26} , 
      {id : 'wrwergg', name: 'Vishal', age: 26 },
      { id : 'wrwert', name:'Bhavna', age:25}
    ], 
    otherState : 'some other value',
    showPersons : false 
  };

  switchNameHandler = (newValue) => {
    console.log('called!');
    this.setState({
      persons : [
        {name:'Neha' , age: 20} , 
        {name: 'Vishal', age: 26 },
        {name:newValue , age:25}
      ] 
    })
  }

  nameChangeHandler = (event , id) =>{
    console.log('Name change handler called!');
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value ;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});

  }

togglesPersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons : !doesShow});
}
  render() {
    const style = {
      backgroundColor: 'Green',
      color : 'White', 
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer', 
      ':hover' : {
        backgroundColor : 'blue',
        color : 'red' 
      }
    }    
    let persons = null;

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
              name = {person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed = {(event)=>this.nameChangeHandler(event , person.id)}
              key={person.id}
              > 
            </Person> 
            })
          }
        </div>
      );

      style.backgroundColor = "Red";
      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <p className={classes.join(' ')}> This is really working </p>
        <button
          style={style} 
          onClick={this.togglesPersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  } 
}

export default Radium(App);
