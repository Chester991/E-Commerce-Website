const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

bar.addEventListener("click", function () {
    nav.classList.add('active');
});

close.addEventListener("click", function () {
    nav.classList.remove("active");
});

// Single Product Image

const mainImage = document.getElementById("main-image");
// console.log(mainImage.src);
let smallImg = document.querySelectorAll(".small-img-col img");
// console.log(smallImg[1].src);

for (let i = 0; i < 4; i++) {
    smallImg[i].addEventListener("click", function () {
        mainImage.src = smallImg[i].src;
    });
}
