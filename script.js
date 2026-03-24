const images = ["images/food1.jpg", "images/food2.jpg", "images/food3.jpg"];
let index = 0;

document.getElementById("next").onclick = () => {
    index = (index + 1) % images.length;
    document.getElementById("slider-img").src = images[index];
};

document.getElementById("prev").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider-img").src = images[index];
};