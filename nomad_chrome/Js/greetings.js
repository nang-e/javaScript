const userForm = document.querySelector('#userform')
const userInput = userForm.querySelector('input')
const h1 = document.querySelector('h1')
const hour = new Date().getHours()

// Submitting the login form
function submituser(event){
    event.preventDefault()
    const userValue = userInput.value;
    formMade(userValue)
    localStorage.setItem('username',userValue)
}

// Hide a form & Show the greeting
// 5am~12pm : morning, 12pm~6pm : afternoon, 6pm ~ 5am : evening
function formMade(username){
    userForm.classList.add('hidden')
    if (hour >= 6 & hour < 12){
        h1.innerHTML = `Good Morning, ${username}`
    } else if (hour >= 12 & hour < 18){
        h1.innerHTML = `Good Afternoon, ${username}`
    } else if (hour >= 18 & hour <= 23){
        h1.innerHTML = `Good Evening, ${username}`
    } else {
        h1.innerHTML = `Good Night, ${username}`
    }
    h1.classList.remove('hidden')
}

// When there is no saved username, call the form. Else, just show the header
const userSaved = localStorage.getItem('username')

if (userSaved === null){
    userForm.addEventListener('submit',submituser)
} else {
    formMade(userSaved)
}

// Rename a username when the header is doubleclicked
function userRename(){
    h1.classList.add('hidden')
    userForm.classList.remove('hidden')
    userForm.addEventListener('submit',submituser)
}

h1.addEventListener('dblclick',userRename)
