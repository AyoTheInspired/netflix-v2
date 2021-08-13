import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Nav from "./Nav";

function HomeScreen() {
	return (
		<Div>
			<Nav />
			<Banner />
		</Div>
	);
}

export default HomeScreen;

const Div = styled.div``;
