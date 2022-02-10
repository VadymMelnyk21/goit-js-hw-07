import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

galleryContainerRef.insertAdjacentHTML('beforeend', renderGallery(galleryItems));
galleryContainerRef.addEventListener('click', openImage);


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
    
    return markup;
};

function openImage(event) {
    event.preventDefault();


    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}" />
        `,

// close escape start
        {
            onShow: (instance) => {
                window.addEventListener('keydown', clickESC);
            },
                
            onClose: (instance) => {
                window.removeEventListener('keydown', clickESC);
            },
        },
    );

    function clickESC(event) { 
        if (event.code === 'Escape') {
            instance.close();
        };
    };
// close escape finish
    
    instance.show()
};



