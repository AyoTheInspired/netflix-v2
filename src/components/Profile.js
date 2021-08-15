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
							<h3>Plans</h3>

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

const Div = styled.div`
	height: 100vh;
	color: #fff;

	.profileScreen__body {
		display: flex;
		flex-direction: column;
		width: 50%;
		margin-left: auto;
		margin-right: auto;
		padding-top: 8%;
		max-width: 800px;

		h1 {
			font-size: 60px;
			font-weight: 400;
			border-bottom: 1px solid #282c2d;
			margin-bottom: 20px;
		}
	}

	.profileScreen__info {
		display: flex;

		img {
			height: 100px;
		}
	}

	.profileScreen__details {
		color: #fff;
		margin-left: 25px;
		flex: 1;

		h2 {
			background-color: gray;
			padding: 15px;
			font-size: 15px;
			padding-left: 20px;
		}
	}

	.profileScreen__plans {
		margin-top: 20px;
		h3 {
			border-bottom: 1px solid #282c2d;
			padding-bottom: 10px;
		}
	}

	.profileScreen__signOut {
		padding: 10px 20px;
		font-size: 1rem;
		margin-top: 5%;
		width: 100%;
		color: #fff;
		background: #e50914;
		font-weight: 600;
		border: none;
		cursor: pointer;
	}
`;
