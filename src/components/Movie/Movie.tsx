import * as React from 'react';

export interface MovieData {
	Title: string;
	Year: string;
	Type: string;
	Poster: string;
}

function Movie(props: MovieData) {
	return <div>{props.Title}</div>;
}

export default Movie;
