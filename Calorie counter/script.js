const calorieCounter = document.getElementById('calorie-counter')
const budgetNumberInput = document.getElementById('budget')
const entryDropdown = document.getElementById('entry-dropdown')
const addEntryButton = document.getElementById('add-entry')
const clearButton = document.getElementById('clear')
const output = document.getElementById('output')

let isError = false

function cleanInputString(str) {
    let regex = /[+-\s]/g
    return str.replace(regex, '')
}

function isInvalidInput(str) {
    let regex = /\d+e\d+/i
    return str.match(regex)
}

function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`)
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length +1;
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
                         <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name">
<label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
<input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories">`

    targetInputContainer.insertAdjacentHTML('beforeend',HTMLString)
}

addEntryButton.addEventListener('click', addEntry)
function calculateCalories (e) {
    e.preventDefault()
    isError = false
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    let breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs)
}

function getCaloriesFromInputs(list) {
let calories =0
    for (const item of list) {
        const currVal = cleanInputString(item.value)
        const  invalidInputMatch = isInvalidInput(currVal)
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories +=Number(currVal)
    }
    return calories
}


