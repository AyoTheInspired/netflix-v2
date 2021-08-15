import React, { useState } from "react";
import styled from "styled-components";
import LoginTop from "./LoginTop";
import LoginMid from "./LoginMid";
import LoginBottom from "../LoginBottom";

function LoginScreen() {
	return (
		<Div>
			<LoginTop />
			<LoginMid />
			<LoginBottom />
		</Div>
	);
}

export default LoginScreen;

const Div = styled.div``;
