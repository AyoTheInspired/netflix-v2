import React from "react";
import styled from "styled-components";

function LoginMid() {
	return (
		<Div>
			<div className="row__wrap">
				<div className="row__text">
					<h1 className="row__text-title">Enjoy on your TV.</h1>
					<h3 className="row__text-subtitle">
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</h3>
				</div>
				<div className="row__image">
					<img src="/tv.png" alt="screen" />
				</div>
			</div>
			<div className="row__wrap">
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
			</div>
		</Div>
	);
}

export default LoginMid;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5%;
`;
