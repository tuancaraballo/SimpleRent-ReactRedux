/* -- node modules --*/
var React = require('react');
var {PropTypes} = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


/*
* TODO: Pass a function from singupCOntainer to trigger when the form is submitted
*/

var Property = React.createClass({

	onFormSubmit: function (e) {
		e.preventDefault();// this prevents the browse from refreshing the whole app.

		var info = {
			"addr1" : this.refs.addr1.value,
			"addr2" : this.refs.addr2.value,
		}

		if (this.refs.addr1.value.length > 0) {
			 //this.refs.addr1.value = ''; // --> TODO: add this if needed
			var {dispatch} = this.props;
			dispatch(actions.addAddress(info));
			dispatch(actions.addStage("property"));
			dispatch(actions.updateCurrentStage("tenant"));
			window.location.hash = '#/signup/tenant'; //--> forward to the next form
		}

	},
	render: function() {
		return (
		<div className="space-from-toolbar">
				<h1 className="text-left" className="title-style">Create A Property</h1>

		 		<h5 className="text-left description" >Let's start by setting up a property for a tenant! First things first, what's the address of your first property? Don't worry, you can always add more properties later!</h5>

        <form className="sign-up form-style" onSubmit={this.onFormSubmit}>
						{/* --- First adreess ---	*/}
						<div className="form-group sign-up-group">
                <input className="form-control text-in inner-add input-style" type="text" placeholder="ex: 650 Mayfield Rd. Stanford, CA 94309" ref="addr1" />
								<span className="label label-default form-label input-label" > Property Address </span>
            </div>
					 {/* --- Second adreess ---	*/}
						<div className="form-group sign-up-group">
								<input className="form-control text-in input-style" type="text" placeholder="ex: 650B Mayfield Rd. Stanford, CA 94309" ref="addr2"/>
								<span className="label label-default form-label monthly-payment">Property Address 2 (optional)</span>
						</div>
           {/* --- Submit button ---	*/}
						<button className="btn btn-link btn-sm pull-right next-button " type="submit"  >NEXT </button>
        </form>
  </div>
		);
	}
});

// export default connect(
//   (state) => {
//     return {
//       showCompleted: state.showCompleted,
//       searchText: state.searchText
//     }
//   }
// )(TodoSearch);
export default connect()(Property);
