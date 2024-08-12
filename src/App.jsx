// import libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import hooks
import { useState, useEffect } from 'react';

// import components
import Header from './components/Header';
import Navigation from './components/Navigation';
import MovieList from './components/MovieList';
import Watchlist from './components/Watchlist';
import Footer from './components/Footer';
import movies_list from './../data/data';

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watchlist, setWatchlist] = useState([]);

	const getMoviesData = (movies_list) => {
		setMovies(movies_list);
	};

	useEffect(() => {
		getMoviesData(movies_list);
	}, []);

	const toggleWatchlist = (movieId) => {
		setWatchlist((prev) => (prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]));
	};

	return (
		<div>
			<Header />

			<Router>
				<Navigation />
				<Routes>
					<Route
						path='/'
						element={
							<MovieList movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
						}></Route>
					<Route
						path='/watchlist'
						element={<Watchlist movies={movies} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}
					/>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}
