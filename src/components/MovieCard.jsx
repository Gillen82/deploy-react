import PropTypes from 'prop-types';

// import css
import './MovieCard.css';
// import Watchlist from './Watchlist';

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
	console.log(`Is Listed: ${isWatchlisted}`);

	const getMovieRating = (rating) => {
		if (rating >= 8) {
			return 'movie-good';
		} else if (rating >= 6) {
			return 'movie-average';
		} else {
			return 'movie-poor';
		}
	};

	return (
		<div key={movie.id} className='movie-card'>
			<img className='movie-image' src={movie.image} alt={movie.title} />
			<h3 className='movie-title'>{movie.title}</h3>
			<div className='movie-banner'>
				<div className='movie-details'>
					<p className='movie-genre'>{movie.genre}</p>
					<p className={getMovieRating(movie.rating)}>{movie.rating}</p>
				</div>
				<div className='switch'>
					<label className='switch'>
						<input type='checkbox' checked={isWatchlisted} onChange={() => toggleWatchlist(movie.id)} />
						<span className='slider'>
							<p className={isWatchlisted ? 'add' : 'remove'}>
								{isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
							</p>
						</span>
					</label>
				</div>
			</div>
		</div>
	);
}

MovieCard.propTypes = {
	movie: PropTypes.object,
	isWatchlisted: PropTypes.bool,
	toggleWatchlist: PropTypes.func,
};
