import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './framework.css';
import './about-us.css';
import ivan from './ivan.gif';
import anas from './anas.gif';
import david from './david.gif';
import shub from './shub.gif';

export class Contact extends Component {
  render() {
    return (
  <div className="wrapper row2">

              <h2>Contact Us</h2>

                <p>WE are available from Mon through Fri 8 am to 5 pm pacific standard time </p>
                <p> You can reach us at 714 555 1212 </p>
                <p> You can email us at www.tenthGear.outlook.org </p>
                <p>
                  Our mission is to provide dealer with the power of being able to access their point of
                  sale desktop tools remotely from anywhere they deem convenient, and yet have a complete
                  confidence that their data is secured, and accessible 24 hours a day, 7 days a week. We believe that empowering dealers and giving them this easy and robust access,
                  will have a positive financial effect, and will put them one extra step to exceed customer’s satisfaction.
                </p>
                <p> Our software caters to Car dealer who sell retail, wholesale, and the dealers that are interested in financing
                  their customers in-house where they have a buy here/pay here program.
                </p>

   </div>);
  }
}
