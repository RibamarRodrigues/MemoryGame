import './style.css'

function VerifyEndGame(gameMode) {
    const cards = document.querySelectorAll('.container')
    const score = document.querySelectorAll('.score')
    let points = []
    //EndGame(gameMode)
    
    if (gameMode == "single") {
        if (cards.length/2 == score[0].textContent) 
            EndGame(gameMode)
    } else {
        score.forEach(e => {
            points.push(Number(e.textContent))
        })

        points = points.reduce((a,b) => a+b)
        if (cards.length/2 == points) 
            EndGame(gameMode)
    }
}


function EndGame(gameMode) {
    //test
    const $htmlEndSingle = `
    <div class="end-screen">
        <h1>Game Complete!!!</h1>
        <p>Time: 00:00</p>
        <p>Hit Rate: 0%</p>
        <div class="end-screen-buttons">
            <button class="home">Home</button>
            <button class="try-again">Try Again</button>
        </div>
    </div>
    `
    const $htmlEndMulti = `
    <div class="end-screen">
        <h1>Player1 Wins!!!</h1>
        <p>Time: 00:00</p>
        <p>Score: 0 vs 0</p>
        <div>
            <button>Home</button>
            <button>Try Again</button>
        </div>
    </div>
    `
    const $root = document.querySelector('#root')
    $root.insertAdjacentHTML("beforeend", $htmlEndSingle)

    const endScreen = document.querySelector('.end-screen')
    const items = endScreen.querySelectorAll('p')
    const movements = Number(document.querySelector('.movements').textContent)
    let score = document.querySelectorAll('.score')
    score = Number(score[0].textContent)

    const hitRate = Math.floor((score/movements)*100)
    items[1].textContent = `Hit Rate: ${hitRate}%`
}

// Para fazer o calculo de porcentagem
// é só dividir o score pelo número de movimentos
// e depois multiplicar por 100

export default VerifyEndGame
