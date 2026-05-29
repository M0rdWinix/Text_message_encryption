const getData = (selectId, numberInputId) => {
    const selectElement = document.getElementById(selectId)
    const numberInput = document.getElementById(numberInputId)

     if (!selectElement || !numberInput) {
        throw new Error('Элементы формы не найдены');
    }

    const selectedValue = selectElement.value;
    const selectedText = selectElement.options[selectElement.selectedIndex]?.text || '';
    const numberValue = numberInput.value;
    const numberAsNumber = parseFloat(numberValue); 
}