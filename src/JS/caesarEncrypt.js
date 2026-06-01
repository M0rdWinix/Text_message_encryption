import { ruArr, engArr, specialChars } from "../../data/alphabets.js"

const positiveIndexCheck = (index) => {
    const ruLength = ruArr.length
    if (index > ruLength) {
        return index -= ruLength
    } else {
        return index
    }
}

const caesarEncrypt = (originalText, key, Language) => {
    console.log(`--- Шифрование текта со сдвигом - "${key}" ---`)
    console.log(`Исходник - "${originalText}"`)
    let alphabet = ''

    switch (Language) {
        case 'russian':
            alphabet = ruArr
            break
        case 'english':
            alphabet = engArr
            break
    }
    console.log(`Выбранный язык - ${alphabet}`)
    let result = ''

    for (let i = 0; i < originalText.length; i++) {

        let char = originalText[i]

        if (!isNaN(char)) {
            result += char
        } else if (specialChars.includes(char)) {
            result += char
        } else if (char === char.toUpperCase()) {
            let indexNewChar = alphabet.indexOf(char.toLowerCase()) + key
            result += alphabet[positiveIndexCheck(indexNewChar)].toUpperCase()
        } else {
            let indexNewChar = alphabet.indexOf(char.toLowerCase()) + key
            result += alphabet[positiveIndexCheck(indexNewChar)]
        }
    }

    console.log(`Вывод - "${result}"`)
    /* console.log(`Правильный вариант - "Щътлоь фйф нохй! И Е @ 5"`) */
    return result
}

/* caesarEncrypt() */
export { caesarEncrypt }