// Імпорт axios
import axios from 'axios';

// Імпорт izitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт simplelightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//  Скрипти
const searchForm = document.querySelector('.form');
const galleryOfPictures = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

// Створення розмітки
async function createMarkup(value) {
  await axios.get('https://pixabay.com/api/').then(response => {
    console.log(response);
  });
  let markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
      <a  href="${largeImageURL}">
        <img 
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${likes}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${views}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${comments}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${downloads}</p>
        </div>
        </div>
      </li>`
    )
    .join('');
  loader.style.display = 'none';
  galleryOfPictures.innerHTML = markup;
  lightbox.refresh();
}

// Слухач форми
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  galleryOfPictures.innerHTML = '';
  const searchQuery = event.currentTarget.elements.delay.value.trim();
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning!',
      message: 'All fileds must be filled!',
      position: 'topRight',
    });
    galleryOfPictures.innerHTML = '';
    return;
  }
  loader.style.display = 'block';
  createMarkup(searchQuery);
});
