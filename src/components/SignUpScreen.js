import React from "react";
import styled from "styled-components";

function SignUpScreen() {
	return (
		<Div>
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>
			</form>
		</Div>
	);
}

export default SignUpScreen;

const Div = styled.div`
	max-width: 300px;
	padding: 70px;
	margin-left: auto;
	margin-right: auto;
	background: rgba(0, 0, 0, 0.85);

	form {
		display: grid;
		flex-direction: column;

		input {
			padding: 5px 10px;
			outline-width: 0;
			height: 40px;
			margin-bottom: 14px;
			border: none;
		}
	}
`;
