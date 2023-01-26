const body = $(`body`);
const homeSection = $(`.home`);
const movieSection = $(`.movies`);
const homeATag = $(`#home-a-tag`);
const populerSection = $(`.populer`);
const playPage = $(`.play-container`);
const playTrailer = $(`.play-trailer`);
const aboutMovie = $(`.about-movie`);
const swiperWraper = $(`.swiper-wrapper`);
const movieContent = $(`.movies-content`);
const logInPage = $(`.login-page`)
const userImg = $(`.user-img`)
const themeBtn = $(`.theme`)
const root = document.querySelector(":root")
const tags = [$(`#home-a-tag`), $(`#trend-a-tag`), $(`#movie-a-tag`)];
const nextPage = $(`.next-page`);
homeSection.append($(`<img src="./img/john-wick.jpg" class="home-img"/>`));
homeSection.append(
  $(` <div class="home-text">
<h1 class="home-title">john wick <br />chapter 4</h1>
<p>Relesing 24 March</p>
<a href="./img/john-wick-trailer.mp4" class="watch-btn">
  <i class="bx bx-right-arrow"></i>
  <span>Watch the trailer</span>
</a>
</div>`)
);



const test = ()=>{
  $(`.populer,.movies,.home,.next-page,.play-container,.about-movie`).css("display", "none");
$(`.login-page`).css("display","block")
}


userImg.on("click",test)












for (let index = 0; index < tags.length; index++) {
  const element = tags[index];
  element.on("click", () => {
    $(`.populer,.movies`).css("display", "block");
    $(`.home,.next-page`).css("display", "flex");
    $(`.play-container,.about-movie`).css("display", "none");
  });
}

const movieImges = [
  {
    src: "./img/popular-movie-1.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-2.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-3.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-4.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-5.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-6.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-7.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
  {
    src: "./img/popular-movie-8.jpg",
    title: "Wrath Of Man",
    type: "action",
    actors: ["jason statham", "mousa", "khalid", "mohammad", "ibrahim"],
    rate: 5,
    trailer: "./img/WRATH-OF-MAN-TRAILER MGM Studios.mp4",
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week.",
    cast: [
      { name: "Jason Statham", src: "./img/jason.jpeg" },
      { name: "Scott Eastwood", src: "./img/Scott.jpg" },
      { name: "Niamh Algar", src: "./img/Niamh.png" },
      {
        name: "Josh Hartnett",
        src: "./img/Josh.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/jeffrey.jpg",
      },
    ],
  },
];


themeBtn.on("click",()=>{
  
  root.style.setProperty("--body-color","#fcfeff")

})


const creatPlayPage = function () {
  const indexById = $(this).attr("id");
  const element = movieImges[indexById];
  $(`.populer,.movies,.home,.next-page`).css("display", "none");
  $(`.play-container,.about-movie`).css("display", "block");
  playTrailer.empty();
  aboutMovie.empty();
  playTrailer.append($(`<img src="${element.src}" class="play-img"/>`));
  playTrailer.append(
    $(` <div class="play-text">
  <h2 class="movie-title">${element.title}</h2>
  <span class="movie-type id"movie-type-play"">${element.type}</span>
 <div class="rating"></div>
  <a href="${element.trailer}" class="watch-btn play-btn">
    <i  class="bx bx-right-arrow"></i>
    <span class="trailer-span">Watch the trailer</span>
  </a>
  
</div>`)
  );
  aboutMovie.append(
    $(`<h2 class="movie-title-about">${element.title}</h2>
<p>${element.about}</p>
<h2 class="cast-heading">Movie Cast</h2>
<div class="cast"></div>
</div>`)
  );

  for (let index = 0; index < element.cast.length; index++) {
    const element_1 = element.cast[index];
    $(`.cast`).append(
      $(`<div class="cast-box"><img src="${element_1.src}" class="cast-img>"
  <span class="cast-title" id="cast-name">${element_1.name}</span></div>`)
    );
  }

  for (let index = 0; index < element.rate; index++) {
    $(`.rating`).append($(`<i class='bx bxs-star' ></i>`));
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
  <a href="${element.trailer}" class="watch-btn play-btn">
    <i class="bx bx-right-arrow"></i>
    <span class="trailer-span">Watch the trailer</span>
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
  <a href="${element.trailer}" class="watch-btn play-btn">
    <i class="bx bx-right-arrow"></i>
    <span class="trailer-span">Watch the trailer</span>
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
    delay: 1500,
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
