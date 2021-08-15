import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);

	const base_url = `https://image.tmdb.org/t/p/original/`;

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			console.log(request.data.results);
			return request;
		}

		fetchData();
	}, [fetchUrl]);

	return (
		<Div>
			<h2>{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie, id) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<div className="movie__wrap">
								<img
									className={`row__poster ${isLargeRow && "row__posterLarge"}`}
									src={`${base_url}${
										isLargeRow ? movie.poster_path : movie.backdrop_path
									}`}
									alt={movie.id}
									key={id + 1}
								/>
								{/* <div className="movie__details">
									<h5> {movie.original_name} </h5>
								</div> */}
							</div>
						)
				)}
			</div>
		</Div>
	);
}

export default Row;

const Div = styled.div`
	color: #fff;
	margin-left: 20px;

	.row__posters {
		display: flex;
		overflow-y: hidden;
		overflow-x: scroll;
		padding: 20px;
	}

	.row__posters::-webkit-scrollbar {
		display: none;
	}

	.row__poster {
		max-height: 100px;
		object-fit: contain;
		margin-right: 10px;
		width: 100%;
		transition: transform 450ms;

		&:hover {
			transform: scale(1.08);
			box-shadow: 0px -1px 1px rgba(255, 255, 255, 0.9);
		}
	}

	.row__posterLarge {
		max-height: 250px;
		margin-right: 5px;
		cursor: pointer;

		&:hover {
			transform: scale(1.09);
			box-shadow: 0px -2px 5px rgba(255, 255, 255, 0.9);
		}
	}

	.movie__wrap {
		h5 {
			font-size: 10px;
			margin-top: -20px;
		}
	}
`;
