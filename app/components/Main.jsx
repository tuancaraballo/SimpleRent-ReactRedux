/*
 * Description: This is the Main layout where every Container will be displayed
 */
import  React, {PropTypes} from 'react'
var NavBar = require('NavBar');

class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>
					<NavBar/>
					{this.props.children}
			</div>
		);
	}
}

export default Main;
