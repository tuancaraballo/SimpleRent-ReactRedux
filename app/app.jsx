/*
 *  Description: This is the main/Parent React component, here's where most
 *               imports take place
 *
 *         TODO: Move store to its own separate file (this will include reducers)
 *               Move Root/Routes to their own files
 *               Import all css styling that you may need
 */

/* ----  node modules --- */
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import {Route, Router,  hashHistory} from 'react-router'

/* --- actions and store --- */
var actions = require('actions');
var reducers = require('reducers').default;

/* ---- custom components ---- */
var Property = require('Property').default;
var Tenant = require('Tenant').default;
var Rent = require('Rent').default;
var BankInfo = require('BankInfo').default;
var SignUpSuccess =require('SignUpSuccess').default;
var SignUpContainer = require('SignUpContainer').default;
var Main = require('Main').default; // TODO: this is probably unneccessary

let store = createStore(reducers);

store.subscribe(() => {
  var state = store.getState();
  console.log(' **** New State Change ', state);
});
store.dispatch(actions.addAddress({
  addr1: "My address1",
  addr2: "My address2"
}));



// store.dispatch(actions.updateCurrentStage("myStage"));
// store.dispatch(actions.addAddress())


/* --- Load any css styling or bootsttrap --- */

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path= "/" component = {Main}>
        <Route path="signup"component={SignUpContainer} >
          <Route path="property" component={Property}/>
          <Route path="tenant" component={Tenant}/>
          <Route path="rent" component={Rent}/>
          <Route path="bankinfo" component={BankInfo}/>
          <Route path="signupsuccess" component={SignUpSuccess}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
