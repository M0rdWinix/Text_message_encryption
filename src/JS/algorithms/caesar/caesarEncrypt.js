import { ruArr, engArr } from "../../data/alphabets.js"

const caesarEncrypt = (originalText, key, language) => {
    /* console.log(`--- Шифрование текта со сдвигом - "${key}" ---`)
    console.log(`Исходник - "${originalText}"`) */

    let alphabet = language === 'russian' ? ruArr : engArr
    let result = ''

    /* console.log(`Выбранный язык - ${alphabet}`) */

    const IndexCheck = (index) => {
        const alphabetLength = alphabet.length
        if (index >= alphabetLength) {
            return index -= alphabetLength
        } else {
            return index
        }
    }

    for (let i = 0; i < originalText.length; i++) {

        let char = originalText[i]

        if (alphabet.indexOf(char) === -1) {
            if (alphabet.includes(char.toLowerCase())) {
                let indexNewChar = alphabet.indexOf(char.toLowerCase()) + key
                result += alphabet[IndexCheck(indexNewChar)].toUpperCase()
            } else result += char
        } else {
            let indexNewChar = alphabet.indexOf(char.toLowerCase()) + key
            result += alphabet[IndexCheck(indexNewChar)]
        }
    }

    /* console.log(`Вывод - "${result}"`) */
    
    return result
}

export { caesarEncrypt }