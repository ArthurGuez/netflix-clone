export default function Search(props) {
    return `
      <div class="search-movie">
        <img src="https://image.tmdb.org/t/p/w500${props.poster_path || props.profile_path}" class="movies__container--movie-image"/>
      </div>
          `;
  }