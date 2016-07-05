import React from 'react';
import { Grid, Col, Row, Image } from 'react-bootstrap';

const GithubFeed = ({githubInfo}) => {

	if (!githubInfo) {
		return <div>Loading...</div>
	}

	const githubImage = githubInfo.avatar_url

	return (
		<div>
		<Grid>
			<Row className="show-grid">
				<Col xs={3} md={3}>
					<div>
						<Image src={githubImage} responsive />
					</div>
				</Col>

				<Col xs={9} md={9}>
				</Col>
			</Row>
		</Grid>
		</div>
	);

}

export default GithubFeed;