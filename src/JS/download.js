const downloadFunction = () => {
    let inputField = document.getElementById('textareaId')

    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.txt'

    input.onchange = async (event) => {
        const file = event.target.files[0]
        if (!file) return

        const text = await file.text()
        inputField.value = text
    }

    input.click()
}

export { downloadFunction }