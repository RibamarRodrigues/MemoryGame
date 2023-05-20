function Timer() {
    const time = document.querySelector('.timer > span')
    
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
    window.ss = 0
    window.mn = 0
}

function StopTimer() {
    clearInterval(cron)
}

export {StartTimer, StopTimer}