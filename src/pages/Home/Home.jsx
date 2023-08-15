import { getTrending } from 'components/Api/Api';
import ListOfMovies from 'components/ListOfMovies/ListOfMovies';

import { useEffect, useState } from 'react';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getTrending();
        setTrending(response.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <h1 style={{ padding: 10 }}>Trending today</h1>
      <ListOfMovies movies={trending} />
    </div>
  );
};

export default Home;
