import { PropTypes } from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

const ListOfMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
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
