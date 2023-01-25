const body = $(`body`);
const homeSection = $(`.home`);
homeSection.append($(`<img src="./img/john-wick.jpg" class="home-img"/>`));
homeSection.append(
  $(` <div class="home-text">
<h1 class="home-title">john wick <br />chapter 4</h1>
<p>Relesing 24 March</p>
<a href="#" class="watch-btn">
  <i class="bx bx-right-arrow"></i>
  <span>Watch the trailer</span>
</a>
</div>`)
);
const populerSection = $(`.populer`);

const swiperWraper = $(`.swiper-wrapper`);
const movieImges = [
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 9,
  },
];
const creatPopulerSection = function () {
  for (let index = 0; index < movieImges.length; index++) {
    const element = movieImges[index];
    const slideDiv = $(`<div class="swiper-slide"></div>`);
    const boxDiv = $(`<div class="movie-box"></div>`);
    boxDiv.append($(`<img src="${element.src}" class="movie-box-img" />`));
    boxDiv.append(
      $(`<div class="box-text">
  <h2 class="movie-title">${element.title}</h2>
  <span class="movie-type">${element.type}</span>
  <a href="#" class="watch-btn play-btn">
    <i class="bx bx-right-arrow"></i>
  </a>
</div>`)
    );
    slideDiv.append(boxDiv);
    swiperWraper.append(slideDiv);
  }
};

creatPopulerSection();

const swiper = new Swiper(".populer-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pegination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
