import { getMovieReviews } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await getMovieReviews(movieId);
        const data = response;
        setReviews(data.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [movieId]);
  if (!reviews) {
    return;
  }

  return (
    <ul>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content} </p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
