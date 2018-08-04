import React, {Component} from 'react';

// Not using anywhere in application , but should be aware how to create ErrorBoundary 

class ErrorBoundary extends Component {
    state={
        hasErrors : false, 
        errorMessage : ''
    }

    ComponentDidCatch = (error , info) =>{
        this.setState({
            hasError : true,
            errorMessage : error
        });
    }

    render(){
        if(this.state.hasErrors){
            return <h1>{this.state.errorMessage}</h1>
        } else {
            this.props.children;
        }
    }
}

export default ErrorBoundary ;