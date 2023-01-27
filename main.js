//
//
//            JQUERY ELEMENTS
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
const favPage = $(`.fav-page`);
const signFlip = $(`.flip-login`);
const submitBtn = $(`.submit-login`);
const tags = [$(`#home-a-tag`), $(`#trend-a-tag`), $(`#movie-a-tag`)];
const favTag = $(`#fav-a-tag`);
const nextPage = $(`.next-page`);
const newUserName = $(`#sign-name`);
const newUserEmail = $(`#sign-email`);
const newUserPass = $(`#sign-pass`);
const userEmail = $("#log-email");
const userPass = $(`#log-pass`);
const moviePage = $(`.movie-page`);
const exploreTag = $(`#explore-a-tag`);

// Local Storage
let userInfo = [];
let favElements = [];
// Data Variable
// fetch(themoviedb.orgmovieapi_key=fccd45168523a14a8e5316ad86dca398)

const movieData = [
  { title: "Wrath Of Man",
    type: "action",
    rate: 8,
    about:
      "A cold and mysterious character working at a cash truck company responsible for moving a lot of money around Los Angeles each week. Mysterious and wild-eyed, a new security guard for a cash truck surprises his co-workers when he unleashes precision skills during a heist.",
    cast: [
      { name: "Jason Statham" },
      { name: "Scott Eastwood" },
      { name: "Niamh Algar" },
      {
        name: "Josh Hartnett",
        src: "./img/movie1/cast4.jpg",
      },
      {
        name: "Jeffrey Donovan",
        src: "./img/movie1/cast5.jpg",
      },
    ],
  },
  {
    title: "A Man Called Otto",
    type: "Drama/Comedy",
    rate: 8,
    about:
      "Otto is a grump who's given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around.",
    cast: [
      { name: "Tom Hanks" },
      { name: "Mariana Treviño" },
      { name: "Manuel Garcia-Rulfo" },
      {
        name: "Rachel Keller",
      },
      {
        name: "Kailey Hyman",
      },
    ],
  },
  {
    title: "Black Adam",
    type: "Action/Adventure",
    rate: 7,
    about:
      "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    cast: [
      { name: "Dwayne Johnson" },
      { name: "Aldis Hodge" },
      { name: "Pierce Brosnan" },
      {
        name: "Noah Centineo",
      },
      {
        name: "Sarah Shahi",
      },
    ],
  },
  {
    title: "The Unbearable Weight of Massive Talent",
    type: "action/comedy/crime",
    rate: 7,
    about:"In this action-packed comedy, Nicolas Cage plays Nick Cage, channeling his iconic characters as he's caught between a superfan (Pedro Pascal) and a CIA agent (Tiffany Haddish).",
    cast: [
      { name: "Nicolas Cage" },
      { name: "Pedro Pascal" },
      { name: "Tiffany Haddish"},
      { name: "Sharon Horgan",},
      {name: "Neil Patrick Harris",},],
  },
  {
    title: "Section Eight",
    type: "Action/thriller",
    rate: 4,
    about:"After avenging the murder of his family, a former soldier is sprung from prison and recruited by a shadowy government agency.",
    cast: [
      { name: "Dermot Mulroney" },
      { name: "Mickey Rourke" },
      { name: "Dolph Lundgren"},
      { name: "Scott Adkins",},
      {name: "Ryan Kwanten",},],
  },
  {
    title: "Jung_E",
    type: "action/adventure/drama",
    rate: 6,
    about:"On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
    cast: [
      { name: "Uhm Ji-won" },
      { name: "Kim Hyun-joo" },
      { name: "So-yi Park"},
      { name: "Ryu Kyung-Soo",},
      {name: "Aria Song",},],
  },
  {
    title: "The Menu",
    type: "comedy/horror/thriller",
    rate: 7,
    about:"A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    cast: [
      { name: "Ralph Fiennes" },
      { name: "Anya Taylor-Joy" },
      { name: "Nicholas Hoult"},
      { name: "Hong Chau",},
      {name: "Janet McTeer",},],
  },
  {
    title: "Avatar: The Way of Water",
    type: "action/fantasy",
    rate: 8,
    about:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    cast: [
      { name: "Sam Worthington" },
      { name: "Zoe Saldana" },
      { name: "Sigourney Weaver"},
      { name: "Stephen Lang",},
      {name: "Kate Winslet",},],
  },
  {
    title: "The Pale Blue Eye",
    type: "crime/horror",
    rate: 7,
    about:"A world-weary detective is hired to investigate the murder of a West Point cadet. Stymied by the cadets' code of silence, he enlists one of their own to help unravel the case - a young man the world would come to know as Edgar Allan Poe.",
    cast: [
      { name: "Christian Bale" },
      { name: "Harry Melling" },
      { name: "Simon McBurney"},
      { name: "Timothy Spall",},
      {name: "Toby Jones",},],
  },
  {
    title: "Babylon",
    type: "comedy/drama",
    rate: 9,
    about:"A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
    cast: [
      { name: "Brad Pitt" },
      { name: "Margot Robbie" },
      { name: "Jean Smart"},
      { name: "Olivia Wilde",},
      {name: "J.C. Currais",},],
  },
];
const addInfo = ()=>{
  for (let index = 0; index < movieData.length; index++) {
    const element = movieData[index];
    element.src = `./img/movie${index+1}/poster.jpg`
    element.trailer =`./img/movie${index+1}/trailer.mp4`
    element.cast.forEach((elem,i)=>{
     elem.src = `./img/movie${index+1}/cast${i+1}.jpg`
    })
  }
}
addInfo()
// Creat movie Box
const CreatMovieBox = (element, index) => {
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
  return boxDiv[0];
};

// Creat Home Page
const creatHomePage = () => {
  homeSection.append($(`<img src="./img/john-wick.jpg" class="home-img"/>`));
  homeSection.append(
    $(` <div class="home-text">
<h1 class="home-title">john wick <br />chapter 4</h1>
<p>Relesing 24 March</p>
 <a href="./img/john-wick-trailer.mp4" target="_blank" class="watch-btn">
  <i class="bx bx-right-arrow"></i>
  <span>Watch the trailer</span>
</a>
</div>`)
  );
};
// Creat Populer Section
const creatPopulerSection = function (movies, popular) {
  for (let index = 0; index < 8; index++) {
    const element = movieData[index];
    const slideDiv = $(`<div class="swiper-slide"></div>`);
    const boxDiv = CreatMovieBox(element, index);

    slideDiv.append(boxDiv);
    swiperWraper.append(slideDiv);
  }
};
// Creat Movie Section
const creatMovieSection = function () {
  for (let index = 0; index < 8; index++) {
    const element = movieData[index];
    const boxDiv = CreatMovieBox(element, index);

    $(`.movies .movies-content`).append(boxDiv);
  }
};
// Creat Play Page
const creatPlayPage = function () {
  const indexById = $(this).attr("id");
  const element = movieData[indexById];
  favPage.hide();
  populerSection.hide();
  movieSection.hide();
  homeSection.hide();
  nextPage.hide();
  playPage.show();
  moviePage.hide();
  aboutMovie.show();
  logInPage.hide();
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
  $(`.add-to-fav`).on("click", addToFav);
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
// Creat Favourite Page

const creatFavPage = () => {
  populerSection.hide();
  movieSection.hide();
  homeSection.hide();
  nextPage.hide();
  playPage.hide();
  moviePage.hide();
  aboutMovie.hide();
  favPage.show();
  logInPage.hide();
  $(`.fav-page .movies-content`).empty();

  for (let index = 0; index < favElements.length; index++) {
    const element = favElements[index];
     const boxDiv = $(`<div class="movie-box" id="${element.id}"></div>`);
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
    $(`.fav-page .movies-content`).append(boxDiv);
  }
};
// Creat Sign Page
const creatSignPage = () => {
  populerSection.hide();
  movieSection.hide();
  homeSection.hide();
  nextPage.hide();
  playPage.hide();
  aboutMovie.hide();
  favPage.hide();
  moviePage.hide();
  signFlip.hide();
  logInPage.css("display", "grid");
  $(`.intro`).css("display", "flex");
  $(`.pass-input,.email-input`).css({ border: "0.6px solid #f8a92a" });
};

// Return Home Btn
const returnHomeBtn = () => {
  populerSection.show();
  movieSection.show();
  homeSection.show();
  nextPage.show();
  playPage.hide();
  aboutMovie.hide();
  logInPage.hide();
  favPage.hide();
  moviePage.hide();
};

// Local Storage
localStorage["user"]
  ? (userInfo = JSON.parse(localStorage.getItem("user")))
  : userInfo;
// Check For User Login
const checkForUserLogin = () => {
  const logObj = {
    userName: newUserName.val(),
    email: newUserEmail.val(),
    password: newUserPass.val(),
  };

  if (logObj.userName) {
    if (logObj.userName === newUserName.val()) {
      $(`.name-input`).css({ border: "0.6px solid #ff0000ba" });
      return;
    }
    userInfo.push(logObj);
    localStorage.setItem("user", JSON.stringify(userInfo));
    returnHomeBtn();
  } else {
    for (let index = 0; index < userInfo.length; index++) {
      const element = userInfo[index];
      if (element.email !== userEmail.val()) {
        $(`.email-input`).css({ border: "0.6px solid #ff0000ba" });
      }
      if (element.password !== userPass.val()) {
        $(`.pass-input`).css({ border: "0.6px solid #ff0000ba" });
      } else {
        $(`.intro-message`).text("LOGGED In SUCCESSFULLY");
        creatSignPage();
        $(`.ok-btn`).off("click", welomeMessage);
        $(`.ok-btn`).on(
          "click",
          setTimeout(() => {
            returnHomeBtn();
          }, 2000)
        );
      }
    }
  }
};
// Welcome Message
const welomeMessage = () => {
  $(`.intro`).css("display", "none");
  signFlip.css("display", "block");
};

//
// Local Storage
localStorage["fav"]
  ? (favElements = JSON.parse(localStorage.getItem("fav")))
  : favElements;
// Add To Fav Btn
const addToFav = function () {
  const indexById = $(this).attr("id");
  movieData[indexById].id = indexById;
  favElements.push(movieData[indexById]);
  localStorage.setItem("fav", JSON.stringify(favElements));
};

// Creat Movie Page (next page)
const creatMoviePage = () => {
  $(`.movie-page .movies-content`).empty();
  populerSection.hide();
  movieSection.hide();
  homeSection.hide();
  nextPage.hide();
  playPage.hide();
  aboutMovie.hide();
  logInPage.hide();
  favPage.hide();
  moviePage.show();
  for (let index = 0; index < movieData.length; index++) {
    const element = movieData[index];
    const boxDiv = CreatMovieBox(element, index);
    $(`.movie-page .movies-content`).append(boxDiv);
  }
};

// Click Event

$(`.sign-up-btn`).on("click", () => {
  signFlip.css("transform", "rotateY(180deg)");
});
$(`.sign-in-btn`).on("click", () => {
  signFlip.css("transform", "rotateY(0)");
});

for (let index = 0; index < tags.length; index++) {
  const element = tags[index];
  element.on("click", returnHomeBtn);
}
exploreTag.on("click", creatMoviePage);
nextPage.on("click", creatMoviePage);
submitBtn.on("click", checkForUserLogin);
$(`.ok-btn`).on("click", welomeMessage);
favTag.on("click", creatFavPage);
userImg.on("click", creatSignPage);
creatHomePage();
creatPopulerSection();
creatMovieSection();
// Swiper Slide Show
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
