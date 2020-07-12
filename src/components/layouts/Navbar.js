import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		height: 3.5rem;
		box-shadow : none;
	}

`;
const Navigation = () => {
	return (
		<Styles>
			<Navbar variant="light" expand="md">
				<Container>
					<Link to="/">
						<Navbar.Brand>
							<img
								src={`images/logo-1.png`}
								width="90"
								className="d-inline-block align-top"
								alt="logo"
							/>
						</Navbar.Brand>
					</Link>
					<Nav className="ml-auto">
						<NavLink className="nav-link" to="/">
							Home
						</NavLink>
						<NavLink className="nav-link" to="/collection">
							Collection
						</NavLink>
						<NavLink className="nav-link" to="/contact">
							Contact
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</Styles>
	);
};

export default Navigation;
