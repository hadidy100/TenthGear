import React, {Component} from 'react';
import car from './img/car.svg';
import orders from './img/orders.png';
import cart from './img/cart.png';
import gear from './img/gear.gif';
import './App.css';
import {Pay} from './payment.js';
import {Expense} from './expense.js';
import {About} from './about.js';
import {Report} from './report.js';
import {SalesDesk} from './salesDesk.js';
import {Leads} from './leads.js';
import {Contact} from './contact.js';
import {Inventory} from './inventory.js';
var crypto = require('crypto');

class App extends Component {

  constructor(props) {
    super(props);
    /* call forms */
    this.state = {
      form: {Inventory},
      start: true,
      login: false,
      welcome: false,
      logout: false,
      user: 'davidtv2008',
      pass: 'password',
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
      showBrowse: false,
      startButtonClass: 'but8',
      startButtonText: 'Push to Start',
      statusText: '',
      session: {u: '', p: '', s: ''},
      img: [],
      setBrowse: false,
    };

    this.setExpenseForm = this.setExpenseForm.bind(this);
    this.setInventoryForm = this.setInventoryForm.bind(this);
    this.setPaymentForm = this.setPaymentForm.bind(this);
    this.setAboutForm = this.setAboutForm.bind(this);
    this.setReportForm = this.setReportForm.bind(this);
    this.setCrmForm = this.setCrmForm.bind(this);
    this.setBrowseForm = this.setBrowseForm.bind(this);
    this.setSignin = this.setSignin.bind(this);
    this.setSalesDeskForm = this.setSalesDeskForm.bind(this);
    this.setLeadsForm = this.setLeadsForm.bind(this);
    this.setContactForm = this.setContactForm.bind(this);
    this.getBrowse = this.getBrowse.bind(this);
    this.startButtonClick = this.startButtonClick.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.startMenu = this.startMenu.bind(this);
    this.welcome = this.welcome.bind(this);
    this.logout = this.logout.bind(this);
    this.logoutSet = this.logoutSet.bind(this);
    this.setBrowse = this.setBrowse.bind(this);
  }

  startMenu(){
    return(
      <div>
        <button type="button" className="but8" onClick={this.startButtonClick}>Push to Start</button>
          <a className="crm">
            <img className="crm" alt="" src='img/crmStart.gif'></img>
          </a>
      </div>
    );
  }

  startButtonClick(event){
    this.setState({
      start: false,
      login: true,
      welcome: false,
      logout: false
    });
  }

  loginMenu(){
    return(
      <div>
      <button type="button" className="but9" onClick={this.startButtonClick}></button>
        <label className="status">Login</label>
        <input name="user" type="text" ref="un" className='user' placeholder="username..."></input>
        <input name="pass" type="password" ref="pw" className='pass' placeholder="password..."></input>
        <button type="submit" value="Submit" className='log'>Login</button>
          <a className="crm">
            <img className="crm" alt="" src='img/crmStart2.gif'></img>
          </a>
      </div>
    );
  }

  welcome(){
    return(
      <div>
        <button type="button" className="but1" onClick={this.setContactForm}></button>
        <button type="button" className="but2" onClick={this.setInventoryForm}></button>
        <button type="button" className="but3" onClick={this.setPaymentForm}></button>
        <button type="button" className="but4" onClick={this.setBrowseForm}></button>
        <button type="button" className="but5" onClick={this.setAboutForm}></button>
        <button type="button" className="but6" onClick={this.setSalesDeskForm}></button>
        <button type="button" className="but7" onClick={this.setExpenseForm}></button>
        <button type="button" className="but10" onClick={this.logoutSet}>Welcome Click to Logout</button>
          <a className="crm">
            <img className="crm" alt="" src='img/crmStartLogin.gif'></img>
          </a>
      </div>
    );
  }

  logoutSet(){
    this.setState({
      start: false,
      login: false,
      welcome: false,
      logout: true
    });
  }
  logout(){
    return(
      <div>
        <button type="button" className="but8" onClick={this.startButtonClick}>Push to Start</button>
          <a className="crm">
            <img className="crm" alt="" src='img/crmLogout.gif'></img>
          </a>
      </div>
    );
  }

  checkLogin(event){

    event.preventDefault();

    var encrypt = function (plain_text, encryptionMethod, secret, iv) {
    var encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
    return encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
    };

    var textToEncrypt1 = event.target.user.value;
    var textToEncrypt2 = event.target.pass.value;
    var encryptionMethod = 'AES-256-CBC';
    var secret = "My32charPasswordAndInitVectorStr"; //must be 32 char length
    var iv = secret.substr(0,16);

    var encryptedMessage1 = encrypt(textToEncrypt1, encryptionMethod, secret, iv);
    var encryptedMessage2 = encrypt(textToEncrypt2, encryptionMethod, secret, iv);

    fetch("http://localhost/handler/login.php", {
      method: 'POST',
      headers: new Headers({
         'Content-Type': 'application/x-www-form-urlencoded',
     }),
     body: "user="+encryptedMessage1+"&pass="+encryptedMessage2
   }).then((response)=>{
     return response.json()
   }).then((res)=>{

    if(res.u === encryptedMessage1 && res.p === encryptedMessage2){
      this.setState({
        start: false,
        login: false,
        welcome: true,
        u: res.u,
        p: res.p,
        s: res.se
      });
    }
    else{
      this.setState({
        start: false,
        login: true,
        welcome: false
      });
    }

   }).catch((ex)=>{
     console.log(ex)
   })
 }

  setSignin() {
    this.setState({
      signin: true,
      contact: false,
      browse: false,
      expense: false,
      inventory: false,
      payment: false,
      about: false,
      report: false,
      crm: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false

    });
  }

  setBrowseForm() {

    this.setState({
      browse: true,
      contact: false,
      expense: false,
      inventory: false,
      payment: false,
      about: false,
      report: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
  }

  setContactForm(event) {
    this.setState({
      contact: true,
      browse: false,
      expense: false,
      inventory: false,
      payment: false,
      about: false,
      report: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  setExpenseForm(event) {
    this.setState({
      expense: true,
      contact: false,
      inventory: false,
      payment: false,
      about: false,
      report: false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  setInventoryForm(event) {
    this.setState({
      inventory: true,
      contact: false,
      expense: false,
      payment: false,
      about: false,
      report: false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false

    });
    event.preventDefault();
  }

  inventoryForm() {
    return (
      <div>
        <Inventory />
      </div>);
  }

  setPaymentForm(event) {
    this.setState({
      payment: true,
      contact: false,
      inventory: false,
      expense: false,
      about: false,
      report: false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  setAboutForm() {
    this.setState({
      about: true,
      contact: false,
      payment: false,
      inventory: false,
      expense: false,
      report: false,
      browse: false,
      crm: false,
      signin: false,
      salesDesk: false,
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
  }

  setReportForm(event) {
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
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  setCrmForm(event) {
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
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  setSalesDeskForm(event) {
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
      leads: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  setLeadsForm(event) {
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
      salesDesk: false,
      showBrowse: false,
      setBrowse:false
    });
    event.preventDefault();
  }

  dropMenuLeft() {
    return (<nav className="dropdown">
      <button type="button" onClick={this.setCrmForm} className="myButton" name="prodButton">Main Menu</button>
    </nav>);
  }

  dropMenuRight() {
    return (<nav className="dropdown2">
      <button className="myButton2" name="prodButton">Sales Menu</button>
      <div id="myDropdown2" className="dropdown-content2">

        <a className="icons" onClick={this.setInventoryForm} alt="" href="">
          <img src={car} height="60px" width="100%" alt=""/>
          Inventory
        </a>
        <a className="icons" onClick={this.setExpenseForm} alt="" href="">
          <span>
            <svg height="60px" width="120px" className="svg" viewBox="0 0 20 20">
              <g>
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
              </g>
            </svg>
          </span>
          Expenses
        </a>
        <a className="icons" onClick={this.setPaymentForm} alt="" href="">
          <img alt="" className="center" src={cart} height="50px" width="30px"/>
          Checkout
        </a>
        <a className="icons" onClick={this.setSalesDeskForm} alt="" href="">
          <img className="center" alt="" src={orders} height="50px" width="30px"/>
          Sales Desk
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
    if (this.expense) {
      return (<div id="center" className="centerDiv">
        <Pay/>
      </div>);
    } else {
      return (<div id="center" className="centerDiv">
        <p>nothing clicked</p>
      </div>);
    }
  }

  mainDiv() {
    return (<div className="mainDiv">
      {this.leftDiv()}
      {this.rightDiv()}
    </div>);
  }

  setCrm() {
    return (<div className="reportsDiv">
      <div className="crmBoxed">
        <form onSubmit={this.checkLogin}>
        {this.state.start? this.startMenu(): this.state.login? this.loginMenu(): this.state.welcome? this.welcome(): this.state.logout? this.logout():null}
      </form>
      </div>
    </div>);
  }

  getBrowse() {
    fetch('http://localhost/handler/browseCars.php').then((response) => {
      return response.json()
    }).then((res) => {
      this.setState({
        img: res,
        leads: false,
        contact: false,
        crm: false,
        report: false,
        about: false,
        payment: false,
        inventory: false,
        browse: false,
        expense: false,
        signin: false,
        salesDesk: false,
        showBrowse: false,
        setBrowse:true
      });
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  setBrowse(){
    const listItems = this.state.img.map((car)=>
    <div key={car.id} className="thumbnail-item">
        <img className="thumbnail-image" src={'data:image/jpeg;base64,'+car.img} alt="car" />
        <p>{car.year} {car.color} {car.make} {car.model}</p>
        <p>VIN:{car.vin}</p>
        <p>PLATES:{car.plates}</p>
        <p>MILES:{car.miles}</p>
    </div>
    );

    return(
      <div>
      <input className="searchBar" type="text" placeholder="search..."></input>
      <button className="searchBarBtn">Search</button>
      <div className="centerDiv">
          {listItems}
    </div>
  </div>
    );
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <img className="leftImg" alt="" src={gear} height="100px" width="100px"/>
        <img className="rightImg" alt="" src={gear} height="100px" width="100px"/>
        <h1 className="App-title">10th Gear Auto Dealer</h1>
      </header>
      {this.mainDiv()}
      <div id="center" className="centerDiv">{
          this.state.expense
            ? <Expense/>
            : this.state.inventory
              ? this.inventoryForm()
              : this.state.payment
                ? <Pay/>
                : this.state.about
                  ? <About/>
                  : this.state.report
                    ? <Report/>
                    : this.state.salesDesk
                      ? <SalesDesk/>
                      : this.state.leads
                        ? <Leads/>
                        : this.state.contact
                          ? <Contact/>
                          : this.state.crm
                            ? this.setCrm()
                            : this.state.browse
                              ? this.getBrowse()
                              : this.state.setBrowse
                               ? this.setBrowse()
                                :null
        }
        {/* this.state.signin ? this.login() */}
      </div>
      {/* {this.state.cars.map(this.renderCars)} */}
    </div>);
  }
}

export default App;
