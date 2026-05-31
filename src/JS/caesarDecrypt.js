import { ruArr, specialChars } from "../../data/alphabets.js"

const negativeIndexCheck = (index) => {
    const ruLength = ruArr.length
    if (index < 0) {
        return index += ruLength
    } else {
        return index
    }
}

const caesarDecrypt = (originalText, key) => {
    console.log(`--- Расшифровка текта со сдвигом - "${key}" ---`)
    console.log(`Исходник - "${originalText}"`)
    
    let result = ''

    for (let i = 0; i < originalText.length; i++) {

        let char = originalText[i]

        if (!isNaN(char)) {
            result += char
        } else if (specialChars.includes(char)) {
            result += char
        } else if (char === char.toUpperCase()) {
            let indexNewChar = ruArr.indexOf(char.toLowerCase()) - key
            result += ruArr[negativeIndexCheck(indexNewChar)].toUpperCase()
        } else {
            let indexNewChar = ruArr.indexOf(char.toLowerCase()) - key
            result += ruArr[negativeIndexCheck(indexNewChar)]
        }
    }

    console.log(`Вывод - "${result}"`)
    console.log(`Правильный вариант - "Привет как дела! Я Ы @ 5"`)
}

export { caesarDecrypt }
