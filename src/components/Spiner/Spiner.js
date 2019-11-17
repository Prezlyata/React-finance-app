import React, { Component } from 'react';
import './Spiner.css';

class Spiner extends Component {
	render() {
		// const { onSpiner } = this.props;
		// let classes = '';
		// classes = onSpiner === false ? 'spinerOpen' : 'spinerClose';
		return (
			<React.Fragment>
				<div>
					<div className="loader-main">
						<div className="centerfy">
							<div className="spiner" />
							<div className="logo">
								<span className="logoText">Finance </span>
								<span className="logoIntro">App</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Spiner;
