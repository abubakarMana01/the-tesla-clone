import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<Container>
			<Nav>
				<li>
					<a href="#">Tesla &copy; 2021</a>
				</li>
				<li>
					<a href="#">Privacy & Legal</a>
				</li>
				<li className="mobile-inactive">
					<a href="#">Contact</a>
				</li>
				<li className="mobile-inactive">
					<a href="#">Careers</a>
				</li>
				<li className="mobile-inactive">
					<a href="#">Get Newsletter</a>
				</li>
				<li>
					<a href="#">News</a>
				</li>
				<li className="mobile-inactive">
					<a href="#">Forums</a>
				</li>
				<li className="mobile-inactive">
					<a href="#">Locations</a>
				</li>
			</Nav>
		</Container>
	);
}

export default Footer;

const Container = styled.footer``;

const Nav = styled.nav`
	list-style: none;
	font-weight: 500;
	display: flex;
	margin-bottom: 30px;

	li {
		padding: 0 5px;
	}

	a {
		text-decoration: none;
		font-size: 14px;
		color: #00000090;
	}

	@media (max-width: 650px) {
		flex-direction: column;
		text-align: center;

		li {
			padding: 5px 0;
		}

		li.mobile-inactive {
			display: none;
		}
	}
`;
