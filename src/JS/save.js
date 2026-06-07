const saveFunction = () => {
    const resultValue = document.getElementById("resultId").innerText

    if (!resultValue || resultValue === 'Ожидание результата...') {
        alert('Нет зашифрованного текста для сохранения!')
        return
    }

    const blob = new Blob([resultValue], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'encrypted_text.txt'
    
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}

export { saveFunction }