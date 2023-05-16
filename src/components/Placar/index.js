import './style.css'

function Placar(player1, player2) {
    if (player2 == '') {
        return `
        <div class='placar' id="single">
            <p class="current">${player1} <Span class='score'>0</Span>
            <p>Movements: <Span class='movements'>0</Span>
            <p>Time: <Span class="timer">00:00</Span>
        </div>`
    } else {
        return `
        <div class='placar' id="multi">
            <p class="current">${player1} <Span class='score'>0</Span>
            <p>Time: <Span class="timer">00:00</Span>
            <p>${player2} <Span class='score'>0</Span>
        </div>`
    }
}

export default Placar