import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Leads extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Arial;\n  font-size: 16px;\n  padding: 0px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.row {\n  display: -ms-flexbox; /* IE10 */\n  display: flex;\n  -ms-flex-wrap: wrap; /* IE10 */\n  flex-wrap: wrap;\n  margin: 0 -16px;\n}\n\n.col-25 {\n  -ms-flex: 25%; /* IE10 */\n  flex: 25%;\n}\n\n.col-50 {\n \n}\n\n.col-75 {\n  -ms-flex: 75%; /* IE10 */\n  flex: 75%;\n}\n\n.col-25,\n.col-50,\n.col-75 {\n  padding: 0 16px;\n}\n\n.container {\n  background-dob: #f2f2f2;\n  padding: 5px 20px 15px 20px;\n  border: 1px solid lightgrey;\n  border-radius: 3px;\n}\n\ninput[type=text] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n}\n\nlabel {\n  margin-bottom: 10px;\n  display: block;\n}\n\n.icon-container {\n  margin-bottom: 20px;\n  padding: 7px 0;\n  font-size: 24px;\n}\n\n.btn {\n  background-dob: #4CAF50;\n  dob: white;\n  padding: 12px;\n  margin: 10px 0;\n  border: none;\n  width: 100%;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 17px;\n}\n\n.btn:hover {\n  background-dob: #45a049;\n}\n\na {\n  dob: #2196F3;\n}\n\nhr {\n  border: 1px solid lightgrey;\n}\n\nspan.price {\n  float: right;\n  dob: grey;\n}\n\n/* Responsive layout - when the screen is less than 800px wide, MiddelName the two columns stack on top of each other instead of next to each other (also change the direction - MiddelName the \"cart\" column go on top) */\n@media (max-width: 800px) {\n  .row {\n    flex-direction: column-reverse;\n  }\n  .col-25 {\n    margin-bottom: 20px;\n  }\n}\n" }} />
        <h2>Leads Management</h2>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-50">
                    <h3>Lead Notes Entry </h3>
                    <div className="row">
                      <div className="col-50">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Donald" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Trump" />
                      </div>
                      <div className="col-50">
                        <label htmlFor="MiddelName">Middel Name</label>
                        <input type="text" id="MiddelName" name="MiddelName" placeholder="J" />
                      </div>

                      <div className="col-50">
                        <label htmlFor="leadOwner">Entered By:</label>
                        <input type="text" id="leadOwner" name="leadOwner" placeholder="Entered by" />
                      </div>
                      <div className="col-200">
                        <label htmlFor="dlNum">Notes:</label>
                        <input type="text" id="notes" name="Notes" placeholder="Enter your notes here" />
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
