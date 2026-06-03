import { caesarEncrypt } from "./caesarEncrypt.js";
import { collector } from "./collector.js";

const encryptFunction = (textareaValue, optionValue, shiftValue, Language) => {

    collector()

    textareaValue = collector([0]), optionValue = collector()[1], shiftValue = collector()[2], Language = collector()[3]

    if (textareaValue === '') {
        alert("Введите текст в поле ввода!")
    } 
    switch (optionValue) {
        case 'caesar':
            if (shiftValue < 1 || shiftValue > 33 || Number.isNaN(shiftValue)) {
                alert("Введите сдвиг для шифра цезаря в диапазоне от 1 до 33 включительно!")
            } else caesarEncrypt(textareaValue, shiftValue, language)
            break
        case 'atbash':
            //atbash
            break
            
    }
    
}

export { encryptFunction }