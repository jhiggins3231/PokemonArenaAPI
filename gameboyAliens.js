let baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

const searchForm = document.querySelector('form');
const searchTerm = document.querySelector('.search');
const searchTerm1 = document.querySelector('.search1');
searchForm.addEventListener('submit', fetchResults);
searchForm.addEventListener('submit', fetchResults2);
const ul1 = document.querySelector('.moveset1');
const ul = document.querySelector('.moveset');
const img = document.querySelector('#imageOne');
const img1 = document.querySelector('#imageTwo');
ul.style.display='none'
ul1.style.display='none'
img.style.display='none'
img1.style.display='none'


function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}${searchTerm.value}`;
    console.log('URL:', url);
    fetch(url)
        .then(function (result) {  
            return result.json();
        })
        .then(function (json) {
            displayResults(json);
        })
}

function displayResults(json) {
    console.log('Results:', json);
    let image1 = json.sprites.front_default;
    document.getElementById('imageOne').src = image1;
    let pokeName1 = json.name;
    console.log(json.name);
    let name1 = document.getElementById('name1');
    name1.innerHTML = pokeName1;
    let moves1 = document.getElementById('list1');
    let moves2 = document.getElementById('list11');
    let movesOne = json.moves[0].move.name
    let movesTwo = json.moves[3].move.name
    moves1.innerText = movesOne;
    moves2.innerText = movesTwo;
    ul.style.display='block';
    img.style.display='block';
}

function fetchResults2(e) {
    e.preventDefault();
    url = `${baseURL}${searchTerm1.value}`;
fetch(url)
    .then(function (result) {
        console.log(result)
        return result.json();
    })
    .then(function (json) {
        displayResults1(json);
    })
}
function displayResults1(json) {
    console.log('Results:', json);
    let image2 = json.sprites.back_default;
    document.getElementById('imageTwo').src = image2;
    let pokeName2 = json.name;
    console.log(json.name);
    let name2 = document.getElementById('name2');
    name2.innerHTML = pokeName2;
    let moves3 = document.getElementById('list2');
    let moves4 = document.getElementById('list22');
    let movesThree = json.moves[0].move.name
    let movesFour = json.moves[3].move.name
    moves3.innerText = movesThree;
    moves4.innerText = movesFour;
    ul1.style.display='block';
    img1.style.display='block';
}

var pokemon1 = document.getElementById('imageOne');
var link1 = document.getElementById('list1');
link1.addEventListener('click', move);

var pokemon2 = document.getElementById('imageOne');
var link2 = document.getElementById('list11');
link2.addEventListener('click', move2);

var pokemon3 = document.getElementById('imageTwo');
var link3 = document.getElementById('list2');
link3.addEventListener('click', move3);

var pokemon4 = document.getElementById('imageTwo');
var link4 = document.getElementById('list22');
link4.addEventListener('click', move4);

var pokemon1X = 0;
function move(e) {
    pokemon1X += 15;
    pokemon1.style.position = "absolute";
    pokemon1.style.transform = "translateY(" + pokemon1X + "px)";
    // e.preventDefault();
}
// var pokemon2X = 0;
function move2(e) {
    pokemon1X -= 15;
    pokemon2.style.position = "absolute";
    pokemon2.style.transform = "translateY(" + pokemon1X + "px)";
    // e.preventDefault();
}
var pokemon3X = 0;
function move3(e) {
    pokemon3X += 15;
    pokemon3.style.position = "absolute";
    pokemon3.style.transform = "translateY(" + pokemon3X + "px)";
    // e.preventDefault();
}
// var pokemon4X = 0;
function move4(e) {
    pokemon3X -= 15;
    pokemon4.style.position = "absolute";              
    pokemon4.style.transform = "translateY(" + pokemon3X + "px)";
    // e.preventDefault();
}