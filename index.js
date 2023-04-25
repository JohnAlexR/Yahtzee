let dieOne = "";
let dieTwo = "";
let dieThree = "";
let dieFour = "";
let dieFive = "";
let dieElOne = document.getElementById("dieElOne");
let dieElTwo = document.getElementById("dieElTwo");
let dieElThree = document.getElementById("dieElThree");
let dieElFour = document.getElementById("dieElFour");
let dieElFive = document.getElementById("dieElFive");
let savedDieEl = document.getElementById("savedDieEl")
let dieOneSaved = false
let dieTwoSaved = false
let dieThreeSaved = false
let dieFourSaved = false
let dieFiveSaved = false
let rollNumber = 0
let gameStarted = false


let savedDie = [];
let rerollDie = [];

function startGame() {
    savedDie = [];
    rerollDie = [];
    gameStarted = true
    
    dieOne = Math.floor(Math.random()* 6 ) + 1;
    dieTwo = Math.floor(Math.random()* 6 ) + 1;
    dieThree = Math.floor(Math.random()* 6 ) + 1;
    dieFour = Math.floor(Math.random()* 6 ) + 1;
    dieFive = Math.floor(Math.random()* 6 ) + 1;

    dieElOne.innerHTML = dieOne
    dieElTwo.innerHTML = dieTwo
    dieElThree.innerHTML = dieThree
    dieElFour.innerHTML = dieFour
    dieElFive.innerHTML = dieFive

    rollNumber = 1

    rerollDie.push(dieOne,dieTwo,dieThree,dieFour,dieFive)

    dieElOne.style.background = "none"
    dieElTwo.style.background = "none"
    dieElThree.style.background = "none"
    dieElFour.style.background = "none"
    dieElFive.style.background = "none"

    savedDieEl.textContent = "Saved Die: "

    dieOneSaved = false
    dieTwoSaved = false
    dieThreeSaved = false
    dieFourSaved = false
    dieFiveSaved = false
}

function saveOne() {
    if(dieOneSaved === false) {
        savedDie += dieOne
        rerollDie.splice(rerollDie.indexOf(dieOne),1)
        savedDieEl.textContent += " " + dieOne
        dieOneSaved = true
        dieElOne.style.background = "aquamarine"
    } else {
        console.log("already-saved")
    }
}

function saveTwo() {
    if(dieTwoSaved === false) {
        savedDie += dieTwo
        rerollDie.splice(rerollDie.indexOf(dieTwo),1)
        savedDieEl.textContent += " " + dieTwo
        dieTwoSaved = true
        dieElTwo.style.background = "aquamarine"
    } else {

    }
}

function saveThree() {
    if(dieThreeSaved === false) {
        savedDie += dieThree
        rerollDie.splice(rerollDie.indexOf(dieThree),1)
        savedDieEl.textContent += " " + dieThree
        dieThreeSaved = true
        dieElThree.style.background = "aquamarine"
    } else {

    }
}

function saveFour() {
    if(dieFourSaved === false) {
        savedDie += dieFour
        rerollDie.splice(rerollDie.indexOf(dieFour),1)
        savedDieEl.textContent += " " + dieFour
        dieFourSaved = true
        dieElFour.style.background = "aquamarine"
    } else {

    }
}

function saveFive() {
    if (dieFiveSaved === false) {
        savedDie += dieFive
        rerollDie.splice(rerollDie.indexOf(dieFive),1)
        savedDieEl.textContent += " " + dieFive
        dieFiveSaved = true
        dieElFive.style.background = "aquamarine"
    } else {

    }
}

function reroll() {
    rollNumber ++
    if (rollNumber > 3) {
        alert("You are out of rolls")
    } else {
        if(dieOneSaved === false) {
            dieOne = Math.floor(Math.random()* 6 ) + 1;
            dieElOne.innerHTML = dieOne
        }

        if(dieTwoSaved === false) {
            dieTwo = Math.floor(Math.random()* 6 ) + 1;
            dieElTwo.innerHTML = dieTwo
        }

        if(dieThreeSaved === false) {
            dieThree = Math.floor(Math.random()* 6 ) + 1;
            dieElThree.innerHTML = dieThree
        }

        if(dieFourSaved === false) {
            dieFour = Math.floor(Math.random()* 6 ) + 1;
            dieElFour.innerHTML = dieFour
        }

        if(dieFiveSaved === false) {
            dieFive= Math.floor(Math.random()* 6 ) + 1;
            dieElFive.innerHTML = dieFive
        }
    }
}

// styling