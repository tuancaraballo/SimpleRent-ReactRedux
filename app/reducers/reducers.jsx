
// TODO: you can import the constants you defined in actions using ES6 desctructing
//  var {ADD_PROPERTY} = require('actions');
import { combineReducers } from 'redux'

const propertyInitialState = {
  addr1: "address 1",
  addr2: "address 2",
};



function propertyReducer(state = propertyInitialState, action){
  switch(action.type){
    case 'ADD_PROPERTY':
    return Object.assign({}, state, {
          addr1: action.addr1,
          addr2: action.addr2,
    });
    default:
        return state;
  }
};

const reducers = combineReducers({
  propertyReducer,
});

export default reducers;
// export var addAddress = (AddrObject) => {
//   switch (action.type) {
//       case ADD_PROPERTY:
//           return Object.assign({}, state, {
//                 addr1: AddrObject.addr1,
//                 addr2: AddrObject.addr2,
//           });
//       default:
//         return state
// }
// }

//
// updateInfo: function (page, newValues) {
//   console.log('--- updateInfo has been called ----');
//   console.log(newValues);
//   switch (page) {
//     case 'property':
//       this.setState({
//         addr1: newValues.addr1,
//         addr2: newValues.addr2,
//         CurrentPage: newValues.NextPage,
//         property_state: true,
//       });
//       break;
//     case 'tenant':
//       this.setState({
//         firstName: newValues.firstName,
//         lastName: newValues.lastName,
//         email: newValues.email,
//         CurrentPage: newValues.NextPage,
//         tenant_state: true,
//       });
//       break;
//     case 'rent':
//       this.setState({
//         monthlyRent: newValues.monthlyRent,
//         deposit: newValues.deposit,
//         dueDate: newValues.date,
//         CurrentPage: newValues.NextPage,
//         rent_state:true,
//       });
//       break;
//   case 'bank':
//         this.setState({
//           bankAccount: newValues.bankAccount,
//           routingNumber: newValues.routingNumber,
//           bank_state:true,
//           CurrentPage: newValues.NextPage,
//         });
//     default:
//       break;
//   }
// },
