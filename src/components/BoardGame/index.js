import './style.css'
import CardGame from "../CardGame"
import Placar from "../Placar"

function BoardGame(Player1Name, Player2Name, Difficulty) {
    const cardGame = CardGame(Difficulty)
    const placar = Placar(Player1Name, Player2Name)

    return `
    <main>
        ${placar}
        <section class="board-game" id="${Difficulty}">
            ${cardGame}
        </section>
    </main>
    `
}

export default BoardGame