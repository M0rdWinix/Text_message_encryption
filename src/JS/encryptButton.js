import { caesarEncrypt } from "./caesarEncrypt.js";

const encryptButton = (textareaValue, optionValue, shiftValue, Language) => {
    if (textareaValue === '') {
        alert("Введите текст в поле ввода!")
    } 
    switch (optionValue) {
        case 'caesar':
            if (shiftValue < 1 || shiftValue > 33 || Number.isNaN(shiftValue)) {
                alert("Введите сдвиг для шифра цезаря в диапазоне от 1 до 33 включительно!")
            } else caesarEncrypt(textareaValue, shiftValue, Language)
            break
        case 'atbash':
            //atbash
            break
    }

}

export { encryptButton }