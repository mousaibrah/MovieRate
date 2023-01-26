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
const logInPage = $(`.login-page`);
const userImg = $(`.user-img`);
const favPage = $(`.fav-page`)
const signFlip = $(`.flip-login`)
const tags = [$(`#home-a-tag`), $(`#trend-a-tag`), $(`#movie-a-tag`)];
const favTag =$(`#fav-a-tag`)
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
// const favElements = JSON.parse(localStorage.getItem("fav"))
const signPage = () => {
  populerSection.hide()
  movieSection.hide()
  homeSection.hide()
  nextPage.hide()
  playPage.hide()
  aboutMovie.hide()
  favPage.hide()
  logInPage.show()
};
favTag.on("click",()=>{
  populerSection.hide()
  movieSection.hide()
  homeSection.hide()
  nextPage.hide()
  playPage.hide()
  aboutMovie.hide()
  favPage.show()
  logInPage.hide()
  favPage.append($(`<div class="heading">
  <h2 class="heading-title">Favourlite</h2>
   </div>`))
   favPage.append($(`<div class="movies-content" id="fav-movie"></div>`))
})
userImg.on("click", signPage);
$(`.sign-up-btn`).on("click",()=>{
  signFlip.css("transform","rotateY(180deg)")
})
$(`.sign-in-btn`).on("click",()=>{
  signFlip.css("transform","rotateY(0)")
})
for (let index = 0; index < tags.length; index++) {
  const element = tags[index];
  element.on("click", () => {
    populerSection.show()
    movieSection.show()
    homeSection.show()
    nextPage.show()
    playPage.hide()
    aboutMovie.hide()
    logInPage.hide()
    favPage.hide()
  });
}
const addToFav = function(){
  const indexById = $(this).attr("id")
  favElements.push($(`#${indexById}`))
  localStorage.setItem("fav",JSON.stringify(favElements))
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



const creatPlayPage = function () {
  const indexById = $(this).attr("id");
  const element = movieImges[indexById];
  favPage.hide()
  populerSection.hide()
  movieSection.hide()
  homeSection.hide()
  nextPage.hide()
  playPage.show()
  aboutMovie.show()
  logInPage.hide()
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
  
  <a href="#home" id="${indexById}" class="watch-btn add-to-fav">
  <i class='bx bxs-heart' ></i>
</a>
</div>`)
  );
  $(`.add-to-fav`).on("click",addToFav)
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
