import React, { useState } from 'react';
import Header from './Header';
import Items from './Items';
import { Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';

function Collection() {
    // state yang berisi data dari item yang ditampilan di collection
	const [state] = useState({
		items: [
			{
				img: 'images/man.jpg',
				category: 'Photograph',
				name: 'Man',
				artist: 'A',
			},
			{
				img: 'images/boy.jpg',
				category: 'Photograph',
				name: 'Man',
				artist: 'A',
			},
			{
				img: 'images/girl.jpg',
				category: 'Photograph',
				name: 'Man',
				artist: 'A',
			},
			{
				img: 'images/header-1.jpg',
				category: 'Photograph',
				name: 'Man',
				artist: 'A',
			},
			{
				img: 'images/man.jpg',
				category: 'Photograph',
				name: 'Man',
				artist: 'A',
			},
		],
		categories: ['Photograph', 'Drawing'],
	});

	const { items, categories } = state;

	return (
		<Container>
			<Header category="All" />
			<Row>
				<Sidebar categories={categories} />
				<Items items={items} />
			</Row>
		</Container>
	);
}

export default Collection;
