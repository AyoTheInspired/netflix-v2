import React, { useRef } from "react";
import styled from "styled-components";
import { auth } from "../firebase";

function SignUpScreen() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => alert(error.message));
	};

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<Div>
			<form>
				<h2>Sign In</h2>
				<input type="email" ref={emailRef} placeholder="Email" />
				<input type="password" ref={passwordRef} placeholder="Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="gray__text">New to Netflix? &nbsp;</span>

					<span className="link__text" onClick={register}>
						Sign up Now.
					</span>
				</h4>
			</form>
		</Div>
	);
}

export default SignUpScreen;

const Div = styled.div`
	max-width: 300px;
	padding: 40px 50px;
	margin-left: auto;
	margin-right: auto;
	background: rgba(0, 0, 0, 0.85);
	margin-top: -30px;

	form {
		display: grid;
		flex-direction: column;

		h2 {
			margin-bottom: 10px !important;
		}

		input {
			padding: 5px 10px;
			outline-width: 0;
			height: 40px;
			margin-bottom: 14px;
			border: none;
			border-radius: 5px;
		}

		button {
			padding: 16px 20px;
			font-size: 1rem;
			border: none;
			font-weight: 600;
			background: #e50914;
			cursor: pointer;
			color: #fff;
			margin-top: 10px;
			border-radius: 5px;
		}

		h4 {
			text-align: left;
			margin-top: 20px;
		}

		.gray__text {
			color: gray;
		}

		.link__text:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`;
