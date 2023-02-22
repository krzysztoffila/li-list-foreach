// tutaj rozwiązanie
const btn = document.body.querySelector('button')

let size = 10
btn.addEventListener('click', () => {
    const li = document.body.querySelectorAll('li')
    li.forEach(liItem => {
        liItem.style.display = 'block'
        liItem.style.fontSize = `${size}px`

    })
    size += 1

    console.log('klik')
})