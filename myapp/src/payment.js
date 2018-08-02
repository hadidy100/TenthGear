import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Pay extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial;\n  font-size: 17px;\n  padding: 8px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  margin: 0 -16px;\n}\n\n.col-25 {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n}\n\n.col-50 {\n  -ms-flex: 50%; /* IE10 */\n  flex: 50%;\n}\n\n.col-75 {\n  -ms-flex: 75%; /* IE10 */\n  flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n  padding: 0 16px;\n}\n\n.container {\n  background-color: #f2f2f2;\n  padding: 5px 20px 15px 20px;\n  border: 1px solid lightgrey;\n  border-radius: 3px;\n}\n\ninput[type=text] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nlabel {\n  margin-bottom: 10px;\n  display: block;\n}\n\n.icon-container {\n  margin-bottom: 20px;\n  padding: 7px 0;\n  font-size: 24px;\n}\n\n.btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px;\n  margin: 10px 0;\n  border: none;\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.btn:hover {\n  background-color: #45a049;\n}\n\na {\n  color: #2196F3;\n}\n\nhr {\n  border: 1px solid lightgrey;\n}\n\nspan.price {\n  float: right;\n  color: grey;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the \"cart\" column go on top) */\n@media (max-width: 800px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n" }} />
        <h2>Payment Form</h2>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-50">
                    <h3>Billing Address</h3>
                    <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                    <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                    <input type="text" id="email" name="email" placeholder="john@example.com" />
                    <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                    <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                    <label htmlFor="city"><i className="fa fa-institution" /> City</label>
                    <input type="text" id="city" name="city" placeholder="New York" />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder="NY" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder={10001} />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label htmlFor="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{color: 'navy'}} />
                      <i className="fa fa-cc-amex" style={{color: 'blue'}} />
                      <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
                      <i className="fa fa-cc-discover" style={{color: 'orange'}} />
                    </div>
                    <label htmlFor="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                    <label htmlFor="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                    <label htmlFor="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder={2018} />
                      </div>
                      <div className="col-50">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder={352} />
                      </div>
                    </div>
                  </div>
                </div>
                <label>
                  <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
                </label>
                <input type="submit" defaultValue="Continue to checkout" className="btn" />
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container">
              <h4>Cart <span className="price" style={{color: 'black'}}><i className="fa fa-shopping-cart" /> <b>4</b></span></h4>
              <p><a href="#">Product 1</a> <span className="price">$15</span></p>
              <p><a href="#">Product 2</a> <span className="price">$5</span></p>
              <p><a href="#">Product 3</a> <span className="price">$8</span></p>
              <p><a href="#">Product 4</a> <span className="price">$2</span></p>
              <hr />
              <p>Total <span className="price" style={{color: 'black'}}><b>$30</b></span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
