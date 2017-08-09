import  React, {PropTypes} from 'react'
// var SignUpContainer = require('SignUpContainer').default;


// the this.props.children renders below any component you want,
// below the navbar, but you can put it whereever you want
class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>
					<h1>Hello fromm Main </h1>
					{this.props.children}
			</div>
		);
	}
}
// var Main = (props) => {
// 	return (
// 			<h1> Hello thiss is Main!!</h1>
// 	);
// }

// <div>
// 		{props.children}
// </div>

export default Main;
