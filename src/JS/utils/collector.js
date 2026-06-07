const collector = () => {
    const textareaValue = document.getElementById("textareaId").value // поле ввода
    const optionValue = document.getElementById("selectCipherId").value // Тип шифрования
    const shiftValue = document.getElementById("shiftId").valueAsNumber // Сдвиг для цезаря
    const resultValue = document.getElementById("resultId") // блок с результатом
    const language = document.getElementById("selectLanguageId").value // язык

    console.log( { textareaValue, optionValue, shiftValue, language, resultValue } )
    return { textareaValue, optionValue, shiftValue, language, resultValue } 
}

export { collector }