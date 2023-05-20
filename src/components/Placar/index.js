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
            <div class="player1 current score">
                <p>${player1} </p>
                <Span>0</Span>
            </div>

            <div class="timer">
                <p>Time: </p>
                <Span>00:00</Span>
            </div>

            <div class="player2 score">
                <p>${player2} </p>
                <Span>0</Span>
            </div>
        </div>`
    }
}

export default Placar