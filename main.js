const body = $(`body`);
const homeSection = $(`.home`);
const movieSection = $(`.movies`);
const homeATag = $(`#home-a-tag`);
const populerSection = $(`.populer`);
const playPage = $(`.play-container`);
const swiperWraper = $(`.swiper-wrapper`);
const movieContent = $(`.movies-content`);
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

homeATag.on("click", () => {
  populerSection.css("display", "block");
  movieSection.css("display", "block");
  homeSection.css("display", "flex");
});



const movieImges = [
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
  {
    src: "./img/movie1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
  },
];
const creatPlayPage = function () {
  const indexById = $(this).attr("id")
  const element = movieImges[indexById]
  populerSection.css("display", "none");
  movieSection.css("display", "none");
  homeSection.css("display", "none");
  playPage.css("display", "block");
  playPage.append($(`<img src="${element.src}" class="play-img"/>`))
  playPage.append($(`<div class="play-text">
  <h2 class="movie-title">${element.title}</h2>
  <span class="movie-type">${element.type}</span>
 <div class="rating"></div>
  <a href="#" class="watch-btn play-btn">
    <i class="bx bx-right-arrow"></i>
    <span>Watch the trailer</span>
  </a>
</div>`))
$(`.rating`).empty()
for (let index = 0; index < element.rate; index++) {
  
  $(`.rating`).append($(`<i class='bx bxs-star' ></i>`))
  }
   
};
const creatPopulerSection = function () {
  for (let index = 0; index < 8; index++) {
    const element = movieImges[index];
    const slideDiv = $(`<div class="swiper-slide"></div>`);
    const boxDiv = $(`<div class="movie-box" id="${index}"></div>`);
    boxDiv.append($(`<img src="${element.src}" class="movie-box-img" />`));
    boxDiv.append(
      $(`<div class="box-text">
  <h2 class="movie-title">${element.title}</h2>
  <span class="movie-type">${element.type}</span>
  <a href="#" class="watch-btn play-btn">
    <i class="bx bx-right-arrow"></i>
    <span>Watch the trailer</span>
  </a>
</div>`)
    );
    boxDiv.on("click", creatPlayPage);
    slideDiv.append(boxDiv);
    swiperWraper.append(slideDiv);
  }
};

creatPopulerSection();


const creatMovieSection = function () {
  for (let index = 0; index < movieImges.length; index++) {
    const element = movieImges[index];
    const boxDiv = $(`<div class="movie-box" id="${index}"></div>`);
    boxDiv.append($(`<img src="${element.src}" class="movie-box-img" />`));
    boxDiv.append(
      $(`<div class="box-text">
  <h2 class="movie-title">${element.title}</h2>
  <span class="movie-type">${element.type}</span>
  <a href="#" class="watch-btn play-btn">
    <i class="bx bx-right-arrow"></i>
    <span>Watch the trailer</span>
  </a>
</div>`)
    );
    boxDiv.on("click", creatPlayPage);
    movieContent.append(boxDiv);
  }
};
creatMovieSection();

const swiper = new Swiper(".populer-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 9991500,
    disableOnInteraction: false,
  },
  pegination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
