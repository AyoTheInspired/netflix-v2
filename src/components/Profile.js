import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";

function Profile() {
	const user = useSelector(selectUser);

	return (
		<Div>
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img src="/smiley.png" alt="smiley" />
					<div className="profileScreen__details">
						<h2> {user.email} </h2>
						<div className="profileScreen__plans">
							<button
								onClick={() => auth.signOut()}
								className="profileScreen__signOut">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</Div>
	);
}

export default Profile;

const Div = styled.div``;
