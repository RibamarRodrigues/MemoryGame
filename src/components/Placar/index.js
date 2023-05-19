import './style.css'

function Placar(player1, player2) {
    if (player2 == '') {
        return `
        <div class='placar' id="single">
            <div class='player1 current score'>
                <p>${player1}</p>
                <Span>0</Span>
            </div>

            <div class='movements'>
                <p>Movements:</p>
                <Span>0</Span>
            </div>

            <div class="timer">
                <p>Time:</p>
                <Span>00:00</Span>
            </div>
        </div>`
    } else {
        return `
        <div class='placar' id="multi">
            <p class="player1 current">${player1} </p>
            <Span class='score'>0</Span>

            <p>Time: </p>
            <Span class="timer">00:00</Span>

            <p class="player2">${player2} </p>
            <Span class='score'>0</Span>
        </div>`
    }
}

export default Placar