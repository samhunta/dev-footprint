import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import ResumeView from './resume-view';

class TwitterFeed extends Component {

	componentDidMount() {
		fetchTweets();
	}

	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {

		return (
			<Grid>
				<Row className="show-grid">
						<Col xs={6} md={6}>
							<ResumeView />
						</Col>
						<br />
						<Col xs={6} md={6}>
							<div id="latest-tweets"></div>
						</Col>						
				</Row>
			</Grid>
		)
	}

}

const fetchTweets = () => {
	twttr.widgets.createTimeline({
  		sourceType: "profile",
  		screenName: "jonkvix"
	},
	document.getElementById('latest-tweets'),
	{
  		width: 'auto',
  		height: '70vh'
	}).then((el) => {
		console.log('embedded timeline')
	})
}

export default TwitterFeed;