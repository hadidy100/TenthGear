import React, { Component } from 'react';
import logo from './logo.svg';

export class Inventory extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial;\n  font-size: 16px;\n  padding: 0px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  margin: 0 -16px;\n}\n\n.col-25 {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n}\n\n.col-50 {\n \n}\n\n.col-75 {\n  -ms-flex: 75%; /* IE10 */\n  flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n  padding: 0 16px;\n}\n\n.container {\n  background-color: #f2f2f2;\n  padding: 5px 20px 15px 20px;\n  border: 1px solid lightgrey;\n  border-radius: 3px;\n}\n\ninput[type=text] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nlabel {\n  margin-bottom: 10px;\n  display: block;\n}\n\n.icon-container {\n  margin-bottom: 20px;\n  padding: 7px 0;\n  font-size: 24px;\n}\n\n.btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px;\n  margin: 10px 0;\n  border: none;\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.btn:hover {\n  background-color: #45a049;\n}\n\na {\n  color: #2196F3;\n}\n\nhr {\n  border: 1px solid lightgrey;\n}\n\nspan.price {\n  float: right;\n  color: grey;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other (also change the direction - make the \"cart\" column go on top) */\n@media (max-width: 800px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n" }} />
        <h2>Customer Entry Form</h2>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-50">
                    <h3>Customer Entry</h3>
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="vinNum">First Name</label>
                        <input type="text" id="vinNum" name="vinNum" placeholder="12345678" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" name="year" placeholder="2018" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="make">Make</label>
                        <input type="text" id="make" name="make" placeholder="Honda" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="model">Model</label>
                        <input type="text" id="model" name="model" placeholder="Accord" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="color">Color</label>
                        <input type="text" id="color" name="color" placeholder="Red" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="miles">Milage</label>
                        <input type="text" id="miles" name="miles" placeholder="100,000" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="dates">Dates</label>
                        <input type="text" id="dates" name="dates" placeholder="JUL-29-2018" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="purPrice">Purchase Price</label>
                        <input type="text" id="purPrice" name="purPrice" placeholder="$20,000" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="datePur">Date Purchased</label>
                        <input type="text" id="datePur" name="datePur" placeholder="JAN-01-2016" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="source">Source</label>
                        <input type="text" id="source" name="source" placeholder="ABC Aution" />
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" defaultValue="Submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
