import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/footer.css';
import { Row, Col, Container } from 'react-bootstrap';

function Footer() {
	return (
		<Container>
			<hr />
			<div className="footer pt-5 ">
				<Row className="align-items-center">
					<Col md={4}>
						<div className="text-left">
							<h3>About</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
								velit praesentium voluptatem facere magnam necessitatibus
								tenetur corporis possimus tempora accusamus aut reprehenderit
								accusantium repellat excepturi dolore repellendus fugit iure
								neque?
							</p>
						</div>
					</Col>
					<Col md={4}>
						<Link to="/">
							<img src="images/logo-1.png" alt="" width="50%" />
						</Link>
					</Col>
					<Col md={4}>
						<ul className="social-network social-circle">
							<li>
								<Link
									className="icoTwitter"
									to="https://twitter.com/priyank1205"
									title="Twitter"
								>
									<i className="fa fa-twitter"></i>
								</Link>
							</li>
							<li>
								<Link
									className="icoFacebook"
									to="https://www.facebook.com/priyank.agarwal1205"
									title="Facebook"
								>
									<i class="fa fa-facebook-f"></i>
								</Link>
							</li>
							<li>
								<Link
									className="icoInstagram"
									to="https://www.instagram.com/priyank.agarwal1205/"
									title="Instagram"
								>
									<i className="fa fa-instagram"></i>
								</Link>
							</li>
						</ul>
					</Col>
				</Row>
				<hr />
				<div className="text-dark text-center">Copyright © 2020</div>
			</div>
		</Container>
	);
}

export default Footer;
