import { PropTypes } from 'prop-types';
import css from './ListOfMovies.module.css';

import { Link, useLocation } from 'react-router-dom';

const ListOfMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.ListOfMovies}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
            {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOfMovies;

ListOfMovies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
