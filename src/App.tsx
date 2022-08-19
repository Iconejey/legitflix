import React, { useState, useEffect, ChangeEvent } from 'react';

import './App.css';

// Components
import FilterBtn from './components/FilterBtn/FilterBtn';
import Movie, { MovieData } from './components/Movie/Movie';

interface MovieFetchResult {
	Search: MovieData[];
	totalResults: number;
	Response: string;
}

function App() {
	// Movies array
	const [movies, setMovies] = useState([] as MovieData[]);
	const [total, setTotal] = useState(0);

	// Timeout for fetching data
	let timeout: NodeJS.Timeout;

	// Ontype for search input
	const ontype = (e: ChangeEvent) => {
		// Get input and its value
		const input = e.target as HTMLInputElement;
		const value = input.value.trim();

		// If value is empty, return
		if (!value) return;

		// Clear timeout
		clearTimeout(timeout);
		// Set timeout
		timeout = setTimeout(async () => {
			// Fetch movies
			const res = await fetch(`http://www.omdbapi.com/?apikey=930cb012&s=${value}`);
			const data = (await res.json()) as MovieFetchResult;

			console.log(data);

			// Set movies total
			setMovies(data.Search);
			setTotal(data.totalResults);
		}, 500);
	};

	return (
		<div id="app">
			<header>
				<h1>
					LegIt<span className="yellow">Flix</span>
				</h1>

				<div id="search-area">
					<div id="search-text">
						<i className="icon">search</i>
						<input type="search" placeholder="Search" onChange={ontype} />
					</div>

					<div id="search-filters">
						<FilterBtn id="type" text="Films et Séries" onClick={() => console.log('type')} />
						<FilterBtn id="year" text="Filtrer par année" onClick={() => console.log('year')} />
					</div>
				</div>
			</header>

			<main>
				<span id="total-results">{total} results</span>

				<div id="movies">
					{movies.map(movie => (
						<Movie Title={movie['Title']} Year={movie['Year']} Type={movie['Type']} Poster={movie['Poster']} />
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
