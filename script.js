const characters = [
    {
        name: "jarot",
        image: "https://p3d.in/model_data/snapshot/3gWQo"
    },
    {
        name: "Raden Shogun",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCm44pYtXVF5b_ecFP65cTv77mJczqeqffCQ&usqp=CAU"
    },
    {
        name: "Miku",
        image: "https://static.miraheze.org/projectsekaiwiki/thumb/9/93/Hatsune_Miku.png/315px-Hatsune_Miku.png"
    },
    {
        name: "Avanza",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2Rbw9MVTn6B6p0LJcKlzNhglxRSewcHDiPTRZftVEPBR_BjrBYIzdYk&s=10"
    },
    {
        name:"req karakter",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NpPgiuUKeo5DzLnztOHlEMpCocTatpga8cTAK2NFvQsk2EwKavKwTE3Q&s=10"
    }
];

let current = 0;
const player = document.querySelector('.player');
const pName = document.querySelector('.name');
const leftA = document.querySelector('.left');
const rightA = document.querySelector('.right');

function setPlayer() {
    player.setAttribute('src', characters[current].image);
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
