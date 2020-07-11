import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

import Header from './Header';

function LeftContent(props) {
	return (
		<Col md={6}>
			<Row>
				<Col md={6}>
					<Card className="shadow-lg mb-5 bg-white rounded">
						<Card.Img src="/images/boy.jpg" />
					</Card>
				</Col>
				<Col md={6}>
					<Card className="shadow-lg my-5 bg-white rounded">
						<Card.Img src="/images/man.jpg" />
					</Card>
				</Col>
			</Row>
		</Col>
	);
}

function RightContent(props) {
	return (
		<Col md={6} className="align-self-center">
			<h2 style={{ color: '#1f496d' }}>Portrait.</h2>
			<blockquote className="blockquote mb-0">
				<p>
					{' '}
					<q>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
						posuere erat a ante.
					</q>{' '}
				</p>
				<footer className="blockquote-footer">
					Someone famous in <cite title="Source Title">Source Title</cite>
				</footer>
			</blockquote>
		</Col>
	);
}

class Home extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Row>
					<LeftContent />
					<RightContent />
				</Row>
			</Container>
		);
	}
}

export default Home;
