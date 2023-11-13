const button = document.querySelector('button');
const body = document.querySelector('body');
const table = document.querySelectorAll('tr')
button.addEventListener('click',()=>{
    console.log(button.innerText);
    if(button.innerText === 'Dark mode'){
        button.innerText = 'Light mode';
        body.setAttribute('class','dark');
        button.style.backgroundColor = 'rgb(2, 2, 31)';
        for (const element of table) {
            element.setAttribute('class','tr')
        }
    } else {
        button.innerText = 'Dark mode';
        body.setAttribute('class','light');
        button.style.backgroundColor = 'white';
        for (const element of table) {
            element.setAttribute('class','tr-light')
        }
    }
})