import axios from 'axios';

export default function fetchingGallery() {
  let pageNumber = 1;
  const numberChoose = 15;

  async function fetchingGalleryPage(userRequest) {
    const searchParams = new URLSearchParams({
      key: '43477228-b93f3de915bee922623f7f3db',
      q: userRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageNumber,
      per_page: numberChoose,
    });

    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );

    pageNumber++;

    const { hits, totalHits } = response.data;

    const pageLimit = Math.ceil(totalHits / numberChoose);
    const lastPage = pageNumber > pageLimit;
    return { hits, lastPage };
  }
  function resetLastPageNumber() {
    pageNumber = 1;
  }
  return { fetchingGalleryPage, resetLastPageNumber };
}
