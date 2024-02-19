let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ['stick']


const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const button3 = document.querySelector('#button3')

const text = document.querySelector('#text')
const xpText = document.querySelector('#xpText')
const healthText = document.querySelector('#healthText')
const goldText = document.querySelector('#goldText')
const monsterStats = document.querySelector('#monsterStats')
const monsterName = document.querySelector('#monsterName')
const monsterHealthText = document.querySelector('#monsterHealth')

//initialize buttons

const weapons = [
    {name: "палка", power: 5},
    {name: "кинжал", power: 30},
    {name: "когтистый молот", power: 50},
    {name: "меч", power: 100},
]

const monsters = [
    {name: "слизь", level:2, health: 15},
    {name: "клыкастый зверь", level:8, health: 60},
    {name: "дракон", level:20, health:300}
]
const locations = [{
    name: "Городская площадь",
    "button text": ["Отправиться в магазин", "Отправиться в пещеру", "Сразить дракона"],
    "button functions": [goStore, goCave, fightDragon],
    text: "Вы находитесь на городской площади. Вы видите вывеску с надписью \"Магазин\"."
},
    {
        name: "Магазин",
        "button text": ["Купить 10 здоровья (10 золота)", "Купить оружие (30 золотых)", "Отправиться на городскую площадь"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Вы вошли в магазин"
    },
    {
        name: "Пещера",
        "button text": ["Сразить слайм", "Сразить клыкастое чудовище", "Отправиться на городскую площадь"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "Вы входите в пещеру. Вы видите несколько монстров"
    }

]

function update(location) {
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

function goStore() {
    update(locations[1])
}

function goCave() {
    update(locations[2])
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10
        health += 10
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "У вас недостаточно золота, чтобы купить здоровье."
    }

}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30
            currentWeapon++
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name
            inventory.push(newWeapon)
            text.innerText = "Теперь у вас есть " + newWeapon + "."
            text.innerText += " В вашем инвентаре есть: " + inventory;
        } else {
            text.innerText = "У вас недостаточно золота, чтобы купить оружие."
        }
    } else {
        text.innerText = "У вас уже есть самое мощное оружие!"
        button2.innerText = "Продать оружие за 15 золотых"
        button2.onclick = sellWeapon
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        goldText.innerText = gold
        gold += 15
        let currentWeapon = inventory.shift()
        text.innerText = "Вы продали" + currentWeapon + "."
        text.innerText += " В вашем инвентаре есть: " + inventory + "."
    } else {
        text.innerText = "Не продавайте свое единственное оружие!"
    }
}

function fightSlime() {
    fighting =0
    goFight()
}

function fightBeast() {
    fighting =1
    goFight()
}

function fightDragon() {
    fighting =2
    goFight()
}
 function goFight() {}

function attack () {}
function dodge () {}

button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon


