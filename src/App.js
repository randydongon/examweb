import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import MyAppBar from "./MyAppBar";

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MyAppBar />
          <Home />
        </Route>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
/*
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
//import Tooltip from './Tooltip';

export default class App extends React.Component {
  state = {
    text: ''
  }

  onDocumentClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.setState({ text: event.target.textContent })
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
  }

  render() {
    return <div>
      {this.props.children}
      <Tooltip text={this.state.text} />
    </div>
  }
};

class Tooltip extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
*/
// React is loaded and is available as React and ReactDOM
// imports should NOT be used

/*
const App = (props) => {
  const [arr, setArr] = useState(props.items);

  const [status, setStatus] = useState(true);

  const newList = props.items;

  const handleClick = (value) => {
    let index = value.target.textContent;

    const a = arr.indexOf(index);
    const b = arr.splice(a, 1);
    let nlist = arr;

    nlist.unshift(b.toString())
    setArr(nlist);
    setStatus(false)

  }

  useEffect(() => {
    if (status) {
      setArr(newList)
    }
    else {

      setStatus(true)
    }
    // console.log(arr, 'new arr')
  }, [status]);

  return (
    <div>
      {arr.map((item, index) =>
        <ul key={index}>
          <li onClick={handleClick}>{item}</li>
        </ul>
      )}
    </div>
  )
}
export default App;
*/
/*
import React from 'react';
import ReactDOM from 'react-dom'

class Tooltip extends React.Component {
  constructor(props) {

  }
  render() {
    // Write your code here

    return (
      <h1>{this.props.text}</h1>
    );
  }
}

export default class App extends React.Component {
  state = {
    text: ''
  }

  onDocumentClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.setState({ text: event.target.textContent })
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
  }

  render() {
    return <div>
      {this.props.children}
      <Tooltip text={this.state.text} />
    </div>
  }
}

document.body.innerHTML = "<div id='root'></div><div id='tooltip'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App>
  <button id="button1">First button</button>
  <button id="button2">Second button</button>
</App>, rootElement);
document.getElementById("button2").click();
setTimeout(() => console.log(document.body.innerHTML));

*/
