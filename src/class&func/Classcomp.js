import React from "react";

export class Classcomp extends React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        console.log("Mounted")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("User updated Code");
    }
 
    componentWillUnmount() {
        console.log("Un Mounted")
    }

    render() {
    return (
      <div>
        <h1>Welcome to class based component</h1>
        <p>The count is : {this.state.count}</p>
        <button
        onClick={
            ()=>{
                this.setState({count: this.state.count + 1})
            }
        }
        >Increment</button>
      </div>
    );
  }     
}