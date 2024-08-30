import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchingGallery from './js/pixabay-api';
import renderGallery from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('button[data-load]');

const { fetchingGalleryPage, resetLastPageNumber } = fetchingGallery();
let userRequest = '';

const galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Кнопка seach
searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  userRequest = event.target.elements.requestValue.value.trim();

  if (!userRequest) {
    return;
  }

  resetLastPageNumber();
  clearGallery();
  showLoader(searchForm);
  hideLoadMoreBtn();

  try {
    const { hits: firstPage, isLastPage } = await fetchingGalleryPage(
      userRequest
    );

    if (!firstPage.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      removeLoader();

      return;
    }

    renderGallery(firstPage, galleryList);
    galleryLightbox.refresh();

    removeLoader();
    showLoadMoreBtn(isLastPage);
  } catch (error) {
    console.error(error);

    iziToast.error({
      message: 'Ooops! Something went wrong. Try again later',
      position: 'topRight',
    });

    removeLoader();
  }
  searchForm.reset();
});
// Кнопка Лоад Моо
loadMoreBtn.addEventListener('click', async () => {
  showLoader(galleryList);
  hideLoadMoreBtn();
  const { hight: itemHight } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();

  try {
    const { hits: nextPage, lastPage } = await fetchingGalleryPage(userRequest);
    removeLoader();
    renderGallery(nextPage, galleryList);
    galleryLightbox.refresh();
    window.scrollBy(0, itemHight * 2);
    showLoadMoreBtn(lastPage);
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Ooops! Something went wrong. Try again later',
      position: 'topRight',
    });

    removeLoader();
  }
});

function showLoader(loader) {
  loader.insertAdjacentHTML('afterend', `<span class="loader"></span>`);
}
function removeLoader(loaderNode = document.querySelector('.loader')) {
  if (loaderNode) {
    loaderNode.remove();
  }
}
function showLoadMoreBtn(lastPage) {
  if (loadMoreBtn.classList.contains('visually-hidden')) {
    if (lastPage) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      loadMoreBtn.classList.remove('visually-hidden');
    }
  }
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('visually-hidden');
}

function clearGallery() {
  galleryList.innerHTML = '';
}
