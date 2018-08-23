import React, {Component} from 'react';
import car from './img/car.svg';
import orders from './img/orders.png';
import cart from './img/cart.png';
import gear from './img/gear.gif';
import './App.css';
import {Pay} from './payment.js';
import {Expense} from './expense.js';
import {About} from './about.js';
import {SalesDesk} from './salesDesk.js';
import {Leads} from './leads.js';
import {Contact} from './contact.js';
import {Inventory} from './inventory.js';
var crypto = require('crypto');


class App extends Component {
  constructor(props) {
    super(props);
    this.setExpenseForm = this.setExpenseForm.bind(this);
    this.setInventoryForm = this.setInventoryForm.bind(this);
    this.setPaymentForm = this.setPaymentForm.bind(this);
    this.setAboutForm = this.setAboutForm.bind(this);
    this.setCrmForm = this.setCrmForm.bind(this);
    this.setBrowseForm = this.setBrowseForm.bind(this);
    this.setSalesDeskForm = this.setSalesDeskForm.bind(this);
    this.setLeadsForm = this.setLeadsForm.bind(this);
    this.setContactForm = this.setContactForm.bind(this);
    this.getBrowse = this.getBrowse.bind(this);
    this.setBrowse = this.setBrowse.bind(this);
    this.login = this.login.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    this.welcome = this.welcome.bind(this);
    this.logout = this.logout.bind(this);
    this.carSelection = this.carSelection.bind(this);
    this.searchBar = this.searchBar.bind(this);
    this.searchCars = this.searchCars.bind(this);

    this.state = {
      username: 'david',
      password: 'password',
      user: '',
      pass: '',
      session: false,
      img: [],
      reply: 'bad',
      form: this.login(),
    };
  }


  checkLogin(event){

    event.preventDefault();

    {/*temporary disable user login from database
    var encrypt = function (plain_text, encryptionMethod, secret, iv) {
    var encryptor = crypto.createCipheriv(encryptionMethod, secret, iv);
    return encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
    };

    var textToEncrypt1 = event.target.user.value;
    var textToEncrypt2 = event.target.pass.value;
    var returnUser = 'returnUser';
    var returnPass = 'returnPass';
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
        user: res.u,
        pass: res.p,
        session: true,
        form: this.welcome(),
      });
      console.log(this.state.user);
      console.log(this.state.pass);

    }

    else{
      console.log('bad id and pass');
    }
   }).catch((ex)=>{
     console.log(ex);
   })
   */}

   if(event.target.user.value===this.state.username && event.target.pass.value===this.state.password){
     this.setState({
       user: event.target.user.value,
       pass: event.target.pass.value,
       session: true,
       form: this.welcome(),
     });
   }
   else{
     document.getElementById('status').innerHTML = 'Try Again!';
   }
 }

 logout(){
   this.setState({
     session: false,
     form: this.login(),
   });
 }

  login(){
    return(
      <div className="reportsDiv">
      <div className="crmBoxed">
        <form onSubmit={this.checkLogin}>
          <div className="button9">
              <div id="status" className="status">Login</div>
              <div className="user"><input name="user" type="text" placeholder="username..."></input></div>
              <div className="pass"><input name="pass" type="password" placeholder="password..."></input></div>
              <div><button type="submit" className="log" value="Submit">Login</button></div>
          </div>
        </form>
    </div>
  </div>
    );
  }

  welcome(){
    return(
      <div className="reportsDiv">
      <div className="crmBoxed">
        <div class="button1" onClick={this.setContactForm}>
        </div>
        <div class="button2" onClick={this.setInventoryForm}>
        </div>
        <div class="button3" onClick={this.setPaymentForm}>
        </div>
        <div class="button4" onClick={this.setBrowseForm}>
        </div>
        <div class="button5" onClick={this.setAboutForm}>
        </div>
        <div class="button6" onClick={this.setSalesDeskForm}>
        </div>
        <div class="button7" onClick={this.setExpenseForm}>
        </div>
        <div class="button10" onClick={this.logout}>
        </div>

    </div>
  </div>);
}


  searchBar(){
    return(
      <div className="searchDiv">
        <form onSubmit={this.searchCars}>
        <input name="search" className="searchBar" type="text" placeholder="vin/make/model..."></input>
        <button type="submit" className="searchBarBtn">Search Vehicles</button>
        </form>
      </div>
    );
  }

  searchCars(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://localhost/handler/browseCars.php",{
      method: 'POST',
      body: data
    }).then((response) => {
      return response.json()
    }).then((res) => {
      this.setState({
        img: res,
        reply: res.res,
        browse: false,
      });
      this.setState({
        form: this.setBrowse(),
      });
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })

  }

  setBrowseForm() {
    this.getBrowse();
  }

  setContactForm(event) {
    this.setState({
      form:<Contact/>,
    });
    event.preventDefault();
  }

  setExpenseForm(event) {
    this.state.session? this.setState({form: <Expense/>}):this.setState({form:this.login()});
    event.preventDefault();
  }

  setInventoryForm(event) {
    this.state.session? this.setState({form: <Inventory/>}):this.setState({form:this.login()});
    event.preventDefault();
  }

  setPaymentForm(event) {
    this.state.session? this.setState({form: <Pay/>}):this.setState({form:this.login()});
    event.preventDefault();
  }

  setAboutForm() {
    this.setState({
      form:<About/>,
    });
  }

  setCrmForm(event) {
    this.state.session? this.setState({form: this.welcome()}):this.setState({form:this.login()});
  }

  setSalesDeskForm(event) {
    this.state.session? this.setState({form: <SalesDesk/>}):this.setState({form:this.login()});
    event.preventDefault();
  }

  setLeadsForm(event) {
    this.setState({
      form:<Leads/>,
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
          {this.startMenu()}
        {/*{this.state.start? this.startMenu(): this.state.login? this.loginMenu(): this.state.welcome? this.welcome(): this.state.logout? this.logout():null}*/}
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
        reply: res.res,
        browse: false,
      });
      this.setState({
        form: this.setBrowse(),
      });
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  setBrowse(){
    if(this.state.reply==='bad'){
      return(
        <div>
          <p>No Search Results!</p>
        </div>
      );
    }else{
    const listItems = this.state.img.map((car)=>
    <div key={car.id} className="thumbnail-item">
        <img onClick={this.carSelection} id={car.id} className="thumbnail-image" src={'data:image/jpeg;base64,'+car.img} alt="car" />
        <p>{car.year} {car.color} {car.make} {car.model}</p>
        <p>VIN:{car.vin}</p>
        <p>PLATES:{car.plates}</p>
        <p>MILES:{car.miles}</p>
        <p>COST: ${car.purchasePrice}</p>
    </div>
    );

    return(
      <div>
        <div className="centerDiv">
          {listItems}
    </div>
  </div>
    );
  }
  }

  carSelection(event){
    event.preventDefault();
    console.log(event.target);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">10th Gear Auto Dealer</h1>
        </header>
        {this.mainDiv()}
        <div id="center" className="centerDiv">
          {this.state.session?this.searchBar():null}
          {this.state.form}
      </div>
    </div>);
  }
}

export default App;
