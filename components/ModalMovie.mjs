export default function ModalMovie(props) {
  return `
  <div class="modal-container" style="background-image: url(https://image.tmdb.org/t/p/original${props.backdrop_path})">
  <button id="close-modal" class="modal-close">X</button>
  <div class="modal-details">
    <div class="modal-title">
      <h1>${props.original_title}</h1>
    </div>
    <div class="modal-infos">
      <span class="modal-rating">Rating: ${props.vote_average*10}%</span>
      <span class="modal-date">Release date: ${props.release_date}</span>
      <span class="modal-date">Runtime: ${props.runtime}min</span>
      </div>
    <div class="modal-description">
      <p>${props.overview}</p>
    </div>
    <button class="modal-button">PLAY</button>
    <button class="modal-button">+ MY LIST</button>
  </div>
</div>
        `;
}
