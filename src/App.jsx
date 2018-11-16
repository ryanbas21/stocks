import React, { Component } from "react";
import { Search } from "./features";
import { Container } from "./features";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    stocks: []
  };
  onChange = e => {
    const value = e.target.value;
    this.setState({
      value
    });
  };
  onClick = e => {
    fetch("https://api.iextrading.com/1.0/stock/" + this.state.value + "/book")
      .then(() => {
         navigator.serviceWorker.addEventListener('message', function(event) {
         if (event.data && event.data.state !== undefined) {

         }
         })
      })
      .then(res => res.json())
      .then(({ quote: value }) => {
        return value;
      })
      .then(value => {
        this.setState({
          stocks: this.state.stocks.concat(value)
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Search
          value={this.state.value}
          onChange={this.onChange}
          onClick={this.onClick}
          onSubmit={this.onSubmit}
        />
        <Container>
          {this.state.stocks.map(stock => (
            <div>
              <div>{stock.companyName}</div>
              <div>{stock.symbol}</div>
              <div>{stock.change}</div>
              <div>Price: {stock.latestPrice}</div>
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
