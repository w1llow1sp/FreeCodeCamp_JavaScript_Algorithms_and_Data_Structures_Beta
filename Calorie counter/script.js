const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')

let isError = false

function cleanInputString (str){
    let regex=/[+-\s]/g
    return str.replace(regex,'')
}

function isInvalidInput (str) {
    let regex = /\d+e\d+/i
    return str.match(regex)
}

function addEntry () {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length ;
}
