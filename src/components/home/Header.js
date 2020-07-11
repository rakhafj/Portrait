import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const BigJumbotron = styled(Jumbotron)`
	background: url('images/header-3.jpg') center;
	background-size: cover;
	border-radius: 0;
	min-height: 75vh;
	position: relative;

	.header-content {
		background: white;
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;

const Header = () => {
	return (
		<BigJumbotron>
			<div className="text-dark p-5">
				<Row>
					<Col className="header-content" md={6}>
						<h1>Hello, world!</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
							accusamus aliquid consequuntur ratione blanditiis nisi atque
							dolore natus corrupti sint quod similique voluptatum sequi a
							delectus saepe porro explicabo provident?
						</p>
						<p>
							<Button variant="dark">Learn more</Button>
						</p>
					</Col>
				</Row>
			</div>
		</BigJumbotron>
	);
};

export default Header;
