import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardColumns, Card, Col } from 'react-bootstrap';

export class Items extends Component {
	render() {
		const { items } = this.props;

        // Cards berguna untuk mengisi gambar-gambar yang ditampilkan di collection
		function Cards() {
			return items.map((item, key) => (
				<Card key={key}>
					<Card.Img src={item.img} />
				</Card>
			));
		}

		return (
			<Col md={10}>
				<CardColumns>
					<Cards />
				</CardColumns>
			</Col>
		);
	}
}

export default Items;
