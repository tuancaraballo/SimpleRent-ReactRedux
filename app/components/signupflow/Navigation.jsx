var React = require('react');
var {connect} = require('react-redux');
var {PropTypes} = require('react');
var actions = require('actions');


// <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
var {Link, IndexLink} = require('react-router');

var activeCircle = {
  "background": "#228bed",
  "color": "#fff"
};

var disabledCircle = {
  "opacity": "1!important",
  "filter" :"alpha(opacity=100)!important",
  "background-color": "#adb2c6",
  "color": "#fff",
};

var activeStep = {
  "color": "#228bed",
  "font-family": "Armata, sans-serif",
};

var disabledStep = {
  "color": "#adb2c6",
  "font-family": "Armata, sans-serif",
};

var currentCircle = {
  "background-color":"white",
    "border":"2px solid rgb(34,139,237)",
    "font-family":"Armata, sans-serif",
    "color":"rgb(34,139,237)",
};

var Navigation = React.createClass({
  // --> handles the circle color
  handleCircleColor : (stage, seen_stages, current_stage) => {
    console.log(stage,seen_stages,current_stage);
    if (seen_stages.indexOf(stage) > -1){ //-> if stage has already been seen
      return currentCircle              //- make it blue
    } else if (stage === current_stage){ // else if hasn't been seen but it's current
      return activeCircle              // make it white with blue borders
    }
    return disabledCircle;
  },
  // --> handles the color for the numbers below the circles
  handleStepColor : (stage, current_stage) =>
     ((stage === current_stage) ? activeStep : disabledStep),


  // handleColors: function(element, state, current_element, CurrentPage){
  //   if(element == 'circle' && current_element === CurrentPage){
  //     return currentComponent;
  //   }
  //   if (element == 'step'){
  //     if(state == true) return activeStep;
  //     return disabledStep;
  //   }else if (state == true){
  //       return activeCircle;
  //   }
  //   return disabledCircle;
  // },

  render: function() {
    //var {tenantState, rentState, propertyState, bankState, CurrentPage} = this.props;
    // console.log("Navigation properties ", this.props.addresses);
    // var {dispatch, subscribe} = this.props;
    // dispatch(actions.addStage("MY Super cool stage"));
    var {seen_stages, current_stage} = this.props;


    // console.log('----- Printing addresses -- ', addresses);
    console.log('-- Inside navigation render ---', seen_stages);
    var actclass = 'btn-active';
    var deactclass = 'btn-disable';
    return (
      <div className="cont-wizard space-from-toolbar">
        <div className="stepwizard">
          <div className="stepwizard-row">

            {/* --- Property --- */}
            <div className="stepwizard-step">
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleCircleColor('property', seen_stages, current_stage)}> 1 </IndexLink>
              {/*}<button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', propertyState)}>1</button>*/}
              <p style={this.handleStepColor('property', current_stage)}>Property</p>
            </div>

            {/* --- Tenant --- */}
            <div className="stepwizard-step">
              <Link to='/tenant' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleCircleColor('tenant', seen_stages, current_stage)}> 2 </Link>
            {/*  <button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', tenantState)} ><b>2</b></button>*/}
            <p style={this.handleStepColor('tenant', current_stage)}>Tenant</p>
            </div>

            {/* --- Rent --- */}
            <div className="stepwizard-step">
                <Link to='/rent' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleCircleColor('rent', seen_stages, current_stage)}> 3 </Link>
              {/*}<button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', rentState)} >3</button> */}
              <p style={this.handleStepColor('rent', current_stage)}>Rent</p>
            </div>
            {/* --- Bank Info --- */}
            <div className="stepwizard-step">
              <Link to='/bankinfo' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleCircleColor('bankinfo', seen_stages, current_stage)}> 4 </Link>
              {/*<button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', bankState)}>4</button> */}
              <p style={this.handleStepColor('bankinfo', current_stage)}>Bank Info</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

// const mapStateToProps = (state) => (
//   {
//    addresses: state.addresses,
//    seen_stages: state.seen_stages,
// });
export default connect(
  (state) => {
    return {
      seen_stages: state.stagesReducer.seen_stages,
      current_stage: state.stagesReducer.current_stage,
    }
  }, null
)(Navigation);
// function mapStateToProps(state) {
//   console.log('------ Here is the state ----', state);
//   return { addresses: state.addresses }
// }
//
//
// export default connect(mapStateToProps)(Navigation);
// // class YourComponent extends React.Component {
//     render() {
//       //render your component
//     }
//
//     componentWillUpdate(nextProps) {
//         if (nextProps.specificProperty !== prevProps.specificProperty) {
//             // Do whatever you want
//         }
//     }
// }


//export default Navigation;






//
