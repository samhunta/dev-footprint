import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import GithubFeed from './components/github-feed';

const accessToken;

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			githubData: null
		}

		axios.get('https://api.github.com/users/jonkvix?access_token=' + accessToken)
		.then((response) => {
			this.setState({githubData: response.data})
		})
	}

	render() {
		return (
			<div>
				<GithubFeed githubInfo={this.state.githubData} />
			</div>
		)
	}

}

render(<App />, document.getElementById('app'));
