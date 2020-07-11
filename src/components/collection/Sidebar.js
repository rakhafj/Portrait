import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

function Sidebar(props) {
	const { categories } = props;
    let match = useRouteMatch();
    
	function Categories() { // membuat link pada sidebar
		return categories.map((category, key) => (
			<NavLink key={key} className="nav-link" to={`${match.url}/${category}`}>
				{category}
			</NavLink>
		));
	}

	return (
		<Col md={2}>
			<Nav defaultActiveKey="/all" className="flex-column">
				<Categories />
			</Nav>
		</Col>
	);
}

export default Sidebar;
