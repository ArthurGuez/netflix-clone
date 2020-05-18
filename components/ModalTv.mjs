export default function Modal(props) {
  return `
  <div class="modal-container" style="background-image: url(https://image.tmdb.org/t/p/original${props.backdrop_path})">
  <button id="close-modal" class="modal-close">X</button>
  <div class="modal-details">
    <div class="modal-title">
      <h1>${props.name}</h1>
    </div>
    <div class="modal-infos">
      <span class="modal-rating">Rating: ${props.vote_average*10}%</span>
      <span class="modal-date">Release date: ${props.first_air_date}</span>
      <span class="modal-episodes">${props.number_of_seasons} season(s)</span>
      <span class="modal-seasons">${props.number_of_episodes} episode(s)</span>
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
