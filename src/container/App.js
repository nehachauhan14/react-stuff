import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){  
    super(props);
    console.log("[App.js] in Constructor", props);
  }

  componentWillMount(){
    console.log("[App.js] in ComponentWillMount");
  }

  componentDidMount(){
    console.log("[App.js] in ComponentDidMount")
  }

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
    console.log("[App.js] in render");
    let persons = null;
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
    }
    
    return (
      <div className={classes.App}>
        <Cockpit
           appTitle = {this.props.appTitle}
           persons = {this.state.persons}
           showPersons = {this.state.showPersons}
           clicked={this.togglesPersonsHandler}
        />
        {persons}
      </div>
    );
  } 
}

export default App;
