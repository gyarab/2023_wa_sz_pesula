let el = document.getElementById('stav-hry');
let counter = 5;

function mojeFce() {
    el.innerHTML = counter;
    counter--;
    if (counter >= 0) {
        setTimeout(mojeFce, 1000);
    }
}

setTimeout(mojeFce, 1000);

el.innerHTML = "Nová hra";

function createImages() {
    const clickableImages = document.querySelectorAll('.clickable-image');
    clickableImages.forEach((clickableImage) => {
        clickableImage.addEventListener('click', handleClick);
    });
}

function handleClick() {
    const clickedImage = this;

    clickedImage.src = 'https://www.shutterstock.com/image-photo/exclamation-mark-design-spotlight-on-260nw-2113603313.jpg';

    setTimeout(() => {
        clickedImage.src = images[parseInt(clickedImage.dataset.index) - 1];
    }, 1000);
}

createImages();