const collector = () => {
    const textareaValue = document.getElementById("textareaId").value // поле ввода
    const optionValue = document.getElementById("selectCipherId").value // Тип шифрования
    const shiftValue = document.getElementById("shiftId").valueAsNumber // Сдвиг для цезаря
    const resultValue = document.getElementById("resultId") // блок с результатом
    const Language = document.getElementById("selectLanguageId").value // язык

    /* alert(`Исходный текст = ${textareaValue}, ШИФР = ${optionValue}, СДВИГ = ${shiftValue}, Язык = ${Language}`) */
    console.log( { textareaValue, optionValue, shiftValue, Language } )
    const objectOfValue = { textareaValue, optionValue, shiftValue, Language }
    console.log(objectOfValue)
    return objectOfValue
}

export { collector }