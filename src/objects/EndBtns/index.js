import { StartGame } from "../StartGame"

function EndBtns() {
    const HomeBtn = document.querySelector('.home')
    const TryAgainBtn = document.querySelector('.try-again')
    const Player1Name = document.querySelector('.player1')
    const Player2Name = document.querySelector('.player2')
    // let difficulty = document.querySelectorAll('main')
    // console.log(difficulty)
    // difficulty = difficulty[0].getAttribute('id')
    
    HomeBtn.addEventListener('click', ()=> {
        location.reload()
    })
    TryAgainBtn.addEventListener('click', ()=>{
        StartGame(Player1Name.textContent, Player2Name.textContent)
    })
}

export default EndBtns