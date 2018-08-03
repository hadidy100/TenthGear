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
import {Expense} from './expense.js';
import {About} from './about.js';
import {Report} from './report.js';
import crmIcon from './crm/crm2.gif';
import {SalesDesk} from './salesDesk.js';
import {Leads} from './leads.js';
import {Contact} from './contact.js';

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
        salesDesk: false,
        leads: false,
        contact: false,
        cars: [],
        value: '',
        vinNum: '',
        year: '',
        make: '',
        model: '',
        color: '',
        miles: '',
        dates: '',
        purPrice: '',
        datePur: '',
        source: ''
      };
      this.setExpenseForm = this.setExpenseForm.bind(this);
      this.setInventoryForm = this.setInventoryForm.bind(this);
      this.setPaymentForm = this.setPaymentForm.bind(this);
      this.setAboutForm = this.setAboutForm.bind(this);
      this.setReportForm = this.setReportForm.bind(this);
      this.setCrmForm = this.setCrmForm.bind(this);
      this.setBrowseForm = this.setBrowseForm.bind(this);
      this.setSignin = this.setSignin.bind(this);
      this.addInventory = this.addInventory.bind(this);
      this.setSalesDeskForm = this.setSalesDeskForm.bind(this);
      this.setLeadsForm = this.setLeadsForm.bind(this);
      this.setContactForm = this.setContactForm.bind(this);

    }

    addInventory(event){
      event.preventDefault();
      this.setInventory();
    }

    componentDidMount(){
      this.getCars();
    }

    getCars = () =>{
      fetch('http://localhost:4000/cars')
      .then(response=> response.json())
      .then(response=>this.setState({cars:response.data}));
    }

    setInventory = () =>{
      console.log(this.refs.vinNum.value);
      console.log(this.refs.year.value);
      console.log(this.refs.make.value);
      console.log(this.refs.model.value);
      console.log(this.refs.color.value);
      console.log(this.refs.miles.value);
      console.log(this.refs.dates.value);
      console.log(this.refs.purPrice.value);
      console.log(this.refs.datePur.value);
      console.log(this.refs.source.value);
      {/*fetch('http://localhost:4000/setInventory/1:'+
      this.refs.year.value,
      this.refs.make.value,
      this.refs.model.value,
      this.refs.miles.value,
      this.refs.vinNum.value,
      this.refs.color.value,
      this.refs.purPrice.value);*/}
    }

    renderCars = ({ID,VNDRID,image,YEAR,MAKE,MODEL,MILES,VIN,COLOR,PLATE,COST}) =>
    <div className="carDiv" key={ID}>
            <img heigth="150px" width="150px" className="caritos" src={"cars/car"+ID+".png"} />
            <p>{VNDRID} | {YEAR} | {MAKE} | {MODEL} | {MILES} | {VIN} | {COLOR} | {PLATE} | ${COST}</p>
    </div>

    setSignin(){
      this.setState({
      signin: true,
      contact: false,
      browse: false,
      expense: false,
      inventory: false,
      payment: false,
      about: false,
      report:false,
      crm: false,
      salesDesk: false,
      leads: false

    });
    }

    setBrowseForm(){

      this.setState({
        browse: true,
        contact: false,
        expense: false,
        inventory: false,
        payment: false,
        about: false,
        report:false,
        crm: false,
        signin: false,
        salesDesk: false,
        leads: false

      });
    }

    setContactForm(){
      console.log('this is: ', this);
        this.setState({
        contact: true,
        browse: false,
        expense: false,
        inventory: false,
        payment: false,
        about: false,
        report:false,
        crm: false,
        signin: false,
        salesDesk: false,
        leads: false
      });
    }

    setExpenseForm(){
      console.log('this is: ', this);
      this.setState({
        expense: true,
        contact: false,
        inventory: false,
        payment: false,
        about: false,
        report:false,
        browse: false,
        crm: false,
        signin: false,
        salesDesk: false,
        leads: false

      });
    }

    setInventoryForm(){
      console.log('this is: ', this);
      this.setState({
        inventory: true,
        contact: false,
        expense: false,
        payment: false,
        about: false,
        report:false,
        browse: false,
        crm: false,
        signin: false,
        salesDesk: false,
        leads: false

      });
    }

  inventoryForm(){
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial;\n  font-size: 16px;\n  padding: 0px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  margin: 0 -16px;\n}\n\n.col-25 {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n}\n\n.col-50 {\n \n}\n\n.col-75 {\n  -ms-flex: 75%; /* IE10 */\n  flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n  padding: 0 16px;\n}\n\n.container {\n  background-color: #f2f2f2;\n  padding: 5px 20px 15px 20px;\n  border: 1px solid lightgrey;\n  border-radius: 3px;\n}\n\ninput[type=text] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nlabel {\n  margin-bottom: 10px;\n  display: block;\n}\n\n.icon-container {\n  margin-bottom: 20px;\n  padding: 7px 0;\n  font-size: 24px;\n}\n\n.btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px;\n  margin: 10px 0;\n  border: none;\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.btn:hover {\n  background-color: #45a049;\n}\n\na {\n  color: #2196F3;\n}\n\nhr {\n  border: 1px solid lightgrey;\n}\n\nspan.price {\n  float: right;\n  color: grey;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the \"cart\" column go on top) */\n@media (max-width: 800px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n" }} />
        <h2>Inventory Entry Form</h2>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form onSubmit={this.addInventory.bind(this)}>
                <div className="row">
                  <div className="col-50">
                    <h3>Inventory Entry</h3>
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="vinNum">Vin Number</label>
                        <input type="text" ref="vinNum" id="vinNum" name="vinNum" placeholder="12345678" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="year">Year</label>
                        <input type="text" ref="year" id="year" name="year" placeholder="2018" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="make">Make</label>
                        <input type="text" ref="make" id="make" name="make" placeholder="Honda" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="model">Model</label>
                        <input type="text" ref="model" id="model" name="model" placeholder="Accord" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="color">Color</label>
                        <input type="text" ref="color" id="color" name="color" placeholder="Red" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="miles">Milage</label>
                        <input type="text" ref="miles" id="miles" name="miles" placeholder="100,000" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="dates">Dates</label>
                        <input type="text" ref="dates" id="dates" name="dates" placeholder="JUL-29-2018" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="purPrice">Purchase Price</label>
                        <input type="text" ref="purPrice" id="purPrice" name="purPrice" placeholder="$20,000" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="datePur">Date Purchased</label>
                        <input type="text" ref="datePur" id="datePur" name="datePur" placeholder="JAN-01-2016" required/>
                      </div>
                      <div className="col-50">
                        <label htmlFor="source">Source</label>
                        <input type="text" ref="source" id="source" name="source" placeholder="ABC Aution" required/>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" value="Submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>);
  }

  setPaymentForm(){
    console.log('this is: ', this);
    this.setState({
      payment: true,
      contact: false,
      inventory: false,
      expense: false,
      about: false,
      report:false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false

    });
  }

  setAboutForm(){
    console.log('this is: ',this);
    this.setState({
      about: true,
      contact: false,
      payment: false,
      inventory: false,
      expense: false,
      report:false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false

    });
  }

  setReportForm(){
    console.log('this is: ',this);
    this.setState({
      report: true,
      contact: false,
      about: false,
      payment: false,
      inventory: false,
      expense: false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false

    });
  }

  setCrmForm(){
    console.log('this is: ',this);
    this.setState({
      crm: true,
      contact: false,
      report: false,
      about: false,
      payment: false,
      inventory: false,
      browse: false,
      expense: false,
      signin: false,
      salesDesk: false,
      leads: false
    });
  }

  setSalesDeskForm(){
    console.log('this is: ',this);
    this.setState({
      salesDesk: true,
      contact: false,
      crm: false,
      report: false,
      about: false,
      payment: false,
      inventory: false,
      browse: false,
      expense: false,
      signin: false,
      leads: false
    });
  }

  setLeadsForm(){
    console.log('this is: ',this);
    this.setState({
      leads: true,
      contact: false,
      crm: false,
      report: false,
      about: false,
      payment: false,
      inventory: false,
      browse: false,
      expense: false,
      signin: false,
      salesDesk: false
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
        <a className="icons" onClick={this.setSalesDeskForm} href="#">
     <img className="center" src={orders} height="50px" width="30px" />
     Sales Desk
   </a>
     <a className="icons" onClick={this.setLeadsForm} href="#">
    <img className="center" src={reports} height="50px" width="30px" />
    Leads
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
          {/*<button type="button" className="but2" onClick={this.setInventoryForm}></button>*/}

          <button type="button" className="but1" onClick={this.setContactForm}></button>
          <button type="button" className="but2" onClick={this.setInventoryForm}></button>
          <button type="button" className="but3" onClick={this.setPaymentForm}></button>
          <button type="button" className="but4" onClick={this.setBrowseForm}></button>
          <button type="button" className="but5" onClick={this.setAboutForm}></button>
          <button type="button" className="but6" onClick={this.setSalesDeskForm}></button>
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
          this.state.inventory ? this.inventoryForm() :
          this.state.payment ? <Pay /> :
          this.state.about ? <About /> :
          this.state.report ? <Report /> :
          this.state.salesDesk ? <SalesDesk /> :
          this.state.leads ? <Leads /> :
          this.state.contact ? <Contact /> :
          this.state.crm ? this.setCrm() : null}
          {/*this.state.signin ? this.login()*/}

      {this.getBrowse()}
      </div>
      {/*{this.state.cars.map(this.renderCars)}*/}
    </div>);
  }
}

export default App;
