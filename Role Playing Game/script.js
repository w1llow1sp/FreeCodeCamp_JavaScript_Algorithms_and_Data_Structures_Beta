let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick']


const button1 =  document.querySelector('#button1')
const button2 =  document.querySelector('#button2')
const button3 =  document.querySelector('#button3')

const text  = document.querySelector('#text')
const xpText  = document.querySelector('#xpText')
const healthText  = document.querySelector('#healthText')
const goldText  = document.querySelector('#goldText')
const monsterStats   = document.querySelector('#monsterStats')
const monsterName   = document.querySelector('#monsterName')
const monsterHealthText   = document.querySelector('#monsterHealth')

//initialize buttons


function goStore () {
    button1.innerText = "Купить 10 здоровья (10 золота)"
    button2.innerText = "Купить оружие (30 золотых)"
    button3.innerText = "Отправиться на городскую площадь"

    button1.onclick = buyHealth
    button2.onclick = buyWeapon
    button3.onclick = goTown

    text.innerText = "Вы вошли в магазин"
}

function goCave  (){
    console.log("Going to cave.");
}
function fightDragon  () {
    console.log("Fighting dragon.");
}

function buyHealth () {}
function buyWeapon () {}
function goTown() {}

button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon


