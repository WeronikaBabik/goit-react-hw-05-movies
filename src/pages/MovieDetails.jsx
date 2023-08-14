import { getMovieDetails } from 'components/Api/Api';
import MovieInformation from 'components/MovieInformation/MovieInformation';

const { Suspense, useState, useEffect } = require('react');
const {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  Link,
} = require('react-router-dom');

const MovieDetails = () => {
  const [details, setDetails] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? 'movies';

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setDetails(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [movieId]);

  const { title, poster_path, vote_average, overview, genres } = details;

  return (
    <div>
      <Link to={backLink}>Back to movies</Link>
      <div>
        <MovieInformation
          posterPath={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : 'No poster'
          }
          title={title}
          popularity={vote_average}
          overview={overview}
          genres={
            genres && genres.length > 0
              ? genres.map(({ name }) => name).join(', ') + '.'
              : 'No genres'
          }
        />
      </div>
      <div>
        <p>Additional information</p>
        <nav>
          <NavLink state={location.state} to="cast">
            Cast
          </NavLink>
          <NavLink state={location.state} to="reviews">
            Reviews
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
