import React, {Component} from 'react';
import logo from './logo.svg';
import car from './car.svg';
import orders from './orders.png';
import about from './about.png';
import crm from './crm.png';
import cart from './cart.png';
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
import crmIcon from './crm/crm2.gif';

class App extends Component {



  constructor(props) {
      super(props);
      /*call forms*/
      this.state={
        signin: true,
        login: false,
        expense: false,
        inventory: false,
        payment: false,
        about: false,
        report: false,
        crm: false,
        browse: false,
        cars: []

      };
      this.setExpenseForm = this.setExpenseForm.bind(this);
      this.setInventoryForm = this.setInventoryForm.bind(this);
      this.setPaymentForm = this.setPaymentForm.bind(this);
      this.setAboutForm = this.setAboutForm.bind(this);
      this.setReportForm = this.setReportForm.bind(this);
      this.setCrmForm = this.setCrmForm.bind(this);
      this.setBrowseForm = this.setBrowseForm.bind(this);
      this.setSignin = this.setSignin.bind(this);
    }

    componentDidMount(){
      this.getCars();
    }

    getCars = () =>{
      fetch('http://localhost:4000/cars')
      .then(response=> response.json())
      .then(response=>this.setState({cars:response.data}));
    }

    renderCars = ({ID,VNDRID,image,YEAR,MAKE,MODEL,MILES,VIN,COLOR,PLATE,COST}) =>
    <div className="carDiv" key={ID}>
            <img heigth="150px" width="150px" className="caritos" src={"cars/car"+ID+".png"} />
            <p>{VNDRID} | {YEAR} | {MAKE} | {MODEL} | {MILES} | {VIN} | {COLOR} | {PLATE} | ${COST}</p>
    </div>

  setSignin(){
    this.setState({
    signin: true,
    browse: false,
    expense: false,
    inventory: false,
    payment: false,
    about: false,
    report:false,
    crm: false
  });
  }

  setBrowseForm(){

    this.setState({
      browse: true,
      expense: false,
      inventory: false,
      payment: false,
      about: false,
      report:false,
      crm: false,
      signin: false
    });
  }

  setExpenseForm(){
    console.log('this is: ', this);
    this.setState({
      expense: true,
      inventory: false,
      payment: false,
      about: false,
      report:false,
      browse: false,
      crm: false,
      signin: false
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
      browse: false,
      crm: false,
      signin: false
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
      browse: false,
      crm: false,
      signin: false
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
      browse: false,
      crm: false,
      signin: false
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
      browse: false,
      crm: false,
      signin: false
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
      browse: false,
      expense: false,
      signin: false
    });
  }

  dropMenuLeft() {
    return (
      <nav className="dropdown">
      <button type="button" onClick={this.setCrmForm} className="myButton" name="prodButton">Main Menu</button>
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

  setCrm(){
    return(
      <div className="reportsDiv">
        <h1></h1>
        <div className="crmBoxed">
          <button type="button" className="but1"></button>
          <button type="button" className="but2" onClick={this.setInventoryForm}></button>
          <button type="button" className="but3" onClick={this.setPaymentForm}></button>
          <button type="button" className="but4" onClick={this.setBrowseForm}></button>
          <button type="button" className="but5" onClick={this.setAboutForm}></button>
          <button type="button" className="but6" onClick={this.setAboutForm}></button>
          <button type="button" className="but7" onClick={this.setExpenseForm}></button>
        <a className="crm" ><img className="crm" src={crmIcon}></img></a>
        </div>
      </div>
    );
  }

  getBrowse(){
    if(this.state.browse){
      return(<div className="scroll">
              <h2>Vehicles</h2>
              {this.state.cars.map(this.renderCars)}
            </div>);
    }
    else{
      return(
        <div>
      </div>
      );
    }
  }

  login() {
   return (<div className="form-inline">
     <h2>Sign In</h2>
     <div className="form-group">
       <input className="form-control" type="text" placeholder="email" onChange={event => this.setState({email: event.target.value})}/>
       <br/>
       <br/>
       <input className="form-control" type="password" placeholder="password" onChange={event => this.setState({password: event.target.value})}/>
       <button className="btn btn-primary" type="button">
         Sign Up</button>
     </div>
   </div>);
 }

  render() {
    const {products} = this.state;
    return (<div className="App">
      <header className="App-header">
        <img className="leftImg" src="gear.gif" height="100px" width="100px"/>
        <img className="rightImg" src="gear.gif" height="100px" width="100px"/>
        <h1 className="App-title">10th Gear Auto Dealer</h1>
      </header>
      {this.mainDiv()}
      <div id="center" className="centerDiv">{
          this.state.expense ? <Expense /> :
          this.state.inventory ? <Inventory /> :
          this.state.payment ? <Pay /> :
          this.state.about ? <About /> :
          this.state.report ? <Report /> :
          this.state.crm ? this.setCrm() : null}
          {/*this.state.signin ? this.login()*/}

      {this.getBrowse()}
      </div>
      {/*{this.state.cars.map(this.renderCars)}*/}
    </div>);
  }
}

export default App;
