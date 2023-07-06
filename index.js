
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDice1 = "./images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice2 = "./images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

let text;

if (randomNumber1 > randomNumber2) {
    text = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    text = "Player 2 Wins!";
}

 else {
    text = "Draw!";
}

document.querySelector("h1").innerHTML = text;
