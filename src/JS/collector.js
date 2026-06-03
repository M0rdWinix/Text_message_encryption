const collector = () => {
    const textareaValue = document.getElementById("textareaId").value // поле ввода
    const optionValue = document.getElementById("selectCipherId").value // Тип шифрования
    const shiftValue = document.getElementById("shiftId").valueAsNumber // Сдвиг для цезаря
    const resultValue = document.getElementById("resultId") // блок с результатом
    const language = document.getElementById("selectLanguageId").value // язык

    /* alert(`Исходный текст = ${textareaValue}, ШИФР = ${optionValue}, СДВИГ = ${shiftValue}, Язык = ${Language}`) */
    const arrayOfValue = [ textareaValue, optionValue, shiftValue, language ]
    console.log(arrayOfValue)
    return arrayOfValue
}

export { collector }