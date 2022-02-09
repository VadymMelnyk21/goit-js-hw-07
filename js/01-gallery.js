import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');
// console.log(galleryContainerRef)

renderGallery(galleryItems);

function renderGallery(arrayOfGallery) {
    
    const markup = arrayOfGallery
        .map(({ preview, original, description }) => `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>        
        `)
        .join(''); 
    
    galleryContainerRef.insertAdjacentHTML('beforeend', markup)
}