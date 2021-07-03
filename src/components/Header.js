import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LanguageIcon from "@material-ui/icons/Language";

function Header() {
	const [menuOpened, setMenuOpened] = useState(false);

	const handleMenuOpen = () => {
		setMenuOpened(!menuOpened);
	};

	useEffect(() => {
		menuOpened
			? (document.body.style.overflow = "hidden")
			: (document.body.style.overflow = "visible");

		const nav = document.querySelector(".nav-bar");

		document.querySelectorAll(".nav-blur-active").forEach(item => {
			menuOpened
				? (item.style.filter = "blur(3px)")
				: (item.style.filter = "blur(0px)");

			menuOpened
				? (item.style.pointerEvents = "none")
				: (item.style.pointerEvents = "all");
		});

		nav.parentNode.childNodes.forEach(child => {
			if (child.nodeName === "DIV") {
				menuOpened
					? (child.style.filter = "blur(3px)")
					: (child.style.filter = "blur(0px)");
				menuOpened ? (child.style.zIndex = -1) : (child.style.zIndex = 1);
			}
		});
	}, [menuOpened]);

	return (
		<Nav className="nav-bar">
			<Logo className="nav-blur-active">
				<a href="/">
					<img src="/images/logo.svg" alt="Tesla logo" />
				</a>
			</Logo>
			<CenterMenu className="nav-blur-active">
				<li>
					<a href="/">Model S</a>
				</li>
				<li>
					<a href="/">Model 3</a>
				</li>
				<li>
					<a href="/">Model X</a>
				</li>
				<li>
					<a href="/">Model Y</a>
				</li>
				<li>
					<a href="/">Solar Roof</a>
				</li>
				<li>
					<a href="/">Solar Panels</a>
				</li>
			</CenterMenu>
			<RightMenu>
				<li>
					<a href="/">Shop</a>
				</li>
				<li>
					<a href="/">Account</a>
				</li>
				<li onClick={handleMenuOpen}>
					<p>Menu</p>
				</li>
			</RightMenu>
			<HamburgerMenu onClick={handleMenuOpen}>
				<p>Menu</p>
			</HamburgerMenu>
			<SideMenu isMenuOpened={menuOpened}>
				<CloseMenuButton onClick={handleMenuOpen}>
					<p>&times;</p>
				</CloseMenuButton>
				<ul>
					<li>
						<a href="/">Existing Inventory</a>
					</li>
					<li>
						<a href="/">Used Inventory</a>
					</li>
					<li>
						<a href="/">Trade-In</a>
					</li>
					<li>
						<a href="/">Test Drive</a>
					</li>
					<li>
						<a href="/">Cybertruck</a>
					</li>
					<li>
						<a href="/">Roadster</a>
					</li>
					<li>
						<a href="/">Semi</a>
					</li>
					<li>
						<a href="/">Charging</a>
					</li>
					<li>
						<a href="/">Powerwall</a>
					</li>
					<li>
						<a href="/">Commercial Energy</a>
					</li>
					<li>
						<a href="/">Utilities</a>
					</li>
					<li>
						<a href="/">Find Us</a>
					</li>
					<li>
						<a href="/">Support</a>
					</li>
					<li>
						<a href="/">
							<Region>
								<CustomIcon />
								<RegionText>
									<p>United States</p>
								</RegionText>
							</Region>
							<LanguageText>English</LanguageText>
						</a>
					</li>
				</ul>
			</SideMenu>
		</Nav>
	);
}

export default Header;

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 20px 20px 20px 50px;
	display: flex;
	justify-content: space-between;
	z-index: 2;

	@media (max-width: 600px) {
		padding-left: 20px;
	}
`;

const Logo = styled.div`
	cursor: pointer;
`;

const CenterMenu = styled.ul`
	list-style: none;
	display: flex;
	li {
		padding: 0 13px;

		a {
			text-decoration: none;
			font-weight: 500;
			white-space: nowrap;
		}
	}

	@media (max-width: 1024px) {
		display: none;
	}
`;

const RightMenu = styled(CenterMenu)`
	li {
		padding: 0 15px;
	}
	p {
		font-weight: 500;
		white-space: nowrap;
		cursor: pointer;
	}
`;

const HamburgerMenu = styled.div`
	background-color: #00000015;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 15px;
	padding: 3px 10px;
	display: none;
	cursor: pointer;

	p {
		font-weight: 500;
	}

	@media (max-width: 1024px) {
		display: block;
	}
`;

const SideMenu = styled.div`
	background: #fff;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: scroll;
	width: 300px;
	padding: 20px 30px;
	transition: transform 500ms ease-out;
	transform: ${({ isMenuOpened }) =>
		isMenuOpened ? "translateX(0)" : "translateX(100%)"};

	ul {
		list-style: none;
		margin-top: 20px;
		height: 110vh;

		li {
			padding: 5px 15px;
			margin: 12px 0;
			border-radius: 10px;
			transition: background-color 600ms ease-out 100ms;
			cursor: pointer;
		}
		li:hover {
			background-color: #00000020;
		}

		a {
			text-decoration: none;
			font-weight: 500;
			color: #00000099;
		}
	}

	@media (max-width: 400px) {
		width: 250px;
		padding: 20px;
	}
`;

const CloseMenuButton = styled.div`
	display: flex;
	justify-content: flex-end;
	cursor: pointer;

	p {
		font-size: 36px;
		font-weight: 300;
	}
`;

const Region = styled.div`
	display: flex;
`;

const RegionText = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10px;

	p {
		font-weight: 500;
		color: #00000099;
	}
`;

const LanguageText = styled.p`
	font-size: 14px;
	font-weight: 500;
	color: #00000080;
	margin-left: 35px;
`;

const CustomIcon = styled(LanguageIcon)``;
