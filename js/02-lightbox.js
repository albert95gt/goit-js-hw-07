import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsList = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItems(galleryItems);

galleryItemsList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalleryItems(items) {
    return galleryItems.map(({preview, original, description}) => {
        
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join(""); 
}

let gallery = new SimpleLightbox('.gallery__item', {
        captionsData: "alt",
        captionDelay: 250,
    });
galleryItemsList.addEventListener("click", onClickGalleryImg);

function onClickGalleryImg (event) {
    event.preventDefault();

    if(!event.target.classList.contains("gallery__image")){
        return;
    }
    gallery.on('show.simplelightbox');
    
}



    

