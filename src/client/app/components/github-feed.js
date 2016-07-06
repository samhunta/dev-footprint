import React, { Component } from 'react';
import { Grid, Col, Row, Image, Table } from 'react-bootstrap';
import TwitterFeed from './twitter-feed';
import ResumeView from './resume-view';

class GithubFeed extends Component {

	constructor(props) {
		super(props);

		const githubGraph = 'http://ghchart.rshah.org/jonkvix'

		this.state = {
			imageToLoad: 'http://djibqn7nj7mes.cloudfront.net/pw/img/loading_icon_photo.gif'
		}
	}

	handleImageLoaded() {
		this.setState({imageToLoad: 'http://ghchart.rshah.org/jonkvix'})
	}
	
	render() {
		if (!this.props.githubInfo) {
			return <div>Loading...</div>
		}

		const githubImage = this.props.githubInfo.avatar_url

		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={3} md={3} className="info-column">
							<div>
								<Image src={githubImage} circle responsive />
								<Table>
									<tbody>
										<tr>
											<td><b>Name:</b><br /> {this.props.githubInfo.name}</td>
										</tr>
										<tr>
											<td><b>Email:</b><br /> <a href='mailto:jonkvix@gmail.com'>{this.props.githubInfo.email}</a></td>
										</tr>
										<tr>
											<td><b>Location:</b><br /> {this.props.githubInfo.location}</td>
										</tr>
										<tr>
											<td><b>LinkedIn:</b><br /> <a href='http://linkedin.com/in/jonkvix'>linkedin.com/in/jonkvix</a></td>
										</tr>
										<tr>
											<td><b>GitHub:</b><br /> <a href='http://github.com/jonkvix'>github.com/jonkvix</a></td>
										</tr>
										<tr>
											<td><b>Blog (Last post: 1/26):</b><br /> <a href='http://jonkvix.com/'>jonkvix.com</a></td>
										</tr>
										<tr>
											<td><b>Twitter:</b><br /> <a href='http://twitter.com/jonkvix'>twitter.com/jonkvix</a></td>
										</tr>
									</tbody>
								</Table>
							</div>
						</Col>

						<Col xs={9} md={9}>
							<div>
								<Table>

								</Table>
								GitHub Commit History:
								<br />
								<Image src={this.state.imageToLoad} 
									responsive
									onLoad={this.handleImageLoaded.bind(this)}
								/>
							</div>
							<br />
							<div>
								<Col xs={6} md={6} className="twitter-column">
									<TwitterFeed />
								</Col>
							</div>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default GithubFeed;