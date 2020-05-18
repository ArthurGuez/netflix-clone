import { fetchMovie, fetchNetflixOriginals, fetchTrending, fetchTopRated, fetchMoviesByGenre, fetchSearch, fetchTv } from "./apiService.js";

import { genres } from "./data.js";

import Header from "./components/Header.mjs";
import NetflixOriginals from './components/NetflixOriginals.mjs';
import Movies from './components/Movies.mjs';
import ModalTv from './components/ModalTv.mjs'
import ModalMovie from './components/ModalMovie.mjs'
import Search from './components/Search.mjs';

// Fonctions asynchrones pour les différentes sections de la homepage //

(async () => {
    let movie = await fetchMovie(6075);
    const header = document.getElementById("header");
    header.innerHTML = Header(movie);
    header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
})();

const allContainers = document.getElementsByClassName('movies__container');

(async () => {
  let tvNetflix = await fetchNetflixOriginals();
  const netflixContainer = allContainers[0];
  const covers = netflixContainer.getElementsByClassName('movies__container--movie-image');
  tvNetflix.forEach(netflixShow => {
    netflixContainer.innerHTML += NetflixOriginals(netflixShow);
    for (let i = 0; i < covers.length; i++) {
      covers[i].addEventListener('click', async function modal() {
        let id = tvNetflix[i].id;
        let netflixShow = await fetchTv(id);
        const modalContainer = document.getElementById('modal');
        modalContainer.innerHTML = '';
        modalContainer.innerHTML += ModalTv(netflixShow);
        const closeModal = document.getElementById('close-modal');
        closeModal.addEventListener('click', async () => {
          modalContainer.innerHTML = '';
        })
      })
    };
  });
  
})();

(async () => {
  let moviesTrending = await fetchTrending();
  const trendingContainer = allContainers[1];
  const covers = trendingContainer.getElementsByClassName('movies__container--movie-image');
  moviesTrending.forEach(trendingMovie => {
    trendingContainer.innerHTML += Movies(trendingMovie);
    for (let i = 0; i < covers.length; i++) {
      covers[i].addEventListener('click', async function modal() {
        let id = moviesTrending[i].id;
        let trendingMovie = await fetchMovie(id);
        const modalContainer = document.getElementById('modal');
        modalContainer.innerHTML = '';
        modalContainer.innerHTML += ModalMovie(trendingMovie);
        const closeModal = document.getElementById('close-modal');
        closeModal.addEventListener('click', async () => {
          modalContainer.innerHTML = '';
        })
      })
    };
  });
})();

(async () => {
  let topRatedMovies = await fetchTopRated();
  const topRatedContainer = allContainers[2];
  const covers = topRatedContainer.getElementsByClassName('movies__container--movie-image');
  topRatedMovies.forEach(topRatedMovie => {
    if (topRatedMovie.backdrop_path !== null) {
      topRatedContainer.innerHTML += Movies(topRatedMovie);
      for (let i = 0; i < covers.length; i++) {
        covers[i].addEventListener('click', async function modal() {
          let id = topRatedMovies[i].id;
          let topRatedMovie = await fetchMovie(id);
          const modalContainer = document.getElementById('modal');
          modalContainer.innerHTML = '';
          modalContainer.innerHTML += ModalMovie(topRatedMovie);
          const closeModal = document.getElementById('close-modal');
          closeModal.addEventListener('click', async () => {
            modalContainer.innerHTML = '';
          })
        })
      };
    };
  });
})();

(async () => {
  let actionMovies = await fetchMoviesByGenre(genres.find(genre => genre.name === 'Action').id);
  const actionContainer = allContainers[3];
  const covers = actionContainer.getElementsByClassName('movies__container--movie-image');
  actionMovies.forEach(actionMovie => {
    if (actionMovie.backdrop_path !== null) {
      actionContainer.innerHTML += Movies(actionMovie);
      for (let i = 0; i < covers.length; i++) {
        covers[i].addEventListener('click', async function modal() {
          let id = actionMovies[i].id;
          let actionMovie = await fetchMovie(id);
          const modalContainer = document.getElementById('modal');
          modalContainer.innerHTML = '';
          modalContainer.innerHTML += ModalMovie(actionMovie);
          const closeModal = document.getElementById('close-modal');
          closeModal.addEventListener('click', async () => {
            modalContainer.innerHTML = '';
          })
        })
      };
    };
  });
})();

(async () => {
  let comedyMovies = await fetchMoviesByGenre(genres.find(genre => genre.name === 'Comedy').id);
  const comedyContainer = allContainers[4];
  const covers = comedyContainer.getElementsByClassName('movies__container--movie-image');
  comedyMovies.forEach(comedyMovie => {
    if (comedyMovie.backdrop_path !== null) {
      comedyContainer.innerHTML += Movies(comedyMovie);
      for (let i = 0; i < covers.length; i++) {
        covers[i].addEventListener('click', async function modal() {
          let id = comedyMovies[i].id;
          let comedyMovie = await fetchMovie(id);
          const modalContainer = document.getElementById('modal');
          modalContainer.innerHTML = '';
          modalContainer.innerHTML += ModalMovie(comedyMovie);
          const closeModal = document.getElementById('close-modal');
          closeModal.addEventListener('click', async () => {
            modalContainer.innerHTML = '';
          })
        })
      };
    };
  });
})();

(async () => {
  let documentaryMovies = await fetchMoviesByGenre(genres.find(genre => genre.name === 'Documentary').id);
  const documentaryContainer = allContainers[5];
  const covers = documentaryContainer.getElementsByClassName('movies__container--movie-image');
  documentaryMovies.forEach(documentaryMovie => {
    if (documentaryMovie.backdrop_path !== null) {
      console.log(documentaryMovies);
      documentaryContainer.innerHTML += Movies(documentaryMovie);
      for (let i = 0; i < covers.length; i++) {
        covers[i].addEventListener('click', async function modal() {
          let id = documentaryMovies[i].id;
          let documentaryMovie = await fetchMovie(id);
          const modalContainer = document.getElementById('modal');
          modalContainer.innerHTML = '';
          modalContainer.innerHTML += ModalMovie(documentaryMovie);
          const closeModal = document.getElementById('close-modal');
          closeModal.addEventListener('click', async () => {
            modalContainer.innerHTML = '';
          })
        })
      };
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
