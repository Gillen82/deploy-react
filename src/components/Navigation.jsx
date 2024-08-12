import { Link } from 'react-router-dom';

// import
import './Navigation.css';

export default function Navigation() {
	return (
		<nav className='main-nav'>
			<Link className='nav-link' to={'/'}>
				Home
			</Link>
			<Link className='nav-link' to={'/watchlist'}>
				Watchlist
			</Link>
		</nav>
	);
}
