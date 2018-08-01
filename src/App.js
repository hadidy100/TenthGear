import React, {Component} from 'react';
import logo from './logo.svg';
import car from './car.svg';
import orders from './orders.png';
import about from './about.png';
import crm from './crm.png';
import car1 from './cars/car1.jpg';
import car2 from './cars/car2.jpg';
import car3 from './cars/car3.jpg';
import cart from './cart.png'
import background from './cars/background.jpg';
import browse from './browse.png';
import reports from './reports.png';
import './App.css';
import './about-us.css';
import {Pay} from './payment.js';
import {Inventory} from './inventory.js';
import {Expense} from './expense.js';
import {About} from './about.js';
import {Report} from './report.js';
import {CustomerRelations} from './crm.js';

class App extends Component {

  constructor(props) {
      super(props);
      /*call forms*/
      this.state={
        expense: false,
        inventory: false,
        payment: false,
        about: false,
        report: false,
        crm: false
      };
      this.setExpenseForm = this.setExpenseForm.bind(this);
      this.setInventoryForm = this.setInventoryForm.bind(this);
      this.setPaymentForm = this.setPaymentForm.bind(this);
      this.setAboutForm = this.setAboutForm.bind(this);
      this.setReportForm = this.setReportForm.bind(this);
      this.setCrmForm = this.setCrmForm.bind(this);
    }

  setExpenseForm(){
    console.log('this is: ', this);
    this.setState({
      expense: true,
      inventory: false,
      payment: false,
      about: false,
      report:false,
      crm: false
    });
  }

  setInventoryForm(){
    console.log('this is: ', this);
    this.setState({
      inventory: true,
      expense: false,
      payment: false,
      about: false,
      report:false,
      crm: false
    });
  }

  setPaymentForm(){
    console.log('this is: ', this);
    this.setState({
      payment: true,
      inventory: false,
      expense: false,
      about: false,
      report:false,
      crm: false
    });
  }

  setAboutForm(){
    console.log('this is: ',this);
    this.setState({
      about: true,
      payment: false,
      inventory: false,
      expense: false,
      report:false,
      crm: false
    });
  }

  setReportForm(){
    console.log('this is: ',this);
    this.setState({
      report: true,
      about: false,
      payment: false,
      inventory: false,
      expense: false,
      crm: false
    });
  }

  setCrmForm(){
    console.log('this is: ',this);
    this.setState({
      crm: true,
      report: false,
      about: false,
      payment: false,
      inventory: false,
      expense: false
    });
  }

  dropMenuLeft() {
    return (
      <nav className="dropdown">
      <button className="myButton" name="prodButton">Main Menu</button>
      <div id="myDropdown" className="dropdown-content">
        <a className="icons" onClick={this.addData} href="#">
          <img src={browse} height="80px" width="80px" />
          Browse
        </a>
        <a className="icons" onClick={this.setCrmForm} href="#">
          <img src={crm} height="60px" width="60px" />
          CRM
        </a>
        <a className="icons" onClick={this.setReportForm} href="#">
          <img src={reports} height="60px" width="60px" />
          Reports
        </a>

        <a className="icons" onClick={this.setAboutForm} href="#">
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
        <a className="icons" onClick={this.setInventoryForm} href="#">
          <img src={car} height="60px" width="100%" />
          Inventory
        </a>
        <a className="icons" onClick={this.setExpenseForm} href="#">
          <span>
            <svg height="60px" width="120px" className="svg" viewBox="0 0 20 20">
              <g>
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
              </g>
            </svg>
          </span>
          Expenses
        </a>
        <a className="icons" onClick={this.setPaymentForm} href="#">
          <img className="center" src={cart} height="50px" width="30px" />
          Checkout
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
    if(this.expense){
      return(
        <div id="center" className="centerDiv">
          <Pay />
        </div>);
    }else{
      return(
        <div id="center" className="centerDiv">
        <p>nothing clicked</p>
        </div>
      );
    }
  }

  mainDiv() {
    return (<div className="mainDiv">
      {this.leftDiv()}
      {this.rightDiv()}
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
      <div id="center" className="centerDiv">{this.state.expense ? <Expense /> : this.state.inventory ? <Inventory /> : this.state.payment ? <Pay /> : this.state.about ? <About /> : this.state.report ? <Report /> : this.state.crm ? <CustomerRelations /> : null}</div>
      <div><p></p></div>
    </div>);
  }
}

export default App;
