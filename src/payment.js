import React, { Component } from 'react';
import './App.css';

export class Pay extends Component {
  constructor(props) {
    super(props);

    this.insertPayment = this.insertPayment.bind(this);
  }

  insertPayment(event) {
    event.preventDefault();
    {/*
    const data = new FormData(event.target);

     pending insert into database
      fetch('http://localhost/handler/insertInventory.php', {
      method: 'POST',
      body: data
    }).then((response)=>{
      return response.json()
    }).then((res)=>{
      if(res.msg==='ok'){
          console.log(res.msg);
      }

    }).catch((ex)=>{
      console.log(ex)
    });
    */}
  }

  render() {
    return (
      <div className="formSetup">
        <div className="formChild">
              <form id="inventoryForm" onSubmit={this.insertPayment}>
                <table className="formTable">
                  <tbody>
                      <tr>
                        <th className="head" colSpan="5">Payment</th>
                      </tr>
                      <tr>
                        <th colSpan="2">First Name</th>
                        <th>Middle Name</th>
                        <th colSpan="2">Last Name</th>
                      </tr>
                      <tr>
                        <td colSpan="2"><input className="inputs" type="text"  id="fname" name="firstName"  maxLength="50" required pattern="[a-zA-Z]+"/></td>
                        <td><input className="inputs" type="text"  id="mname" name="middleName" required pattern="[a-zA-Z]+" maxLength="1"/></td>
                        <td colSpan="2">< input className="inputs" type="text"  id="lname" name="lastName" required pattern="[a-zA-Z]+" maxLength="50"/></td>
                      </tr>
                      <tr>
                        <th>Street Number</th>
                        <th>Street Name</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                      </tr>
                      <tr>
                        <td><input className="inputs" type="text" id="snumber" name="streetNumber"  required pattern="[0-9]+" maxLength="9"/></td>
                        <td><input className="inputs" type="text" id="saddress" name="streetAddress"  required pattern="[0-9a-zA-Z]+" maxLength="60"/></td>
                        <td><input className="inputs" type="text" id="city" name="city"  required pattern="[0-9a-zA-Z]+" maxLength="20"/></td>
                        <td><input className="inputs" type="text" id="state" name="state" required pattern="[a-zA-Z]+" maxLength="2"/></td>
                        <td><input className="inputs" type="text" id="postal" name="postalCode" required pattern="[0-9]+" maxLength="5"/></td>
                      </tr>
                      <tr>
                        <td colSpan="5"><button className="submitBtn" type="submit" value="Submit">Submit</button></td>
                      </tr>
                    </tbody>
                </table>
              </form>
            </div>
      </div>
    );
  }
}
