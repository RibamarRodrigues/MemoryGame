let ss = 0
let mn = 0
function Timer() {
    const time = document.querySelector('.timer > span')
    console.log('começou')
    ss++
    if(ss == 60){
        ss = 0
        mn++
    }
    if (mn == 60) clearInterval(cron)
    let format = (mn < 10 ? `0${mn}` : mn) + ":" + (ss < 10 ? `0${ss}` : ss)
    time.textContent = format
}

function StartTimer() {
    window.cron = setInterval(Timer, 1000)
}

function StopTimer() {
    clearInterval(cron)
}

export {StartTimer, StopTimer}