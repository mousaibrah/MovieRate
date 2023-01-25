const body = $("body")
body.append($(`<section class="home container" id="home"><img src="./img/john-wick.jpg" class="home-img"></img></section>`))
const homeSection = $(`.home`)
homeSection.append($(`<div class="home-text">
<h1 class="home-title">john wick <br />chapter 4</h1>
<p>Relesing 24 March</p></div>`))
const movieImges = [{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 },{src:"./img/movie1.jpg",
title:"Wrath Of Man",type:"action" ,actors:["jason statham","mousa","khalid","mohammad","ibrahim"] ,rate: 9 }]
console.log(movieImges.length);
const populerSection = $(`section`)

const creatPopulerSection = ()=>{
    for (let index = 0; index < movieImges.length; index++) {
        console.log("hello world");
        const element = movieImges[index];
        const divBox = $(`div`)
        const boxText = $(`<div class="box-text">
        <h1 class="box-title">${element.title}</h1>
        <p>${element.type}</p></div>`)
        divBox.append($(`<img class="img-box" src="${element.src}" />`),boxText)
        imgBox.src = element.src
        populerSection.append(divBox)
        body.append(populerSection)
    }
}


creatPopulerSection()