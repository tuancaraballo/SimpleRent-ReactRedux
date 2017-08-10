/*
*	Description: Container where the signup stages are contained
*  TODO: move webFontloader to app.jsx
*/
/* --- node modules --- */
import React from 'react'
var {PropTypes} = require('react');
var Navbar = require('NavBar');

// import  {connect} from 'react-redux'
// var actions = require('actions')  ;

/* --- custom components --- */



// const css_styleBootstrap = require(__dirname + '/../styles/signupBootstrap.css');
const css_styleBootstrap = require(__dirname + '/../styles/signupBootstrap.css');
//const css_style = require(__dirname + '/../styles/LandingNavBar.css');

class LandingPageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Navbar/>
        <h1> Hello Coleen sup!</h1>
        {/*--- Include Toolbar --- */}
        {/*--- Include Jumbotron --- */}
        {/*--- Include WhyUs --- */}
      </div>
    );
  }
}

export default LandingPageContainer;
