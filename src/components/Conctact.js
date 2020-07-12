import React, { Component } from 'react';
import { Wrapper } from '../Styles/ContactSytles';
import { Form, Button } from 'react-bootstrap';

class Contact extends Component {
	constructor(props) {
		super();
		this.state = {
			name: '',
			email: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		alert(
            `Namaku  ${this.state.name} , emaliku ${this.state.email}`
		);
		event.preventDefault();
	}

	onChange(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	onCheck(event) {
		const { name } = event.target;
		this.setState((prevState) => ({ [name]: !prevState[name] }));
	}
	render() {
		const { name, email } = this.state;
		return (
			<Wrapper className="outer">
				<Wrapper className="inner container col-11 col-md-10 col-lg-8 my-5 pt-5 p-4">
					<Form onSubmit={this.onSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Nama</Form.Label>
							<Form.Control
								name="name"
								type="text"
								value={name}
								onChange={this.onChange}
								placeholder="Put your name"
							/>
						</Form.Group>

						<Form.Group controlId="formBasicName">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								name="email"
								type="email"
								value={email}
								onChange={this.onChange}
								placeholder="Enter email"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Wrapper>
			</Wrapper>
		);
	}
}

export default Contact;
