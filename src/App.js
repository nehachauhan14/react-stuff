import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      {name:'Neha' , age: 26} , 
      {name: 'Vishal', age: 26 },
      {name:'Bhavna', age:25}
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

  nameChangeHandler = (event) =>{
    console.log('Name change handler called!');
    this.setState({
      persons : [
        {name:'Neha' , age: 20} , 
        {name: 'Vishal', age: 26 },
        {name:event.target.value , age:25}
      ] 
    })

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
      backgroundColor: 'white', 
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person,index) => {
              return <Person 
              name = {person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              > 
            </Person> 
            })
          }
          {/* <Person 
            name = {this.state.persons[0].name} 
            age={this.state.persons[0].age}> 
          </Person> 
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Bhavna Singh')}
            changed = {this.nameChangeHandler}
            >My Hobbies are : Singing        
          </Person>
          <Person 
            name = {this.state.persons[2].name} 
            age={this.state.persons[2].age}> 
          </Person> */}
          </div>
      );
    }
    

    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <p> This is really working </p>
        <button
          style={style} 
          onClick={this.togglesPersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  } 
}

export default App;
