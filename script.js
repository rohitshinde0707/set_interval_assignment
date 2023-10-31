
var imgurl = [
    "https://wallpaperaccess.com/full/2920191.jpg",
    "https://wallpaperaccess.com/full/116939.jpg",
    "https://wallpaperaccess.com/full/52268.jpg",
    "https://wallpaperaccess.com/full/465921.jpg",
    "https://wallpaperaccess.com/full/253344.jpg",
    "https://wallpaperaccess.com/full/498125.jpg",
    "https://wallpaperaccess.com/full/1661594.jpg",
    "https://wallpaperaccess.com/full/169388.jpg"
];

var index = 0;
var imgDiv = document.querySelector(".imgDiv");

setInterval(() => {
    imgDiv.style.backgroundImage = `url(${imgurl[index]})`;

    if (index == imgurl.length - 1) {
        index = 0;
    } else {
        index++;
    }
}, 3500);
