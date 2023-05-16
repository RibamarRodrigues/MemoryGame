function VerifyEndGame(event) {
    const cards = document.querySelectorAll('.container')
    const score = document.querySelectorAll('.score')
    let points = []
    
    if (event == "single") {
        if (cards.length/2 == score[0].textContent) 
            EndGame()
    } else {
        score.forEach(e => {
            points.push(Number(e.textContent))
        })
        points = points.reduce((a,b) => a+b)
       
        if (cards.length/2 == points) 
            EndGame()
    }
}


function EndGame() {
    location.reload()

    //test
    const $htmlEndSingle = `
    <div class="end-screen">
        <h1>Game Complete!!!</h1>
        <p>Time: 00:00</p>
        <p>Hit Rate: 0%</p>
        <div>
            <button>Home</button>
            <button>Try Again</button>
        </div>
    </div>
    `
    const $htmlEndMulti = `
    <div class="end-screen">
        <h1>Player1 Wins!!!</h1>
        <p>Time: 00:00</p>
        <p>
        <div>
            <button>Home</button>
            <button>Try Again</button>
        </div>
    </div>
    `
    const $root = document.querySelector('#root')
    $root.insertAdjacentHTML("beforeend", $htmlEndSingle)
}

// Para fazer o calculo de porcentagem
// é só dividir o score pelo número de movimentos
// e depois multiplicar por 100

export default VerifyEndGame
