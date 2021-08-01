// variables 
var randomNumber1, randomNumber2;
var imagesArray = ["#", "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

// methods
function generateRandomNumber1() {
    randomNumber1 = Math.floor((Math.random() * 6) + 1);
    return randomNumber1;
}

function generateRandomNumber2() {
    randomNumber2 = Math.floor((Math.random() * 6) + 1);
    return randomNumber2;
}

function getWinner() {
    if (randomNumber1 === randomNumber2) {
        document.querySelector(".container h1").innerHTML = "Draw!";
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins";
    }
    else {
        document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
    }
}

function main() {
    document.querySelector(".dice .img1").setAttribute("src", imagesArray[generateRandomNumber1()]);
    document.querySelector(".dice .img2").setAttribute("src", imagesArray[generateRandomNumber2()]);
    getWinner();
}

main();