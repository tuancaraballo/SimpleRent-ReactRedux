var {createStore, combineReducers, compose} = require('redux');
/* --- importing our reducers --- */
var {propertyReducer} = require('reducers');


const configureStore = () => {
  var reducers = combineReducers({
    propertyReducer,
    // - - > add reducers here
  });

  console.log("Here's the configureStore ", reducers);

  var store = createStore(reducers);
 //  var store = createStore(reducers, compose(
 //   window.devToolsExtension ? window.devToolsExtension() : f => f
 // ));

  return store;
};

export default configureStore;
