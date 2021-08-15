import React, { useState } from "react";
import styled from "styled-components";
import SignUpScreen from "./SignUpScreen";

function LoginTop() {
	const [signIn, setSignIn] = useState(false);

	return (
		<Div>
			<div className="loginScreen__background">
				<img
					src="https://res.cloudinary.com/ayotheinspired/image/upload/v1620819859/random-images/Logonetflix_bqzef0.png"
					alt="netflix"
					className="loginScreen__logo"
				/>

				<button className="loginScreen__button" onClick={() => setSignIn(true)}>
					Sign In
				</button>

				<div className="loginScreen__gradient" />
			</div>

			<div className="loginScreen__body">
				{signIn ? (
					<SignUpScreen />
				) : (
					<>
						<h1>Unlimited films, TV programmes, and more.</h1>
						<h2>Watch anywhere, cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>

						<div className="loginScreen__input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									onClick={() => setSignIn(true)}
									className="loginScreen__getStarted">
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</Div>
	);
}

export default LoginTop;

const Div = styled.div`
	position: relative;
	height: 100%;
	background: url("https://i.redd.it/128uj78z58m01.jpg") center/cover no-repeat
		fixed;

	.loginScreen__gradient {
		width: 100%;
		z-index: 1;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
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
		left: 5%;
		right: 5%;
		text-align: center;
		z-index: 1;
		color: #fff;
		padding: 20px;

		h1 {
			font-size: 3.125rem;
			margin-bottom: 20px;
		}

		h2 {
			font-size: 1.8rem;
			font-weight: 500;
			margin-bottom: 30px;
		}

		h3 {
			font-size: 1.3rem;
			font-weight: 400;
		}
	}

	.loginScreen__input {
		margin: 20px;

		form {
			input {
				padding: 10px;
				outline-width: 0;
				height: 30px;
				width: 30%;
				border: none;
				max-width: 600px;

				&::placeholder {
					font-size: 1rem;
				}
			}

			button {
				padding: 16px 20px;
				font-size: 1rem;
				color: #fff;
				background-color: #e50914;
				border: none;
				font-weight: 600;
				cursor: pointer;
			}
		}
	}

	@media (max-width: 768px) {
		.loginScreen__body {
			top: 15%;
		}
	}
`;
