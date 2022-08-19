import * as React from 'react';
import './Movie.css';

export interface MovieData {
	Title: string;
	Year: string;
	Type: string;
	Poster: string;
}

function Movie(props: MovieData) {
	return <img className="movie" src={props.Poster} alt="" />;
}

export default Movie;
