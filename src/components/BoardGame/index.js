import './style.css'
import CardGame from "../CardGame"
import Placar from "../Placar"

function BoardGame(Player1Name, Player2Name, Difficulty) {
    window.addEventListener('scroll', FixedPlacar)
    const cardGame = CardGame(Difficulty)
    const placar = Placar(Player1Name, Player2Name)

    return `
    <main>
        ${placar}
        <section class="board-game">
            ${cardGame}
        </section>
    </main>
    `
}

function FixedPlacar(event) {
    // const y = window.pageYOffset
    // if (y >= 90) {
    //     document.querySelector('.placar').classList.add('fixed')
    // } else {
    //     document.querySelector('.placar').classList.remove('fixed')
    // }
}

export default BoardGame