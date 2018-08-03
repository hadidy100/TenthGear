import React, {Component} from 'react';
import logo from './logo.svg';
import car from './car.svg';
import orders from './orders.png';
import about from './about.png';
import crm from './crm.png';
import cart from './cart.png'
import background from './cars/background.jpg';
import browse from './browse.png';
import reports from './reports.png';
import './App.css';
import './about-us.css';
import {Pay} from './payment.js';
import {Inventory} from './inventory.js';
import {Expense} from './expense.js';
import {About} from './about.js';
import report1 from './reports/report1.ico';
import report2 from './reports/report2.png';
import report3 from './reports/report3.png';
import report4 from './reports/report4.png';

export class Report extends Component {
  render() {
    return (
      <div className="reportsDiv">
        <h1>Reports Coming Soon</h1>
        <a className="reports" ><img className="reports" src={report1}></img></a>
        <a className="reports" ><img className="reports" src={report2}></img></a>
        <a className="reports" ><img className="reports" src={report3}></img></a>
        <a className="reports" ><img className="reports" src={report4}></img></a>
      </div>
    );
  }
}
