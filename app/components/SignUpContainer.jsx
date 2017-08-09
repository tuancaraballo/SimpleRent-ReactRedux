/*
*	Description: Container where the signup stages are contained
*  TODO: move webFontloader to app.jsx
*/
/* --- node modules --- */
import React from 'react'
var {PropTypes} = require('react');

// import  {connect} from 'react-redux'
// var actions = require('actions')  ;

/* --- custom components --- */
var SignUpToolbar = require('SignUpToolbar');
var Navigation = require('Navigation').default;


/* - - - Importing font styles and customized style sheets for signup forms - - -*/
var webfontloader = require('webfontloader');
webfontloader.load({
  google: {
    families: ['Arimo', 'Armata', 'sans-serif']
  }
});

const css_styleBootstrap = require(__dirname + '/../styles/signupBootstrap.css');
const css_style = require(__dirname + '/../styles/signup.css');

class SignUpContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SignUpToolbar/>
        <div className="container">
          <div className= "row ">
            <div className="col-md-8 col-md-offset-1">
              <Navigation/>
            </div>
          </div>
          <div className= "row ">
            <div className="col-md-6 col-md-offset-2">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpContainer;
