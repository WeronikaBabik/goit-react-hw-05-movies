import Notiflix from 'notiflix';

const API_KEY = `d793dd4ca6e7be6c8e5a071661ccb72e`;
const API_URL = `https://api.themoviedb.org/3`;

async function getTrending() {
  const response = await fetch(
    `${API_URL}/trending/all/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    return Notiflix.Notify.failure('There is no movie');
  }
  const results = await response.json();
  return results;
}
async function getBySearch(query, currentPage = 1) {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${currentPage}`
  );
  if (!response.ok) {
    return Notiflix.Notify.failure('Oops, there is no movie with that name');
  }
  const data = await response.json();
  return data;
}
async function getMovieDetails(id) {
  const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!response.ok) {
    return Notiflix.Notify.failure('Oops, there is no movie with that name');
    // if (!id) {
    //   return Notiflix.Notify.failure('Oops, there is no movie with that name');
    // }
  }
  const data = await response.json();
  return data;
}

async function getMovieCredits(id) {
  const response = await fetch(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    return Notiflix.Notify.failure('Oops, there is no movie with that name');
    //   if (id === 'undefined') {
    //   //reject(Notiflix.Notify.failure('Oops, there is no movie with that name'));
    //   console.log('error');
    // }
  }
  const data = await response.json();
  return data;
}

async function getMovieReviews(id) {
  const response = await fetch(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) {
    return Notiflix.Notify.failure('Oops, there is no movie with that name');

    // if (id === 'undefined') {
    //   //reject(Notiflix.Notify.failure('Oops, there is no movie with that name'));
    //   console.log('error');
    // }
  }
  const data = await response.json();
  return data;
}

export {
  getTrending,
  getBySearch,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
