// tutaj rozwiązanie
const btn = document.body.querySelector('button')
const li = document.body.querySelectorAll('li')
let size = 10
btn.addEventListener('click', () => {
    li.forEach(liItem => {
        liItem.style.display = 'block'
        liItem.style.fontSize = `${size}px`
        size++
    })
    console.log('klik')
})