import React from 'react';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Write your code here

    return (
      <div>
        {this.props.children}
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
