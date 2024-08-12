import PropTypes from 'prop-types';

// import hooks
import { useState } from 'react';

// import components
import MovieCard from './MovieCard';

// import css
import './MovieList.css';

export default function MovieList({ movies, watchlist, toggleWatchlist }) {
	const [searchTerm, setSearchTerm] = useState('');
	const [genre, setGenre] = useState('All Genres');
	const [rating, setRating] = useState('All');

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleGenreChange = (e) => {
		setGenre(e.target.value);
	};

	const handleRatingChange = (e) => {
		setRating(e.target.value);
	};

	const matchesGenre = (movie, genre) => {
		return genre === 'All Genres' || movie.genre.toLowerCase() === genre.toLowerCase();
	};

	const matchesSearchTerm = (movie, searchTerm) => {
		return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
	};

	const matchesRating = (movie, rating) => {
		switch (rating) {
			case 'All':
				return true;
			case 'Good':
				return movie.rating >= 8;
			case 'OK':
				return movie.rating >= 6 && movie.rating < 8;
			case 'Poor':
				return movie.rating < 6;
			default:
				return false;
		}
	};

	const filteredMovies = movies.filter(
		(movie) => matchesGenre(movie, genre) && matchesRating(movie, rating) && matchesSearchTerm(movie, searchTerm)
	);

	return (
		<div className='movies-container'>
			<input
				className='search-input'
				type='text'
				placeholder='Search for movie...'
				value={searchTerm}
				onChange={handleSearchChange}
			/>

			<div className='filter-bar'>
				<div className='filter-slot'>
					<label htmlFor='genre'>Genre</label>
					<select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
						<option>All Genres</option>
						<option>Comedy</option>
						<option>Fantasy</option>
						<option>Drama</option>
						<option>Horror</option>
						<option>Sci-Fi</option>
						<option>Thriller</option>
						<option>War</option>
					</select>
				</div>
				<div className='filter-slot'>
					<label htmlFor='rating'>Rating</label>
					<select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
						<option>All</option>
						<option>Good</option>
						<option>OK</option>
						<option>Poor</option>
					</select>
				</div>
			</div>

			<div className='movie-list'>
				{filteredMovies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
						toggleWatchlist={toggleWatchlist}
						isWatchlisted={watchlist.includes(movie.id)}
					/>
				))}
			</div>
		</div>
	);
}

MovieList.propTypes = {
	movies: PropTypes.array,
	watchlist: PropTypes.array,
	toggleWatchlist: PropTypes.func,
};
