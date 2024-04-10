// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEL = document.getElementById("display");
var plus1btn = document.getElementById("plus1");
var plus10btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");
var minus1btn = document.getElementById("minus1");
var minus10btn = document.getElementById("minus10");
var minus50btn = document.getElementById("minus50");

var strInEL = document.getElementById("strIn");
var strOutEL = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1btn.addEventListener("click", add1);

function add1() {
  counter++;
  displayEL.innerHTML = counter;
}

plus10btn.addEventListener("click", add10);

function add10() {
  counter += 10;
  displayEL.innerHTML = counter;
}

plus50btn.addEventListener("click", add50);

function add50() {
  counter += 50;
  displayEL.innerHTML = counter;
}

minus1btn.addEventListener("click", sub1);

function sub1() {
  counter--;
  displayEL.innerHTML = counter;
}

minus10btn.addEventListener("click", sub10);

function sub10() {
  counter -= 10;
  displayEL.innerHTML = counter;
}

minus50btn.addEventListener("click", sub50);

function sub50() {
  counter -= 50;
  displayEL.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
strInEL.addEventListener("change", updateStory);
var story = "Once upon a time, ";

function updateStory() {
  var newWord = strInEL.value;
  strInEL.value = "";
  story += newWord + " ";
  strOutEL.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1btn = document.getElementById("rand1");
var rand2btn = document.getElementById("rand2");
var rand3btn = document.getElementById("rand3");
var rand4btn = document.getElementById("rand4");
var rand1outEl = document.getElementById("rand1-out");
var rand2outEl = document.getElementById("rand2-out");
var rand3outEl = document.getElementById("rand3-out");
var rand4outEl = document.getElementById("rand4-out");

rand1btn.addEventListener("click", sr1);

function sr1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1outEl.innerHTML = rand;
}

rand2btn.addEventListener("click", sr2);

function sr2() {
  var rand = Math.random() * 100;
  rand = rand.toFixed(3);
  rand2outEl.innerHTML = rand;
}

rand3btn.addEventListener("click", sr3);

function sr3() {
  var rand = Math.random() * 10;
  rand -= 5;
  rand = rand.toFixed(3);
  rand3outEl.innerHTML = rand;
}

rand4btn.addEventListener("click", sr4);

function sr4() {
  var in1 = parseInt(document.getElementById("rand-in1").value);
  var in2 = parseInt(document.getElementById("rand-in2").value);

  var rand = Math.random() * (in2 - in1 + 1) + in1;
  rand = Math.floor(rand);
  rand4outEl.innerHTML = rand;
}

// Reset page
document.getElementById("reset").addEventListener("click", reset);

function reset() {
  location.reload();
}

// Random font size
document.getElementById("random-size").addEventListener("click", fontRand);

function fontRand() {
  let Frand = Math.random() * 26 + 1;
  Frand = Frand.toFixed();
  document.getElementById("body").style.fontSize = `${Frand}px`;
}

document.getElementById("random-rgb").addEventListener("click", RandColor);

function RandColor() {
  var c1 = Math.random() * 256;
  var c2 = Math.random() * 256;
  var c3 = Math.random() * 256;

  document.getElementById(
    "HTML"
  ).style.backgroundColor = `rgb(${c1},${c2},${c3})`;
}
