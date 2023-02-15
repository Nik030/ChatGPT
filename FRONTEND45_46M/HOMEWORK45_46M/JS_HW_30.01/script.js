/* ДЗ. В соответствующие теги (h5, img, p) подтянуть данные из объектов массива posts */

const posts = [
    {
        title: "Столица Германии",
        descr: "Берлин - ....",
        img: "./images/img1.jpeg"
    },
    {
        title: "Столица Кыргызстана",
        descr: "Бишкек - ...",
        img: "./images/img2.jpeg"
    }
]

const htmlTitle = document.querySelectorAll('h5');
const htmlPTag = document.querySelectorAll('p');
const htmlImg = document.querySelectorAll('img');

for (let i = 0; i < posts.length; i++) {
    htmlTitle[i].innerText = posts[i].title;
    htmlPTag[i].innerText = posts[i].descr;
    htmlImg[i].setAttribute('src', posts[i].img);

}