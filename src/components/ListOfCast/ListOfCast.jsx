import { PropTypes } from 'prop-types';
import css from './ListOfCast.module.css';

const ListOfCast = ({ casts }) => {
  return (
    <div>
      <ul>
        {casts.map(({ profile_path, name, character, id }) => (
          <li key={id} className={css.actor}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : 'No image'
              }
              alt={name}
              width="342"
              height="513"
            ></img>
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCast;

ListOfCast.propTypes = {
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
