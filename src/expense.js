import React, { Component } from 'react';
import './App.css';

export class Expense extends Component {
  constructor(props) {
    super(props);

    this.insertExpense = this.insertExpense.bind(this);
  }

  insertExpense(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost/handler/insertExpense.php', {
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
  }

  render() {
    return (
      <div className="formSetup">
        <div className="formChild">
              <form id="inventoryForm" onSubmit={this.insertExpense}>
                <table className="formTable">
                  <tbody>
                      <tr>
                        <th className="head" colSpan="5">Expense Entry</th>
                      </tr>
                      <tr>
                        <th>Vendor</th>
                        <th>Comment</th>
                        <th>Cost</th>
                        <th>Date</th>
                        <th>VIN ID</th>
                      </tr>
                      <tr>
                        <td>
                          <select className="inputs" ref="source" id="source" name="source" required="required">
                            <option value="1">ABS AUCTION</option>
                            <option value="2">CDE AUCTION</option>
                            <option value="3">DED AUCTION</option>
                            <option value="4">DES AUCTION</option>
                            <option value="5">FFE AUCTION</option>
                          </select>
                        </td>
                        <td><input className="inputs" type="text" ref="comment" id="comment" name="comment" placeholder="Battery" required pattern="[0-9A-Za-z]+" maxLength="255"/></td>
                        <td><input className="inputs" type="text" ref="purPrice" id="purPrice" name="purchasePrice" placeholder="20000" required pattern="[0-9]+[.]?[0-9]?[0-9]?" maxLength="9"/></td>
                        <td><input className="inputs" type="text" ref="datePur" id="datePur" name="datePurchased" placeholder="2018-08-08" required pattern="[0-9]{4}[-/]([0][1-9]|[1][0-2])[-/][0-3][0-9]" maxLength="10"/></td>
                        <td><input className="inputs" type="text" ref="vin" id="vin" name="vin" placeholder="vin id" maxLength="17" required pattern="[0-9]+"/></td>
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
