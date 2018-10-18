import React, { Component } from "react";
import request from "superagent";
import logo from "./logo.svg";
import "./App.css";

const getFunctionsUrl =
  process.env.REACT_APP_ENVIRONMENT === "netlify"
    ? "/.netlify/functions"
    : "http://localhost:9000";

const getData = () =>
  request(`${getFunctionsUrl}/getData`).then(({ text }) => text);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Failure"
    };
  }

  componentDidMount() {
    getData().then(data =>
      this.setState({
        data
      })
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.data}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
