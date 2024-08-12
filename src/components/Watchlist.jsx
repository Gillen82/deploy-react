import PropTypes from 'prop-types';

import './Watchlist.css';
import MovieCard from './MovieCard';

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
	return (
		<div className='watchlist'>
			<h1 className='watchlist-title'>Your Watchlist</h1>
			<div className='watchlist-movies'>
				{watchlist.map((id) => {
					const movie = movies.find((movie) => movie.id === id);
					return <MovieCard key={id} movie={movie} toggleWatchlist={toggleWatchlist} isWatchlisted={true} />;
				})}
			</div>
		</div>
	);
}

Watchlist.propTypes = {
	movies: PropTypes.array,
	watchlist: PropTypes.array,
	toggleWatchlist: PropTypes.func,
};
