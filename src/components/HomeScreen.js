import React from "react";
import styled from "styled-components";
import requests from "../requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function HomeScreen() {
	return (
		<Div>
			<Nav />
			<Banner />
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTrending} />
			<Row title="Action" fetchUrl={requests.fetchTopRated} />
			<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />{" "}
		</Div>
	);
}

export default HomeScreen;

const Div = styled.div``;
