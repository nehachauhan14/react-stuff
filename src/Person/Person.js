import React from 'react';
import './Person.css';
import Radium , {StyleRoot} from 'radium';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)' : {
            width : '450'
        }
    }

    return(
        <div className="Person" style={style}>
            <p onClick={props.click}> I am {props.name} and {props.age} </p>
            <p>{props.children} </p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );   
}; 

export default Radium(person);