import { encryptButton } from "./encryptButton.js"

const test = () => {
    const textareaValue = document.getElementById("textareaId").value // поле ввода
    const optionValue = document.getElementById("selectCipherId").value // Тип шифрования
    const shiftValue = document.getElementById("shiftId").valueAsNumber // Сдвиг для цезаря
    const resultValue = document.getElementById("resultId") // блок с результатом
    const Language = document.getElementById("selectLanguageId") // язык

    /* alert(`Исходный текст = ${textareaValue}, ШИФР = ${optionValue}, СДВИГ = ${shiftValue}`) */
    const buttonEncrypt = document.getElementById("buttonEncryptId")
    buttonEncrypt.addEventListener('click', encryptButton(textareaValue, optionValue, shiftValue, Language))
    /* alert(`вывод = ${input}`) */
}



/* caesarEncrypt("Привет как дела! Я Ы @ 5", 10)
caesarDecrypt("Щътлоь фйф нохй! И Е @ 5", 10) */