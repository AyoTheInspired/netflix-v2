import React from "react";
import styled from "styled-components";

function LoginMid() {
	return (
		<Div>
			<div className="row__wrap">
				<div className="row__text">
					<h1 className="row__text-title">Enjoy on your TV.</h1>
					<h4 className="row__text-subtitle">
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</h4>
				</div>
				<div className="row__image-wrap">
					<img src="/tv.png" className="row__image" width="450" alt="screen" />
				</div>
			</div>
			{/* <div className="row__wrap">
				<div className="row__text"></div>
				<div className="row__image"></div>
			</div>
			<div className="row__wrap">
				<div className="row__text"></div>
				<div className="row__image"></div>
			</div>
			<div className="row__wrap">
				<div className="row__text"></div>
				<div className="row__image"></div>
			</div> */}
		</Div>
	);
}

export default LoginMid;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	/* background: rgba(0, 0, 0, 0.9); */

	.row__wrap {
		padding-top: 30px;
		padding-left: 70px;
		padding-right: 70px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		border-top: 8px solid #222;
	}

	.row__text {
		color: #fff;
		max-width: 600px;

		h1 {
			font-size: 50px;
			margin-bottom: 18px;
		}

		h4 {
			font-size: 26px;
		}
	}

	.row__image {
		/* max-width: 73%;
		max-height: 54%; */
		/* width: 50px; */
	}

	@media (max-width: 768px) {
		.row__wrap {
			justify-content: center;
		}

		.row__text {
			margin-bottom: 35px;
			text-align: center;

			h1 {
				margin-bottom: 15px;
			}
		}
	}
`;
