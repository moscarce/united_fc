const button = document.querySelector('button');
const body = document.querySelector('body');
const table = document.querySelectorAll('tr')
let mode;
button.addEventListener('click',()=>{
    if(button.innerText === 'Dark mode'){
        button.innerText = 'Light mode';
        body.setAttribute('class','dark');
        button.style.backgroundColor = 'rgb(2, 2, 31)';
        for (const element of table) {
            element.setAttribute('class','tr')
        }
        mode = 'Dark mode'
    } else {
        button.innerText = 'Dark mode';
        body.setAttribute('class','light');
        button.style.backgroundColor = 'rgb(231, 227, 227)';
        for (const element of table) {
            element.setAttribute('class','tr-light')
        }
        mode = 'Light mode'
    }
    localStorage.setItem('theme',JSON.stringify(mode))
})

let savedMode = JSON.parse(localStorage.getItem('theme'))

if (savedMode === 'Dark mode'){
    button.innerText = 'Light mode';
    body.setAttribute('class','dark');
    button.style.backgroundColor = 'rgb(2, 2, 31)';
    for (const element of table) {
        element.setAttribute('class','tr')
    }
}

