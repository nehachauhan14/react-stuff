import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component{

	constructor(props){  
		super(props);
		console.log("[Person.js] in Constructor", props);
	}

	componentWillMount(){
		console.log("[Person.js] in ComponentWillMount");
	}

	componentDidMount(){
		console.log("[Person.js] in ComponentDidMount")
	}

	render(){
		console.log("[Person.js] in Render");
		return(
				<div className={classes.Person}>
						<p onClick={this.props.click}> I am {this.props.name} and {this.props.age} </p>
						<p>{this.props.children} </p>
						<input type="text" value={this.props.name} onChange={this.props.changed}/>
				</div>
		);
}

} 

export default Person;