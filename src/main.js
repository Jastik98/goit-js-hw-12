import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchingGallery from './js/pixabay-api';
import renderGallery from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const userRequest = event.target.elements.requestValue.value.trim();
  if (!userRequest) {
    return;
  }
  galleryList.innerHTML = '<span class="loader"></span>';

  fetchingGallery(userRequest)
    .then(process => {
      if (!process.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryList.innerHTML = '';

        return;
      }
      setTimeout(() => {
        renderGallery(process, galleryList);
        galleryLightbox.refresh();
      }, 1000);
    })
    .catch(error => console.error(error));

  searchForm.reset();
});
