/*
*	Description: Container where the signup stages are contained
*/
import React, {PropTypes} from 'react'
// var ReactDOM = require('react-dom');
// import  {connect} from 'react-redux'
// var actions = require('actions')  ;


/*  -- TODO: THIS IMPORT HERE MIGHT BE UNNECESSARY -- */
// var SignUpToolbar = require('SignUpToolbar').de;
// var Navigation = require('Navigation').default;
// var Property = require('Property').default;
// var Tenant = require('Tenant').default;
// var Rent = require('Rent');
// var BankInfo = require('BankInfo');
// var SignUpSuccess =require('SignUpSuccess');
// var Main = require('Main'); // TODO: this is probably unneccessary

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
        <h1> Hello fromm SignUpContainer!!!!</h1>
        <div className="container">
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
//
// var SignUpContainer = React.createClass({
//   getInitialState: function () {
// 		return {
//       CurrentPage: 'property',
// 			addr1: '',
//       addr2: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       monthlyRent: 0,
//       deposit: 0,
//       isDepositPaid: false,
//       dueDate: '',
//       bankAccount: undefined,
//       routingNumber: undefined,
//       property_state: false,
//       tenant_state: false,
//       rent_state: false,
//       bank_state: false,
// 		};
// 	},
//
//   updateInfo: function (page, newValues) {
//     console.log('--- updateInfo has been called ----');
//     console.log(newValues);
//     switch (page) {
//       case 'tenant':
//         this.setState({
//           firstName: newValues.firstName,
//           lastName: newValues.lastName,
//           email: newValues.email,
//           CurrentPage: newValues.NextPage,
//           tenant_state: true,
//         });
//         break;
//       case 'rent':
//         this.setState({
//           monthlyRent: newValues.monthlyRent,
//           deposit: newValues.deposit,
//           dueDate: newValues.date,
//           CurrentPage: newValues.NextPage,
//           rent_state:true,
//         });
//         break;
//     case 'bank':
//           this.setState({
//             bankAccount: newValues.bankAccount,
//             routingNumber: newValues.routingNumber,
//             bank_state:true,
//             CurrentPage: newValues.NextPage,
//           });
//       default:
//         break;
//     }
//   },
//
//   render: function () {
//     var {CurrentPage, tenant_state, property_state, rent_state, bank_state} = this.state;
//     var that = this; // --> bc any function inside render, will lose access to this context
//
//     //{React.cloneElement(that.props.children, { onChange: that.updateInfo})}
//     return (
//       <div>
//         <SignUpToolbar/>
//         <h1> Hello MAin!!!!</h1>
//         <div className="container">
//           <div className= "row ">
//               <div className="col-md-8 col-md-offset-1">
//                   <Navigation tenantState={tenant_state} propertyState = {property_state} rentState={rent_state} bankState={bank_state} CurrentPage={CurrentPage}/>
//               </div>
//           </div>
//           <div className= "row ">
//
//             <div className="col-md-6 col-md-offset-2">
//               {this.props.children}
//             </div>
//           </div>
//
//         </div>
//       </div>
//     );
//   }
// });
