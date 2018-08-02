import React, {Component} from 'react';
import logo from './logo.svg';
import car from './car.svg';
import orders from './orders.png';
import about from './about.png';
import crm from './crm.png';
import car1 from './cars/car1.jpg';
import car2 from './cars/car2.jpg';
import car3 from './cars/car3.jpg';
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
import crmIcon from './crm/crm2.gif';

export class CustomerRelations extends Component {
  render() {
    return (
      <div className="reportsDiv">
        <h1>CRM Coming Soon</h1>
        <div className="crmBoxed">
          <button className="but1"></button>
          <button className="but2"></button>
          <button className="but3"></button>
          <button className="but4"></button>
          <button className="but5"></button>
          <button className="but6"></button>
          <button className="but7"></button>
        <a className="crm" ><img className="crm" src={crmIcon}></img></a>
        </div>
      </div>
    );
  }
}
