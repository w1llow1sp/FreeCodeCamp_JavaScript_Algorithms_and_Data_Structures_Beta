const checkBtn = document.getElementById('check-btn')
const inputText = document.getElementById('text-input')
const resultWindow = document.getElementById('result')

// check if input is empty
checkBtn.addEventListener('click', () => {
    if(inputText.value === '') {
        alert('Please input a value')
    } else {
        palindromeChecker(inputText.textContent)
    }
})

const palindromeChecker = (text) => {
    const polishedString = text.toLowerCase().match(/[a-z0-9]/g)
    console.log(polishedString.join(''))
    const reversedString = text.toLowerCase().match(/[a-z0-9]/g).reverse().join('')
    console.log(reversedString)
     return polishedString.join('') === reversedString

}

palindromeChecker('not a palindrome')
palindromeChecker('nope')
palindromeChecker('1 eye for of 1 eye.')
palindromeChecker('0_0 (: /-\\ :) 0-0')
palindromeChecker('five|\_/|four')
