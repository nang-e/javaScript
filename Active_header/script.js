const toggleBtn = document.querySelector('.toggleBtn img')
const navMenu=document.querySelector('.navbar_menu')
const navSns=document.querySelector('.navbar_sns')

function clickBtn(){
    navMenu.classList.toggle('active')
    navSns.classList.toggle('active')
}

toggleBtn.addEventListener('click',clickBtn)