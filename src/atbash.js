import { ruArr, specialChars } from "../data/alphabets.js"

/* не работает */

const atbash = (originalText) => {
    console.log(`--- Работа шифра Атбаш ---`)
    console.log(`Исходник - "${originalText}"`)
    let result = ''

    for (let i = 0; i < originalText.length; i++) {

        let char = originalText[i]

        if (specialChars.includes(char)) {
            result += char
        } else if (char === char.toUpperCase()) {
            let indexNewChar = ((ruArr.length - 1) - ruArr.indexOf(char.toLowerCase()) + 1)
            /*             console.log(indexNewChar)
                        console.log(ruArr[indexNewChar]) */
            result += ruArr[indexNewChar].toUpperCase()
        } else {
            let indexNewChar = ((ruArr.length - 1) - ruArr.indexOf(char.toLowerCase()) + 1)
            result += ruArr[indexNewChar]
        }

    }

    console.log(`Вывод - "${result}"`)
    console.log(`Правильный вариант - "Поцэъм фяф ыъуя! А Д @"`)
}

export { atbash }

/* не работает */