import React, { useState } from "react";
import styled from "styled-components";
import LoginTop from "./LoginTop";
import LoginMid from "./LoginMid";

function LoginScreen() {
	return (
		<Div>
			<LoginTop />
			<LoginMid />
		</Div>
	);
}

export default LoginScreen;

const Div = styled.div``;
