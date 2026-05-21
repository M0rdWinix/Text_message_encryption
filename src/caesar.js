import { ruArr, specialChars } from "../data/alphabets.js"

const caesar = (originalText, key) => {
    let result = ''
    console.log(`Исходник - "${originalText}"`)
    console.log(ruArr)
/*         let split = originalText.split('')
        console.log(split)
        console.log(split.join('')) */

    for (let i = 0; i < originalText.length; i++) {
        let char = originalText[i]
        let indexNewChar = ruArr.indexOf(char.toLowerCase()) + key

        if (!ruArr.includes(char)) {
            if (char === char.toUpperCase() && specialChars.includes()) {
                result += ruArr[indexNewChar].toUpperCase()
            } else result += char
        } 
        else result += ruArr[indexNewChar]
    }

    console.log(`Вывод - "${result}"`)
    console.log(`Правильный вариант - "Рсйгёу лбл еёмб! а"`)

}

export { caesar }
