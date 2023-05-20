import { StartGame } from "../StartGame"

function EndBtns() {
    const Players = document.querySelectorAll('.score > p')
    const Player2Name = Players[1] ? Players[1].textContent : ''
    let Difficulty = document.querySelector('.board-game')
    Difficulty = Difficulty.getAttribute('id')
    
    const HomeBtn = document.querySelector('.home')
    const TryAgainBtn = document.querySelector('.try-again')
    
    HomeBtn.addEventListener('click', ()=> {
        location.reload()
    })
    TryAgainBtn.addEventListener('click', ()=>{
        StartGame(Players[0].textContent, Player2Name, Difficulty)
    })
}

export default EndBtns