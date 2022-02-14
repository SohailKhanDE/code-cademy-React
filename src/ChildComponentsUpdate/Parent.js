import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {

  // Read Props (old class component way :( 
  constructor(props) {
    super(props);

    // Set initial State
    this.state = { name: 'Sohail' };

  // Bind this value to changeName Function so it can be used in Child components Bug-Free
  this.changeName = this.changeName.bind(this);
  }

// Fucntion used to set new State (Child component will need a helper function setxxx to change this)
changeName(newName) {
  this.setState({
    name: newName
  });
}

// Render Stuff/Components
  render() {
    return <Child onChange={this.changeName} name={this.state.name} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);