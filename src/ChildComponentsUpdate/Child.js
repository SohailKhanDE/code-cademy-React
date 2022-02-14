import React from 'react';

export class Child extends React.Component {
// Read Props (old class component way :(
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
  const name = e.target.value;
  this.props.onChange(name);
}
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Sohail">
            Sohail
          </option>

          <option value="Shakeel">
            Shakeel
          </option>

          <option value="Shazy">
            Shazy
          </option>
        </select>
      </div>
    );
  }
}