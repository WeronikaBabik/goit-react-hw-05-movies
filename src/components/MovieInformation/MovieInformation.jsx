import { PropTypes } from 'prop-types';
import css from './MovieInformation.module.css';

const MovieInformation = ({
  posterPath,
  title,
  popularity,
  overview,
  genres,
}) => {
  const score = Math.floor(popularity * 10);
  return (
    <div className={css.movieInformation}>
      <div className={css.imageOfMovie}>
        <img src={posterPath} alt={title}></img>
      </div>
      <div className={css.infoAboutMovie}>
        <h1>{title}</h1>
        <p>User Score: {score}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres}</p>
      </div>
    </div>
  );
};

export default MovieInformation;

MovieInformation.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
};
