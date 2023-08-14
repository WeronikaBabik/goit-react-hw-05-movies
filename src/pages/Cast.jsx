import { getMovieCredits } from 'components/Api/Api';
import ListOfCast from 'components/ListOfCast/ListOfCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getMovieCredits(movieId);
        const data = response.cast;
        setCredits(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [movieId]);
  if (!credits) {
    return;
  }

  return (
    <div>
      <ListOfCast casts={credits} />
    </div>
  );
};

export default Cast;
