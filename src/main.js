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
const loadButton = document.querySelector('.load');
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

let page = 1;
let perPage = 40;

// Функція запиту на сервер та параметри запиту
async function fetchPosts(value, page) {
  const params = new URLSearchParams({
    key: '41859392-e5bc4a8d4ece805d6453ecbd7',
    q: value,
    per_page: perPage,
    page,
  });
  const response = await axios.get(`https://pixabay.com/api/?${params}`);

  if (response.data.hits.length === 0) {
    iziToast.error({
      title: 'Error!',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    galleryOfPictures.innerHTML = '';
    return;
  }
  return response;
}

// Функція для створення галереї
async function createGallery(value) {
  const markup = await value.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `<li class="gallery-item">
    <a  href="${largeImageURL}">
    <img 
    class="gallery-image"
    src="${webformatURL}"
    alt="${tags}"
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
  );
  return markup.join('');
}

// Слухач форми
searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  page = 1;
  galleryOfPictures.innerHTML = '';
  const searchQuery = event.currentTarget.elements.delay.value.trim();
  loader.style.display = 'block';
  if (searchQuery === '') {
    iziToast.warning({
      title: 'Warning!',
      message: 'All fileds must be filled!',
      position: 'topRight',
    });
    galleryOfPictures.innerHTML = '';
    loader.style.display = 'none';
    loadButton.style.display = 'none';
    return;
  }
  try {
    const response = await fetchPosts(searchQuery, page);
    if (response) {
      const gallery = await createGallery(response.data.hits);
      galleryOfPictures.innerHTML = gallery;
      lightbox.refresh();
      loadButton.style.display = 'block';
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error!',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    loadButton.style.display = 'none';
  } finally {
    loader.style.display = 'none';
    event.target.reset();
  }
});

//  Слухач для кнопки Load more
loadButton.addEventListener('click', async event => {
  page += 1;
  const searchQuery = searchForm.elements.delay.value.trim();
  const result = await fetchPosts(searchQuery, page);
  const maxPage = Math.ceil(result.data.totalHits / perPage);

  if (page > maxPage || result.data.totalHits.length === 0) {
    loadButton.style.display = 'none';
    iziToast.info({
      title: 'Info!',
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
    return;
  }

  try {
    if (result) {
      const gallery = await createGallery(result.data.hits);
      galleryOfPictures.innerHTML += gallery;
      lightbox.refresh();
      const galleryItemHeight = document
        .querySelector('.gallery-item')
        .getBoundingClientRect().height;
      window.scrollBy({
        top: galleryItemHeight * 2,
        behavior: 'smooth',
      });

      loadButton.style.display = 'block';
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error!',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  } finally {
    loader.style.display = 'none';
  }
});
