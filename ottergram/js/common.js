const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';//увеличенное изображение
const DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
const THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
let firstThumbnail = document.querySelector(THUMBNAIL_LINK_SELECTOR);



function setDetails(imageUrl, titleText) {
  let detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  let detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);
  detailTitle.textContent = titleText;
}
function imageFromThumb(thumbnail){
  return thumbnail.getAttribute('data-image-url');
}
function titleFromThumb(thumbnail){
  return thumbnail.getAttribute('data-image-title');
}
function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
function addThumbClickHandler(thumb){
  thumb.addEventListener('click', function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
  })
}
function getThumbnailsArray(){
  let thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  let thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}
function initializeEvents() {
  let thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
initializeEvents();