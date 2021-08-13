import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);

		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);

	return (
		<Div className={show && "nav__black"}>
			<div className="nav__contents">
				<img
					className="nav__logo"
					src="https://res.cloudinary.com/ayotheinspired/image/upload/v1620819859/random-images/Logonetflix_bqzef0.png"
					alt=""
				/>
				<img className="nav__avatar" src="/smiley.png" alt="" />
			</div>
		</Div>
	);
}

export default Nav;

const Div = styled.div`
	position: fixed;
	top: 0;
	padding: 20px;
	width: 100%;
	height: 30px;
	z-index: 1;

	transition-timing-function: ease-in;
	transition: all 0.5s;

	&.nav__black {
		background-color: #111;
	}

	.nav__contents {
		display: flex;
		justify-content: space-between;
	}

	.nav__logo {
		position: fixed;
		left: 0;
		width: 80px;
		object-fit: contain;
		padding-left: 20px;
		cursor: pointer;
	}

	.nav__avatar {
		position: fixed;
		right: 20px;
		width: 30px;
		cursor: pointer;
	}
`;
