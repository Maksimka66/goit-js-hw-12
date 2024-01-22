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
let searchQuery;
let lastPage;
let galleryItemHeight;

// Функція запиту на сервер та параметри запиту
async function fetchPosts(value, page) {
  const params = new URLSearchParams({
    key: '41859392-e5bc4a8d4ece805d6453ecbd7',
    q: value,
    per_page: perPage,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response;
}

// Функція для створення галереї
function createGallery(value) {
  const markup = value.map(
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
    width="360";
    height="200";
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
  loader.style.display = 'block';
  searchQuery = searchForm.elements.delay.value.trim();
  page = 1;
  if (searchQuery === '') {
    loadButton.style.display = 'none';
    galleryOfPictures.innerHTML = '';
    loader.style.display = 'none';
    iziToast.warning({
      title: 'Warning!',
      message: 'All fields must be filled!',
      position: 'topRight',
    });
    return;
  }
  try {
    loader.style.display = 'block';
    galleryOfPictures.insertAdjacentElement('beforebegin', loader);
    const {
      data: { hits, totalHits },
    } = await fetchPosts(searchQuery, page);
    if (hits.length === 0) {
      loader.style.display = 'none';
      loadButton.style.display = 'none';
      iziToast.error({
        title: 'Error!',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      galleryOfPictures.innerHTML = '';
      return;
    } else {
      galleryOfPictures.innerHTML = createGallery(hits);
      lightbox.refresh();
      loader.style.display = 'none';
      loadButton.style.display = 'block';
      lastPage = Math.ceil(totalHits / perPage);
      galleryItemHeight = document
        .querySelector('.gallery-item:first-child')
        .getBoundingClientRect().height;
    }
    if (page === lastPage) {
      loadButton.style.display = 'none';
      iziToast.info({
        title: 'Info!',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
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
loadButton.addEventListener('click', async () => {
  page += 1;
  loadButton.style.display = 'none';
  try {
    loader.style.display = 'block';
    const result = await fetchPosts(searchQuery, page);

    if (page === lastPage) {
      iziToast.info({
        title: 'Info!',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    } else {
      galleryOfPictures.insertAdjacentElement('afterend', loader);
      const newGalleryItems = await createGallery(result.data.hits);
      galleryOfPictures.innerHTML += newGalleryItems;
      lightbox.refresh();
      const newGalleryItemHeight = document
        .querySelector('.gallery-item:last-child')
        .getBoundingClientRect().height;
      window.scrollBy({
        top: newGalleryItemHeight * 2,
        behavior: 'smooth',
      });
      loadButton.style.display = 'block';
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error!',
      message:
        'Sorry, there was an error processing your request. Please try again!',
      position: 'topRight',
    });
    loadButton.style.display = 'none';
  } finally {
    loader.style.display = 'none';
  }
});
