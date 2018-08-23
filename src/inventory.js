import React, { Component } from 'react';
import './App.css';

export class Inventory extends Component {
  constructor(props) {
    super(props);

    this.insertInventory = this.insertInventory.bind(this);
  }

  insertInventory(event) {
    event.preventDefault();
    const data = new FormData(event.target);

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
    document.getElementById("inventoryForm").reset();
  }

  render() {
    return (
      <div className="formSetup">
        <div className="formChild">
              <form id="inventoryForm" onSubmit={this.insertInventory}>
                <table className="formTable">
                  <tbody>
                      <tr>
                        <th className="head" colSpan="3">Inventory Entry</th>
                      </tr>
                      <tr>
                        <th>Vin Number</th>
                        <th>Plate</th>
                        <th>Year</th>
                      </tr>
                      <tr>
                        <td><input className="inputs" type="text" ref="vin" id="vin" name="vin" placeholder="VIN..." size="17" maxLength="17" required pattern="[0-9A-HJ-NPR-Z]{17}"/></td>
                        <td><input className="inputs" type="text" ref="plates" id="plates" name="plates" placeholder="3LKJ490" required pattern="[0-9\-A-Z\s]+" maxLength="8"/></td>
                        <td><input className="inputs" type="text" ref="year" id="year" name="year" placeholder="2018" required pattern="[0-9]{4}" maxLength="4" size="4"/></td>
                      </tr>
                      <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                      </tr>
                      <tr>
                        <td><input className="inputs" type="text" ref="make" id="make" name="make" placeholder="Honda" required pattern="[0-9a-zA-Z]+" maxLength="50"/></td>
                        <td><input className="inputs" type="text" ref="model" id="model" name="model" placeholder="Accord" required pattern="[0-9a-zA-Z\s+-_]+" maxLength="50"/></td>
                        <td><input className="inputs" type="text" ref="color" id="color" name="color" placeholder="Red" required pattern="[a-zA-Z]+" maxLength="20"/></td>
                      </tr>
                      <tr>
                        <th>Milage</th>
                        <th>Purchase Price</th>
                        <th>Date Purchased</th>
                      </tr>
                      <tr>
                        <td><input className="inputs" type="text" ref="miles" id="miles" name="miles" placeholder="0" required pattern="[0-9]+" maxLength="8"/></td>
                        <td><input className="inputs" type="text" ref="purPrice" id="purPrice" name="purchasePrice" placeholder="20000" required pattern="[0-9]+[.]?[0-9]?[0-9]?" maxLength="9"/></td>
                        <td><input className="inputs" type="text" ref="datePur" id="datePur" name="datePurchased" placeholder="2018-08-08" required pattern="[0-9]{4}[-/]([0][1-9]|[1][0-2])[-/][0-3][0-9]" maxLength="10"/></td>
                      </tr>
                      <tr>
                        <th>Vendor</th>
                        <th>Vehicle Image</th>
                      </tr>
                      <tr>
                        <td><select className="inputs" ref="source" id="source" name="source" required="required">
                          <option value="1">ABS AUCTION</option>
                          <option value="2">CDE AUCTION</option>
                          <option value="3">DED AUCTION</option>
                          <option value="4">DES AUCTION</option>
                          <option value="5">FFE AUCTION</option>
                        </select>
                        </td>
                        <td><input className="inputs" type="file" ref="img" id="img" name="img" required="required"/></td>
                      </tr>
                      <tr>
                        <td colSpan="3"><button className="submitBtn" type="submit" value="Submit">Submit</button></td>
                      </tr>
                    </tbody>
                </table>
              </form>
            </div>
      </div>
    );
  }
}
