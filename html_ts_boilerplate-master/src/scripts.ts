
const btn = document.querySelectorAll('.js-btn')
const box = document.querySelectorAll<HTMLElement>('.js-box')
const section = document.querySelectorAll<HTMLElement>('.js-section')
const input = document.querySelector<HTMLElement>('.js-input-field')
const underInput = document.querySelector<HTMLElement>('.js-under-input')



input?.addEventListener('input', () => {
    // underInput?.textContent = (<HTMLInputElement>document.querySelector('.js-input-field')).value
    // underInput?.innerHTML = (<HTMLInputElement>document.querySelector('.js-input-field')).value

    const output = document.querySelector<HTMLElement>('.js-under-input')
    if (output) output.innerHTML = (<HTMLInputElement>document.querySelector('.js-input-field')).value
})


btn[0]?.addEventListener('click', () => {
    box[0].style.backgroundColor = 'yellow'
})

btn[1]?.addEventListener('click', () => {
    box[1].textContent = 'SUCCESS'
})

btn[2]?.addEventListener('click', () => {
    box[2].style.display = 'none'
})

let activeIndex = 0

btn[3]?.addEventListener('click', () => {
    if (activeIndex === 0) {
        box[3].style.visibility = 'hidden '
        activeIndex = 1
    } else if (activeIndex === 1) {
        box[3].style.visibility = 'visible'
        activeIndex = 0
    }
    
})

let colors = ['red', 'green', 'orange', 'blue', 'purple']
let storedNum = 0
let RNG = Math.floor(Math.random() * 5);

btn[4]?.addEventListener('click', () => {
    while (storedNum === RNG) {
        RNG = Math.floor(Math.random() * 5);
    }    
   
    storedNum = RNG
    box[4].style.backgroundColor = colors[storedNum]
})

function countDown() {
    let i = 0
    while (i <= 10)
    i++
    console.log(i) 
}

btn[5]?.addEventListener('click', () => {
    let sec = 0
    let timer = setInterval(() => {
        box[5].innerHTML = String(1 + sec)
        sec++
        if(sec === 10){
            clearInterval(timer);
        }       
    }, 3000)   
})  

btn[6]?.addEventListener('click', () => {
    for (let i = 0; i < box.length; i++)
    box[i].style.backgroundColor = '#18d5e1'

    for (let i = 0; i < section.length; i++)
    section[i].style.backgroundColor = '#000000'
})

box[0]?.addEventListener('mouseenter', () => {
    box[0].style.backgroundColor = 'red'
})


let timer: ReturnType<typeof setInterval>;

box[4]?.addEventListener('mouseenter', () => {
    let sec = 0
    timer = setInterval(() => {
        box[4].innerHTML = String(1 + sec)
        sec++
        if(sec === 10){
            clearInterval(timer);
        }       
    }, 1000)   
})  

box[4]?.addEventListener('mouseleave', () => {
    clearInterval(timer)
    box[4].innerHTML = String(0) 
})  

