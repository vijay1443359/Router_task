import React from 'react';
import { BrowserRouter, Route,Routes,Link,NavLink } from 'react-router-dom';
import Aboutus from './aboutUs';
import Braches from './branches';
import Contactus from './contactUs';

const Footer = () => {
  return <div id="footer">


<Link to="/contactus"  id="first">CONTACT US</Link> &nbsp; &nbsp;
<Link to="/aboutus"  id="first">ABOUT US</Link> &nbsp; &nbsp;
<Link to="/branches"  id="first">BRANCHES</Link> &nbsp; &nbsp;

  </div>;
};

export default Footer;




