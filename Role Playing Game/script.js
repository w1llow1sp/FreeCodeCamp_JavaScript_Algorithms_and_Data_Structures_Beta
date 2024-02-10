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
const locations = [{
    name:"Городская площадь",
    "button text":["Отправиться в магазин","Отправиться в пещеру","Сразить дракона"],
    "button functions":[goStore,goCave,fightDragon],
    text:"Вы находитесь на городской площади. Вы видите вывеску с надписью \"Магазин\"."
},
    {
        name: "Магазин",
        "button text": ["Купить 10 здоровья (10 золота)","Купить оружие (30 золотых)", "Отправиться на городскую площадь"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Вы вошли в магазин"
    }

]

function update  (location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
 update(locations[0])
}

function goStore () {
 update(locations[1])
}

function goCave  (){
    console.log("Going to cave.");
}
function fightDragon  () {
    console.log("Fighting dragon.");
}

function buyHealth () {}
function buyWeapon () {}


button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon


