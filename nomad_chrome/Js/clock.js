const h1Date = document.querySelector('h1#clockDay')
const h2Clock = document.querySelector('h2#clock')
const MONTH = {1: 'January',2: 'February',3: 'March',4: 'April',5: 'May',6: 'June',7: 'July',8: 'August',9: 'September',10: 'October',11: 'November',12: 'December'}
const WEEKDAY = {0: 'Sun',1: 'Mon', 2:'Tue',3:'Wed', 4:'Thr', 5:'Fri', 6:'Sat'}

function clock(){
    const date = new Date()
    const hour = date.getHours().toString().padStart(2,'0')
    const minute = date.getMinutes().toString().padStart(2,'0')
    const second = date.getSeconds().toString().padStart(2,'0')
    h2Clock.innerText = `${hour}:${minute}:${second}`
}

function clockDate(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekday = date.getDay()
    h1Date.innerText = `${WEEKDAY[weekday]}, ${day} ${MONTH[month+1]}, ${year}`
}


clock()
clockDate()
setInterval(clock, 1)
setInterval(clockDate,1000)