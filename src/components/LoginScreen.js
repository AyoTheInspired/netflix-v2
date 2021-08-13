import React from "react";
import styled from "styled-components";

function LoginScreen() {
	return (
		<Div>
			<div className="loginScreen__background">
				<img
					src="https://res.cloudinary.com/ayotheinspired/image/upload/v1620819859/random-images/Logonetflix_bqzef0.png"
					alt="netflix"
					className="loginScreen__logo"
				/>

				<button className="loginScreen__button">Sign In</button>

				<div className="loginScreen__gradient" />
			</div>

			<div className="loginScreen__body">
				<>
					<h1>Unlimited films, TV programmes, and more.</h1>
				</>
			</div>
		</Div>
	);
}

export default LoginScreen;

const Div = styled.div`
	position: relative;
	height: 100%;
	background: url("https://i.redd.it/128uj78z58m01.jpg") center/cover no-repeat
		fixed;

	.loginScreen__gradient {
		width: 100%;
		z-index: 1;
		height: 100vh;
		background: rgba(0, 0, 0, 0.4);
		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, 0.8) 100%
		);
	}

	.loginScreen__logo {
		position: fixed;
		left: 0;
		width: 120px;
		object-fit: contain;
		padding-left: 15px;
		padding-top: 15px;
	}

	.loginScreen__button {
		position: fixed;
		right: 20px;
		top: 20px;
		padding: 10px 20px;
		font-size: 1rem;
		color: #fff;
		font-weight: 600;
		border: none;
		background: #e50914;
		cursor: pointer;
	}

	.loginScreen__body {
		position: absolute;
		top: 30%;
		width: 97vw;
		text-align: center;
		z-index: 1;
		color: #fff;
		padding: 20px;

		h1 {
			white-space: pre-wrap;
			font-size: 3.125rem;
			margin-bottom: 20px;
		}
	}
`;
