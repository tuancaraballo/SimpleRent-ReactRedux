
/* Description : These are reducers that define the functions to call when
 *               an action is dispatched.
 */

/* --- node modules --- */
import { combineReducers } from 'redux'

/* --- constants defined in actions, this helped us avoid misspelling mistakes*/
var {ADD_PROPERTY, UPDATE_CURRENT_STAGE, ADD_STAGE, STAGES_STATUS} = require('actions');

// -> reducer called in the Property component
function propertyReducer(state = {}, action){
  switch(action.type){
    case ADD_PROPERTY:
    return Object.assign({}, state, {
        addr1: action.addresses.addr1,
        addr2: action.addresses.addr2,
    });
    default:
    return state;
  }
};

// -> reducer called to maintain the color status of the navigation stages
//      if (typeof state.seen_stages  === 'undefined'){
      //   return {
      //     seen_stages: [action.stage]
      //   }
      // }
function stagesReducer(state = {current_stage:'property', seen_stages: []}, action) {
  switch (action.type) {
    case UPDATE_CURRENT_STAGE:
      return {
        current_stage : action.stage
      }
    case ADD_STAGE:
      return Object.assign({}, state.seen_stages, {
        seen_stages:[
                  ...state.seen_stages,
                  action.stage,
        ]
      });
    default:
      return state;
  }
}


const reducers = combineReducers({
  propertyReducer,
  stagesReducer,
});

export default reducers;


/*
  Example of  an Initial State that we could pass to Property reducer
const propertyInitialState = {
  addresses: {
    addr1: "address 1",
    addr2: "address 2",
  }
};
*/
