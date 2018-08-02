import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './framework.css';
import './about-us.css';
import ivan from './ivan.gif';
import anas from './anas.gif';
import david from './david.gif';
import shub from './shub.gif';

export class About extends Component {
  render() {
    return (
  <div className="wrapper row2">
  <div id="container" className="clear">
    <div id="about-us" className="clear">
      <div id="team">
        <ul className="clear">
          <li className="one_half first">
            <div id="about-intro" className="clear">
              <img src="images/demo/470x250.gif" alt="" />
              <h2>About Us</h2>
              <p className="team_name">From the same team that brought you Yummy Tummy, we are proud to provide 10th gear dealer software. This software will handle all of your dealer needs, it's easy to use interface will have you up and running in no time. 10th gear will handle everything from maintaining a customer database, displaying reports and graphs, adding new inventory along with expenses. This app will do it all.</p>
            </div>
          </li>
          <li className="one_quarter">
            <figure><img src={anas} length="160px" width="160px" alt="" />
              <figcaption>
                <p className="team_name">Anas</p>
                <p className="team_title">Team Lead / Database Master</p>
              </figcaption>
            </figure>
            <ul>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
            </ul>
          </li>
          <li className="one_quarter">
            <figure><img src={david} length="160px" width="160px" alt="" />
              <figcaption>
                <p className="team_name">David</p>
                <p className="team_title">Software Developer / Back-End</p>
              </figcaption>
            </figure>
            <ul>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
            </ul>
          </li>
          <li className="one_quarter first">
            <figure><img src={ivan} length="160px" width="160px"  alt="" />
              <figcaption>
                <p className="team_name">Ivan</p>
                <p className="team_title">Ivan the Tyrant / Graphic Design</p>
              </figcaption>
            </figure>
            <ul>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
            </ul>
          </li>
          <li className="one_quarter">
            <figure><img src={shub} length="160px" width="160px" alt="" />
              <figcaption>
                <p className="team_name">Shubhankar</p>
                <p className="team_title">Mr. Shub / Fron-End</p>
              </figcaption>
            </figure>
            <ul>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
              <li><a href="#"><img src="images/demo/social-icon.png" alt="" /></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>);
  }
}
