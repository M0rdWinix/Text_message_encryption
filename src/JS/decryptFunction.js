import { caesarDecrypt } from "./algorithms/caesar/caesarDecrypt.js";
import { atbash } from "./algorithms/atbash.js";
import { collector } from "./utils/collector.js";

const decryptFunction = () => {

    const data = collector()

    if (data.textareaValue === '') {
        alert("Введите текст в поле ввода!")
    }
    else
        switch (data.optionValue) {
            case 'caesar':
                switch (data.language) {
                    case 'russian':
                        if (data.shiftValue < 1 || data.shiftValue > 33 || Number.isNaN(data.shiftValue)) {
                            alert("Введите сдвиг для шифра цезаря в диапазоне от 1 до 33 включительно!")
                        } else {
                            data.resultValue.textContent = caesarDecrypt(data.textareaValue, data.shiftValue, data.language)
                        }
                        alert("Текст успешно расшифрован!")
                        break
                    case 'english':
                        if (data.shiftValue < 1 || data.shiftValue > 26 || Number.isNaN(data.shiftValue)) {
                            alert("Введите сдвиг для шифра цезаря в диапазоне от 1 до 26 включительно!")
                        } else {
                            data.resultValue.textContent = caesarDecrypt(data.textareaValue, data.shiftValue, data.language)
                        }
                        alert("Текст успешно расшифрован!")
                        break
                }
                break
            case 'atbash':
                data.resultValue.textContent = atbash(data.textareaValue, data.language)
                alert("Текст успешно расшифрован!")
                break
        }
}

export { decryptFunction }