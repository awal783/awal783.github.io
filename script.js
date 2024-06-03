const characters = [
    {
        name: "Furina",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fsticker%2FGenshin-Impact-Furina-Chibi-by-RussellStudio%2F153508169.EJUG5&psig=AOvVaw0h6-a0izGP_MzdS4bGfqPZ&ust=1717490750042000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC_54mHv4YDFQAAAAAdAAAAABAE"
    },
    {
        name: "Raden Ei",
        image: "https://dribbble.com/tags/raiden-shogun"
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
        setPlayer():
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

