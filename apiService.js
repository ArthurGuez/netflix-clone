const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "efbd136e89c83ddcf195e48a61327f4a";

//3
export async function fetchMovie(movieId) {
  const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
  let res = await fetch(url);
  let movie = await res.json();
  return movie;
}

export async function fetchNetflixOriginals() {
  const url = `${API_URL}discover/tv?api_key=${API_KEY}&with_networks=213`;
  let res = await fetch(url);
  let tvNetflix = await res.json()
  return tvNetflix.results;
}

export async function fetchTrending() {
  const url = `${API_URL}trending/movie/week?api_key=${API_KEY}`;
  let res = await fetch(url);
  let moviesTrending = await res.json();
  return moviesTrending.results;
}

export async function fetchTopRated() {
  const url = `${API_URL}movie/top_rated?api_key=${API_KEY}`;
  let res = await fetch(url);
  let topRatedMovies = await res.json();
  return topRatedMovies.results;
}

export async function fetchMoviesByGenre(genre) {
  const url = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=${genre}`;
  let res = await fetch(url);
  let moviesByGenre = await res.json();
  return moviesByGenre.results;
}

export async function fetchSearch(query) {
  const url = `${API_URL}search/multi?api_key=${API_KEY}&query=${query}&include_adult=false`;
  let res = await fetch(url);
  let searchResults = await res.json();
  return searchResults.results;
}

/* Autres méthodes */

//1
// export function fetchMovie(movieId, cb) {
//   const url = ``;

//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       return cb(JSON.parse(xhr_object.responseText));
//     }
  
// }

//2
// export default function fetchMovie(movieId) {
//   const url = ``;

//   return new Promise((resolve, reject) => {
//     var xhr_object = new XMLHttpRequest();
//     xhr_object.open("GET", url, false);
//     xhr_object.send(null);

//     if (xhr_object.readyState == 4) {
//       resolve(JSON.parse(xhr_object.responseText));
//     }
//   });
// }

// export default function fetchMovie(movieId) {
//   const url = ``;
//   return fetch(url).then(res => {
//     return res.json()
//   }).then(movie => {
//       return movie;
//   })
// }
