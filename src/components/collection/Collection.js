import React, { useState } from 'react';
import Header from './Header';
import Items from './Items';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { getCategory } from '../../actions';

function Collection(props) {
	// state yang berisi data dari item yang ditampilan di collection
	const [state] = useState({
		categories: ['Photograph', 'Drawing'],
	});

	const { categories } = state;
	const { items, category, getCategory } = props;
	console.log(category);
	return (
		<Container>
			<Header category="All" />
			<Row>
				<Sidebar categories={categories} />
				<Items items={items} getCategory={getCategory} />
			</Row>
		</Container>
	);
}

const mapStateToProps = (state) => ({
	items: state.collections.items,
	category: state.collections.category,
});

const mapDispatchToProps = {
	getCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
