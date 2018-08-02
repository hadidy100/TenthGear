import React, {Component} from 'react';
import logo from './logo.svg';
import car from './car.svg';
import orders from './orders.png';
import about from './about.png';
import crm from './crm.png';
import car1 from './cars/car1.jpg';
import car2 from './cars/car2.jpg';
import car3 from './cars/car3.jpg';
import background from './cars/background.jpg';
import browse from './browse.png';
import reports from './reports.png';
import './App.css';
import {Pay} from './payment.js';

class App extends Component {

  dropMenuLeft() {
    return (
      <nav className="dropdown">
      <button className="myButton" name="prodButton">Main Menu</button>
      <div id="myDropdown" className="dropdown-content">
        <a className="icons" href="#">
          <img src={browse} height="80px" width="80px" />
          Browse
        </a>
        <a className="icons" href="#">
          <img src={crm} height="60px" width="60px" />
          CRM
        </a>
        <a className="icons" href="#">
          <img src={reports} height="60px" width="60px" />
          Reports
        </a>

        <a className="icons" href="#">
          <img src={about} height="60px" width="60px" />
          About Us
        </a>
      </div>
    </nav>);
  }

  dropMenuRight() {
    return (
    <nav className="dropdown2">
      <button className="myButton2" name="prodButton">Sales Menu</button>
      <div id="myDropdown2" className="dropdown-content2">
        <a className="icons" href="#">
          <svg height="60px" width="120px" className="svg" viewBox="0 0 20 20">
            <g className="g">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </g>
          </svg>Customers</a>
        <a className="icons" href="#">
          <img src={car} height="60px" width="100%" />
          Inventory
        </a>
        <a className="icons" href="#">
          <span>
            <svg height="60px" width="120px" className="svg" viewBox="0 0 20 20">
              <g>
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
              </g>
            </svg>
          </span>
          Expenses
        </a>
        <a className="icons" href="#">
          <img src={orders} height="90px" width="100%" />
          Orders
        </a>
      </div>
    </nav>);
  }

  leftDiv() {
    return (<div className="leftDiv">
      {this.dropMenuLeft()}
    </div>);
  }

  rightDiv() {
    return (<div className="rightDiv">
      {this.dropMenuRight()}
    </div>);
  }

  centerDiv() {
    return (<div id="center" className="centerDiv">
    </div>);
  }

  mainDiv() {
    return (<div className="mainDiv">
      {this.leftDiv()}
      {this.rightDiv()}
      {this.centerDiv()}
    </div>);
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img className="leftImg" src="gear.gif" height="100px" width="100px"/>
        <img className="rightImg" src="gear.gif" height="100px" width="100px"/>
        <h1 className="App-title">10TH GEAR AUTO DEALER</h1>
      </header>
      {this.mainDiv()}
    </div>);
  }
}



export default App;
