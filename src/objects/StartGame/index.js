import BoardGame from "../../components/BoardGame"
import RevealCard from "../RevealCard"
import Timer from "../Timer"

function StartGame() {
    const player1Name = document.querySelector('#player1').value
    const player2Name = document.querySelector('#player2') ? document.querySelector('#player2').value : ''

    if (VerifyError()) return

    let difficulty = document.querySelectorAll('input[name="difficulty"]')
    difficulty = Array.from(difficulty).filter(e => e.checked)
    difficulty = difficulty[0].getAttribute('id')
    
    const $htmlBoardGame = BoardGame(player1Name, player2Name, difficulty)

    const $root = document.querySelector('#root')
    while($root.firstChild){
        $root.removeChild($root.firstChild)
    }
    $root.insertAdjacentHTML("Beforeend", $htmlBoardGame)

    const cardsClick = document.querySelectorAll('.container')
    cardsClick.forEach(card=>{
        card.addEventListener("click", RevealCard)
        card.par = document.querySelector('#choise')
    })

    let cron = setInterval(()=> {
        Timer(cron)
    }, 1000)
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

export default StartGame