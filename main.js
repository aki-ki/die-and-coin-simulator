// COIN FLIP SIMULATOR
// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  //   Simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

// Dice:

// Event Listener
document.getElementById("die-button").addEventListener("click", dieBtnClick);
// document.getElementById("die-button").addEventListener("click", dieBtnClick2);
// Counting variables
let oneRoll = 0;
let twoRoll = 0;
let threeRoll = 0;
let fourRoll = 0;
let fiveRoll = 0;
let sixRoll = 0;

function dieBtnClick() {
  let randDie = Math.random();
  let die1num;
  if (randDie <= 1 / 6) {
    oneRoll++;
    document.getElementById("one").innerHTML = oneRoll;
    document.getElementById("diePics").innerHTML = "<img src='img/1.png'>";
    die1num = 1;
  } else if (randDie <= 2 / 6) {
    twoRoll++;
    document.getElementById("two").innerHTML = twoRoll;
    document.getElementById("diePics").innerHTML = "<img src='img/2.png'> ";
    die1num = 2;
  } else if (randDie <= 3 / 6) {
    threeRoll++;
    document.getElementById("three").innerHTML = threeRoll;
    document.getElementById("diePics").innerHTML = "<img src='img/3.png'> ";
    die1num = 3;
  } else if (randDie <= 4 / 6) {
    fourRoll++;
    document.getElementById("four").innerHTML = fourRoll;
    document.getElementById("diePics").innerHTML = "<img src='img/4.png'> ";
    die1num = 4;
  } else if (randDie <= 5 / 6) {
    fiveRoll++;
    document.getElementById("five").innerHTML = fiveRoll;
    document.getElementById("diePics").innerHTML = "<img src='img/5.png'>";
    die1num = 5;
  } else {
    sixRoll++;
    document.getElementById("six").innerHTML = sixRoll;
    document.getElementById("diePics").innerHTML = "<img src='img/6.png'>";
    die1num = 6;
  }

  let randDie2 = Math.random();
  let die2num;
  if (randDie2 <= 1 / 6) {
    oneRoll++;
    document.getElementById("one").innerHTML = oneRoll;
    document.getElementById("diePics2").innerHTML = "<img src='img/1.png'>";
    die2num = 1;
  } else if (randDie2 <= 2 / 6) {
    twoRoll++;
    document.getElementById("two").innerHTML = twoRoll;
    document.getElementById("diePics2").innerHTML = "<img src='img/2.png'>";
    die2num = 2;
  } else if (randDie2 <= 3 / 6) {
    threeRoll++;
    document.getElementById("three").innerHTML = threeRoll;
    document.getElementById("diePics2").innerHTML = "<img src='img/3.png'>";
    die2num = 3;
  } else if (randDie2 <= 4 / 6) {
    fourRoll++;
    document.getElementById("four").innerHTML = fourRoll;
    document.getElementById("diePics2").innerHTML = "<img src='img/4.png'>";
    die2num = 4;
  } else if (randDie2 <= 5 / 6) {
    fiveRoll++;
    document.getElementById("five").innerHTML = fiveRoll;
    document.getElementById("diePics2").innerHTML = "<img src='img/5.png'>";
    die2num = 5;
  } else {
    sixRoll++;
    document.getElementById("six").innerHTML = sixRoll;
    document.getElementById("diePics2").innerHTML = "<img src='img/6.png'>";
    die2num = 6;
  }
  // Sum
  document.getElementById("die1").innerHTML = die1num;
  document.getElementById("die2").innerHTML = die2num;

  let sums = die1num + die2num;
  document.getElementById("sum").innerHTML = sums;
}
