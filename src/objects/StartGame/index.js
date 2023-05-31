import BoardGame from "../../components/BoardGame"
import RevealCard from "../RevealCard"
import { StartTimer } from "../Timer"


function StartFromHomePage() {
    if (VerifyError()) return
    
    const Player1Name = document.querySelector('#player1').value
    const Player2Name = document.querySelector('#player2') ? document.querySelector('#player2').value : ''
    
    let Difficulty = document.querySelectorAll('input[name="difficulty"]')
    Difficulty = Array.from(Difficulty).filter(e => e.checked)
    Difficulty = Difficulty[0].getAttribute('id')

    StartGame(Player1Name, Player2Name, Difficulty)
}

function StartGame(Player1Name, Player2Name, Difficulty) {
    const $htmlBoardGame = BoardGame(Player1Name, Player2Name, Difficulty)

    const $root = document.querySelector('#root')
    while($root.firstChild){
        $root.removeChild($root.firstChild)
    }

    $root.insertAdjacentHTML("Beforeend", $htmlBoardGame)
    StartTimer()
    
    const cardsClick = document.querySelectorAll('.container')
    cardsClick.forEach(card=>{
        card.addEventListener("click", RevealCard)
    })
}

function VerifyError() {
    const player1 = document.querySelector('#player1')
    const player2 = document.querySelector('#player2')
    const errorMessage = document.querySelectorAll('.error-message')
    let errorContage = 0

    if (!player1.value) {
        player1.classList.add('error')
        errorMessage[0].classList.add('visible')
        errorContage++
    } else {
        player1.classList.remove('error')
        errorMessage[0].classList.remove('visible')
        errorContage-1
    }
    
    if (player2 && !player2.value) {
        player2.classList.add('error')
        errorMessage[1].classList.add('visible')
        errorContage++
    } else if (player2) {
        player2.classList.remove('error')
        errorMessage[1].classList.remove('visible')
        errorContage-1
    }
    
    if (errorContage > 0) return true
    else return false
}

export {StartFromHomePage, StartGame}