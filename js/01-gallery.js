import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryImageMarkup = createGalleryItems();

galleryContainer.insertAdjacentHTML('beforeend', galleryImageMarkup);

galleryContainer.addEventListener("click", onGalleryImage); 


function createGalleryItems () {
    return galleryItems.map(({preview, original}) => {
        return `<a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="Image description"
        />
        </a>`
    }).join("");
}

let instance;

function onGalleryImage(event) {
    event.preventDefault();
    
    if(event.target.nodeName !== "IMG"){
        return;
    }
    const galleryLargeImgSrc = event.target.dataset.source;  

    instance = basicLightbox.create(`<img src="${galleryLargeImgSrc}">`);
    instance.show(() => galleryContainer.addEventListener("keydown", closeGalleryImage));
    

    
}

function closeGalleryImage(event){

    if(event.code === "Escape"){
        instance.close(() => {
            removeEventListenerForGalleryContainer();

        });
    }
}

function removeEventListenerForGalleryContainer () {
    galleryContainer.removeEventListener("keydown", closeGalleryImage)
}