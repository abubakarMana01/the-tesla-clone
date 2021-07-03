import React from "react";
import styled from "styled-components";

import { Slide } from "react-awesome-reveal";

export default function Section({
	title,
	description,
	backgroundImg,
	leftButtonText,
	rightButtonText,
}) {
	return (
		<Wrap bgImg={backgroundImg}>
			<Slide direction="up">
				<ItemText>
					<h1>{title}</h1>
					<p>{description}</p>
				</ItemText>
			</Slide>
			<Slide direction="up">
				<Buttons>
					<LeftButton>
						<p>{leftButtonText}</p>
					</LeftButton>
					{rightButtonText && (
						<RightButton>
							<p>{rightButtonText}</p>
						</RightButton>
					)}
				</Buttons>
			</Slide>
		</Wrap>
	);
}

const Wrap = styled.div`
	height: 100vh;
	width: 100%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	// background-image: ${({ bgImg }) => `url("/images/${bgImg}")`};
	background-image: ${({ bgImg }) => `url(${bgImg})`};
	filter: blur(0px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	z-index: 3;
`;

const ItemText = styled.div`
	position: relative;
	top: 120px;
	text-align: center;

	h1 {
		font-size: 40px;
		line-height: 48px;
		font-weight: 500;
	}
	p {
		color: #5c5d61;
		font-weight: 300;
		line-height: 19.796px;
		font-size: 14px;
	}
	span {
		text-decoration: underline;
	}
`;

const Buttons = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
const LeftButton = styled.button`
	border: none;
	background-color: #000;
	width: 250px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	border-radius: 20px;
	opacity: 0.75;
	text-transform: uppercase;
	cursor: pointer;
	p {
		color: #fff;
		font-weight: 500;
		font-size: 13px;
	}

	@media (max-width: 600px) {
		width: calc(100vw - 10vw);
	}
`;
const RightButton = styled(LeftButton)`
	background-color: #fff;
	opacity: 0.7;
	p {
		color: #000;
	}
`;
