import { ruArr, engArr } from "../data/alphabets.js"

const atbash = (originalText, language) => {
    /* console.log(`--- Работа шифра Атбаш ---`)
    console.log(`Исходник - "${originalText}"`) */
    let alphabet = language === 'russian' ? ruArr : engArr
    let result = ''

    /* console.log(`Выбранный язык - ${alphabet}`) */

    for (let i = 0; i < originalText.length; i++) {

        let char = originalText[i]

        if (alphabet.indexOf(char) === -1) {
            if (alphabet.includes(char.toLowerCase())) {
                let indexNewChar = alphabet.length - alphabet.indexOf(char.toLowerCase()) - 1
                result += alphabet[indexNewChar].toUpperCase()
            } else result += char
        } else {
            let indexNewChar = alphabet.length - alphabet.indexOf(char) - 1
            result += alphabet[indexNewChar]
        }
    }

    /* console.log(`Вывод - "${result}"`) */
    return result
}

export { atbash }