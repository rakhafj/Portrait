import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardColumns, Card, Col } from 'react-bootstrap';

export class Items extends Component {
	render() {
		const { items, getCategory } = this.props;

		// Cards berguna untuk mengisi gambar-gambar yang ditampilkan di collection
		function Cards() {
			return items.map((item, key) => {
				if (getCategory("Photograph")) {
					return (
						<Card key={key}>
							<Card.Img src={item.img} />
						</Card>
					);
				} else {
					return null;
				}
			});
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

const mapDispatchToProps = {
	
	
};

export default connect(null, mapDispatchToProps)(Items);
