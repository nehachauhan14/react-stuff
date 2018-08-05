import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '' ;

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    if(this.state.showPersons){
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} 
          >
          </Persons>
        </div>
      );
      btnClass = classes.Red;
    }
    

    return (
      <div className={classes.App}>
        <h1>Hi I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}> This is really working </p>
        <button 
          className = {btnClass}
          onClick={this.togglesPersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  } 
}

export default App;
