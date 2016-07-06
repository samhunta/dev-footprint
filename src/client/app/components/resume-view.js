import React from 'react';
import { Image } from 'react-bootstrap';

const ResumeView = () => {

	return (
		<div>
			Click resume below to view PDF.
			<a href="https://www.scribd.com/document/317632592/Kvicky-Resume-6-29-16">
				<Image src='../../../images/resume-screenshot.png' responsive />
			</a>
		</div>
	)
}

export default ResumeView;