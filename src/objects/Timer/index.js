let ss = 0
let mn = 0
function Timer(cron) {
    const time = document.querySelector('.timer')
    ss++
    if(ss == 60){
        ss = 0
        mn++
    }
    if (mn == 60) clearInterval(cron)
    let format = (mn < 10 ? `0${mn}` : mn) + ":" + (ss < 10 ? `0${ss}` : ss)

    time.textContent = format
}

export default Timer