const screenHeight = window.innerHeight
const divs = document.querySelectorAll('div')

document.addEventListener('scroll', () => {
    const screenBottom = document.documentElement.scrollTop + screenHeight
    divs.forEach((div) => {
        if (div.offsetTop <= screenBottom && !div.classList.contains('slide-in')) {
            div.classList.add('slide-in')
        }
    })
})