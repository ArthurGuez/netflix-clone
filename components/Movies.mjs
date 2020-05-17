export default function Movies(props) {
  return `
    <div class="movies__container--movie">
      <img src="https://image.tmdb.org/t/p/original${props.backdrop_path}" class="movies__container--movie-image"/>
    </div>
        `;
}
