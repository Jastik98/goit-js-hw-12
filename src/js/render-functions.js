export default function renderGallery(requestedHits, galleryNode) {
  let markup = '';

  requestedHits.forEach(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      markup += `<li class="gallery-item">
    <a class="gallery-item__link" href="${largeImageURL}">
    <img
    src="${webformatURL}"
    alt="${tags}"
    /></a>
    <ul class="image-descr">
    <li>
      <span>Likes</span>
      <span>${likes}</span>
    </li>
    <li>
      <span>Views</span>
      <span>${views}</span>
    </li>
    <li>
      <span>Comments</span>
      <span>${comments}</span>
    </li>
    <li>
      <span>Downloads</span>
      <span>${downloads}</span>
    </li>
  </ul>
  </li>`;
    }
  );

  galleryNode.insertAdjacentHTML('beforeend', markup);
}
