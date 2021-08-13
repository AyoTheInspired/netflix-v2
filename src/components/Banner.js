import React from "react";
import styled from "styled-components";

function Banner() {
	return (
		<Header
			style={{
				backgroundImage: `url(https://res.cloudinary.com/ayotheinspired/image/upload/v1625677777/random-images/mealson__hero-bg_dcljeu.jpg)`,
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}>
			<div className="banner__contents">
				<h1 className="banner__title">movie name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">this is a test description</h1>
			</div>

			<div className="banner--fadeButtom" />
		</Header>
	);
}

export default Banner;

const Header = styled.header`
	height: 448px;
	position: relative;
	object-fit: contain;
	color: #fff;

	.banner__contents {
		margin-left: 30ex;
		padding-top: 140px;
		height: 190px;

		.banner__title {
			font-size: 3rem;
			font-weight: 800;
			padding-bottom: 0.3rem;
		}

		.banner__description {
			width: 45rem;
			line-height: 1.3;
			padding-top: 1rem;
			font-size: 0.8rem;
			max-width: 360px;
			height: 80px;
		}
	}

	.banner--fadeButtom {
		height: 7.4rem;
		background-image: linear-gradient(
			180deg,
			transparent,
			rgba(37, 37, 37, 0.61),
			#111
		);
	}

	.banner__button {
		cursor: pointer;
		color: #fff;
		outline: none;
		border: none;
		font-weight: 700;
		border-radius: 0.2vw;
		padding: 0.5rem 2rem;
		margin-right: 1rem;
		background-color: rgba(0, 0, 0, 0.5);
		transition: all 0.2s linear;

		&:hover {
			color: #000;
			background-color: #e6e6e6;
		}
	}
`;
