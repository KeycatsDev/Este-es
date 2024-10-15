let currentImageIndex = 0;
let imagesArray = [];

// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Asigna el array de imágenes según la imagen que se abrió
    if (imageSrc.includes("1B")) {
        imagesArray = [
            'img/1B/melody.jpeg',
            // Agrega más imágenes de 1B aquí
        ];
    } else if (imageSrc.includes("2B")) {
        imagesArray = [
            'img/2B/imagen2b_1.jpg',
            'img/2B/imagen2b_2.jpg',
            'img/2B/imagen2b_3.jpg',
            'img/2B/imagen2b_4.jpg',
            'img/2B/imagen2b_5.jpg',
        ];
    } else if (imageSrc.includes("3B")) {
        imagesArray = [
            'img/3B/imagen3b_1.jpg',
            'img/3B/imagen3b_2.jpg',
            'img/3B/imagen3b_3.jpg',
            'img/3B/imagen3b_4.jpg',
            'img/3B/imagen3b_5.jpg',
        ];
    } else if (imageSrc.includes("4B")) {
        imagesArray = [
            'img/4B/imagen4b_1.jpg',
            'img/4B/imagen4b_2.jpg',
            'img/4B/imagen4b_3.jpg',
            'img/4B/imagen4b_4.jpg',
        ];
    } else if (imageSrc.includes("5B")) {
        imagesArray = [
            'img/5B/imagen5b_1.jpg',
            'img/5B/imagen5b_2.jpg',
            'img/5B/imagen5b_3.jpg',
            'img/5B/imagen5b_4.jpg',
            'img/5B/imagen5b_5.jpg',
        ];
    } else if (imageSrc.includes("6B")) {
        imagesArray = [
            'img/6B/imagen6b_1.jpg',
            'img/6B/imagen6b_2.jpg',
        ];
    }

    currentImageIndex = imagesArray.indexOf(imageSrc); // Encuentra el índice de la imagen actual
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Función para navegar a la imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? imagesArray.length - 1 : currentImageIndex - 1;
    document.getElementById("modalImage").src = imagesArray[currentImageIndex];
}

// Función para navegar a la siguiente imagen
function nextImage() {
    currentImageIndex = (currentImageIndex === imagesArray.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById("modalImage").src = imagesArray[currentImageIndex];
}

// Asigna el evento de cerrar el modal al botón de cerrar
document.getElementById("closeModal").onclick = function() {
    closeModal();
};

// Asigna los eventos de las flechas de navegación
document.getElementById("prev").onclick = function() {
    prevImage();
};
document.getElementById("next").onclick = function() {
    nextImage();
};
