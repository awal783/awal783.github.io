const baseur1 ="https://rerofya.github.io/resources/"
const character = [
    {
        name:"Furina",
        image:"player1.svg"
    },
    {
        name:"Raden Ei",
        image:"player2.svg"
    },
    {
        name:"Zoro",
        image:"player3.svg"
    },
    {
        name:"Luffy",
        imag:"player4.svg"
    }
]
let current = 0
const player = document.querySelector('.player')
const pName = document.querySelect0r('.name')
const leftA = document.querySelector('.left')
const rightA = document.querySelector('.right')

 function setplayer() {
    player.setAttribute('src', baseur1 = character[current].image)
    pName.textContent = character[current].name
 }
 leftA.addEventListener('click', function() {
    if (current > 0) {
        current--
        setplayer()
    }
 })
 rightA.addEventListener('click', function() {
    if (current + 1 < character.length) {
        current++
        setplayer()
    }
 })
