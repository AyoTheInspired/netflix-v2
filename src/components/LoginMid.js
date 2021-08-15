import React from "react";
import styled from "styled-components";

function LoginMid() {
	return (
		<Div>
			<div className="row__wrap">
				<div className="row__text">
					<h1 className="row__text-title">Enjoy on your TV.</h1>
					<h4 className="row__text-subtitle">
						Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more.
					</h4>
				</div>
				<div className="row__image-wrap withVideo">
					<img src="/tv.png" className="row__image" width="450" alt="screen" />
					<div className="animation__wrap">
						<video
							autoPlay="true"
							playsInline
							muted
							loop
							className="the__video">
							<source src="/video-slide.m4v" type="video/mp4" />
						</video>
					</div>
				</div>
			</div>
			<div className="row__wrap">
				<div className="row__image-wrap">
					<img
						src="/mobile.jpg"
						alt="mobile"
						className="row__image-pad"
						width="450"
					/>
				</div>
				<div className="row__text">
					<h1 className="row__text-title">
						Download your shows to watch offline.
					</h1>

					<h3 className="row__text-subtitle">
						Save your favorites easily and always have something to watch.
					</h3>
				</div>
			</div>
			<div className="row__wrap">
				<div className="row__text">
					<h1 className="row__text-title">Watch everywhere.</h1>

					<h3 className="row__text-subtitle">
						Stream unlimited movies and TV shows on your phone, tablet, laptop,
						and TV.
					</h3>
				</div>
				<div className="row__image"></div>
			</div>
			<div className="row__wrap">
				<div className="row__image">
					<img src="/kids.png" alt="kids" width="450" />
				</div>
				<div className="row__text">
					<h1 className="row__text-title">Create profiles for Kids.</h1>

					<h3 className="row__text-subtitle">
						Send kids on advenures with their favorite characters in a space
						made just for them - free with your membership.
					</h3>
				</div>
			</div>
		</Div>
	);
}

export default LoginMid;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	background: rgba(0, 0, 0, 0.9);

	.row__wrap {
		padding: 30px 70px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		border-top: 8px solid #222;
	}

	.row__text {
		color: #fff;
		max-width: 600px;

		h1 {
			font-size: 50px;
			margin-bottom: 18px;
		}

		.row__text-subtitle {
			font-size: 26px;
		}
	}

	.row__image-wrap.withVideo {
		position: relative;
		z-index: 2;

		.animation__wrap {
			display: flex;
			justify-content: center;
			align-items: center;

			.the__video {
				position: absolute;
				top: 72px;
				max-width: 325px !important;
				z-index: -1;
			}
		}
	}

	@media (max-width: 768px) {
		.row__wrap {
			justify-content: center;
		}

		.row__text {
			margin-bottom: 35px;
			text-align: center;

			h1 {
				margin-bottom: 15px;
			}
		}
	}
`;
