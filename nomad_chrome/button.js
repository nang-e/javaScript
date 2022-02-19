const userForm = document.querySelector('#userform')
const userInput = userForm.querySelector('input')
const h1 = document.querySelector('h1')

function submituser(event){
    event.preventDefault()
    const userValue = userInput.value;
    formMade(userValue)
    localStorage.setItem('username',userValue)
}

function formMade(username){
    userForm.classList.add('hidden')
    h1.innerHTML = `Hello, ${username}`
    h1.classList.remove('hidden')
}

const userSaved = localStorage.getItem('username')

if (userSaved === null){
    userForm.addEventListener('submit',submituser)
} else {
    formMade(userSaved)
}

function userRename(){
    h1.classList.add('hidden')
    userForm.classList.remove('hidden')
    userForm.addEventListener('submit',submituser)
}

h1.addEventListener('dblclick',userRename)