import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

galleryContainerRef.insertAdjacentHTML('beforeend', renderGallery(galleryItems));


function renderGallery(arrayOfGallery) {
    
    const markup = arrayOfGallery
        .map(({ preview, original, description }) => `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"  />
                </a>   
        `)
        .join(''); 
    
    return markup;
};

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });