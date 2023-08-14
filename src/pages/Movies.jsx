import { getBySearch } from 'components/Api/Api';
import ListOfMovies from 'components/ListOfMovies/ListOfMovies';
import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';
  useEffect(() => {
    if (!movieName) {
      return;
    }
    const fetch = async () => {
      try {
        const response = await getBySearch(movieName);
        setSearchMovies(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [movieName]);

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <div>
      <SearchBox value={movieName} onChange={updateQueryString} />
      {searchMovies.length > 0 ? (
        <ListOfMovies movies={searchMovies} />
      ) : searchMovies && searchMovies.length === 0 ? (
        <p>Oops, there is no movie with that name</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Movies;
