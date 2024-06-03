const baseUrl = "https://rerofya.github.io/resources/";
const characters = [
    {
        name: "Furina",
        image: "player1.svg"
    },
    {
        name: "Raden Ei",
        image: "player2.svg"
    },
    {
        name: "Zoro",
        image: "player3.svg"
    },
    {
        name: "Luffy",
        image: "player4.svg"
    }
];

let current = 0;
const player = document.querySelector('.player');
const pName = document.querySelector('.name');
const leftA = document.querySelector('.left');
const rightA = document.querySelector('.right');

function setPlayer() {
    player.setAttribute('src', baseUrl + characters[current].image);
    pName.textContent = characters[current].name;
}

leftA.addEventListener('click', function() {
    if (current > 0) {
        current--;
        setPlayer();
    }
});

rightA.addEventListener('click', function() {
    if (current + 1 < characters.length) {
        current++;
        setPlayer();
    }
});

// Set player and name initially
setPlayer();

