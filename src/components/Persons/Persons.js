import React , {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props){  
        super(props);
        console.log("[Persons.js] in Constructor", props);
      }
    
      componentWillMount(){
        console.log("[Persons.js] in ComponentWillMount");
      }
    
      componentDidMount(){
        console.log("[Persons.js] in ComponentDidMount")
      }

      componentWillReceiveProps(nextProps){
        console.log("Update [Persons.js] in componentWillReceiveProps")
      }

      ShouldComponentUpdate(nextProps, nextState){
        //   its not working 
        console.log("Update [Persons.js] in ShouldComponentUpdate");
       // return nexProps.persons !== oldProps.persons;
       return true;
      }

      componentWillUpdate(nextProps,nextState){
        console.log("Update [Persons.js] in componentWillUpdate")
      }


    render(){
        console.log("[App.js] in render");
        return this.props.persons.map((person,index) => {
            return (<Person 
               name = {person.name} 
               age={person.age}
               click={() => this.props.clicked(index)}
               changed = {(event)=> this.props.changed(event , person.id)}
               key={person.id}
               > 
               </Person> );
        });
    }
    
}
export default Persons;