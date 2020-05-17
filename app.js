import { fetchMovie, fetchNetflixOriginals, fetchTrending, fetchTopRated, fetchMoviesByGenre, fetchSearch, fetchTv } from "./apiService.js";

import { genres } from "./data.js";

import Header from "./components/Header.mjs";
import NetflixOriginals from './components/NetflixOriginals.mjs';
import Movies from './components/Movies.mjs';
import Modal from './components/Modal.mjs'
import Search from './components/Search.mjs';

// Fonctions asynchrones pour les différentes sections de la homepage //

(async () => {
    let movie = await fetchMovie(6075);
    const header = document.getElementById("header");
    header.innerHTML = Header(movie);
    header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
})();

const allContainers = document.getElementsByClassName('movies__container');
const covers = document.getElementsByClassName('movies__container--movie-image');

(async () => {
  let tvNetflix = await fetchNetflixOriginals();
  const netflixContainer = allContainers[0];
  tvNetflix.forEach(netflixShow => {
  netflixContainer.innerHTML += NetflixOriginals(netflixShow);
  for (let i = 0; i < covers.length; i++) {
    covers[i].addEventListener('click', async function modal() {
      let id = tvNetflix[i].id;
      let netflixShow = await fetchTv(id);
      const modalContainer = document.getElementById('modal');
      modalContainer.innerHTML = '';
      modalContainer.innerHTML += Modal(netflixShow);
      const closeModal = modalContainer.getElementById('close-modal');
      console.log(netflixShow);
    })
  };
  });
  
})();

(async () => {
  let moviesTrending = await fetchTrending();
  const trendingContainer = allContainers[1];
  moviesTrending.forEach(trendingMovie => {
    trendingContainer.innerHTML += Movies(trendingMovie);
  });
})();

(async () => {
  let topRatedMovies = await fetchTopRated();
  const topRatedContainer = allContainers[2];
  topRatedMovies.forEach(topRatedMovie => {
    if (topRatedMovie.backdrop_path !== null) {
      topRatedContainer.innerHTML += Movies(topRatedMovie);
    };
  });
})();

(async () => {
  let actionMovies = await fetchMoviesByGenre(genres.find(genre => genre.name === 'Action').id);
  const actionContainer = allContainers[3];
  actionMovies.forEach(actionMovie => {
    if (actionMovie.backdrop_path !== null) {
      actionContainer.innerHTML += Movies(actionMovie);
    };
  });
})();

(async () => {
  let comedyMovies = await fetchMoviesByGenre(genres.find(genre => genre.name === 'Comedy').id);
  const comedyContainer = allContainers[4];
  comedyMovies.forEach(comedyMovie => {
    if (comedyMovie.backdrop_path !== null) {
      comedyContainer.innerHTML += Movies(comedyMovie);
    };
  });
})();

(async () => {
  let documentaryMovies = await fetchMoviesByGenre(genres.find(genre => genre.name === 'Documentary').id);
  const documentaryContainer = allContainers[5];
  documentaryMovies.forEach(documentaryMovie => {
    if (documentaryMovie.backdrop_path !== null) {
      documentaryContainer.innerHTML += Movies(documentaryMovie);
    };
  });
})();

// Fonction pour la partie recherche //

const searchInput = document.getElementsByClassName('navigation__container--left__input')[0];
const mainContainer = document.getElementsByClassName('container')[0];

const searchFunction = () => {
  searchInput.addEventListener('input', async (event) => {
    let searchResults = await fetchSearch(event.target.value);
    const searchContainer = allContainers[6];
    searchContainer.innerHTML = '';
    if (event.target.value.length >= 1) {
      mainContainer.style.display = 'none';
      searchResults.forEach(result => {
        if (result.profile_path !== null) {
          searchContainer.innerHTML += Search(result);
        }
      })
    } else {
      mainContainer.style.display = '';
    };
  })
};

searchFunction();

/* Autres méthodes */

//1
// (() => {
//   //Callback
//   const getResponse = (data) => {
//     return data;
//   };
//   try {
//     let movie = fetchMovie(157336, getResponse);
//     console.log(movie);
//     document.getElementById("header").innerHTML = Header(movie);
//     document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//   }
//   catch(e){
//     console.log(e)
//   }

// })();

//2
// (() => {
//     let movie = fetchMovie(157336).then(movie => {
//         console.log(movie)
//         document.getElementById("header").innerHTML = Header(movie);
//         document.getElementById("header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`;
//     })

// })();
