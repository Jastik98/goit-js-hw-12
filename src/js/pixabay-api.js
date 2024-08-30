export default function fetchingGallery(userRequest) {
  const searchParams = new URLSearchParams({
    key: '43477228-b93f3de915bee922623f7f3db',
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const { hits } = data;
      return hits;
    });
}
