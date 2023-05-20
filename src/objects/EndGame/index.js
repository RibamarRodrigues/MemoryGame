import './style.css'
import { StopTimer } from '../Timer'
import EndBtns from '../EndBtns'

function VerifyEndGame(gameMode) {
    const cards = document.querySelectorAll('.container')
    const Scores = document.querySelectorAll('.score > span')
    console.log(Scores)
    let points = []

    EndGame(gameMode, Scores)
    if (gameMode == "single") {
        if (cards.length/2 == Scores[0].textContent) {
            EndGame(gameMode, Scores)
            StopTimer()
        }
    } else {
        Scores.forEach(e => points.push(Number(e.textContent)))
        points = points.reduce((a,b) => a+b)
        if (cards.length/2 == points) {
            EndGame(gameMode, Scores)
            StopTimer()
        } 
    }
}


function EndGame(gameMode, Scores) {
    const Content = Array.from(document.querySelectorAll('p'))
    const Time = document.querySelector('.timer').textContent
    let PlayerWins = Content.filter(player => 
        player.classList.contains('current'))
    PlayerWins = PlayerWins[0].textContent
    
    const $root = document.querySelector('#root')
    const $HtmlEndGame = HtmlEndGame(gameMode, Time, PlayerWins)
    $root.insertAdjacentHTML("beforeend", $HtmlEndGame)

    if (gameMode == "single") {
        const Score = Scores[0].textContent
        const movements = Number(document.querySelector('.movements').textContent)
        const hitRate = Math.floor((Number(Score)/Number(movements))*100)

        const HitHtml = document.querySelector('.hit-rate')
        HitHtml.textContent = `Hit Rate: ${hitRate}%`
    } else {
        let current = document.querySelector('.current')
        current = current.querySelector('.score')
        PlayerWins = PlayerWins.split('')
        PlayerWins = PlayerWins.filter(p => p!=current.textContent).join('')
        
        const PlayerWinsHtml = document.querySelector('.player-wins')
        PlayerWinsHtml.textContent = `${PlayerWins} Wins!!!`

        const ScoreHtml = document.querySelector('.score-multi')
        let ScoreLoser = Scores[1] == current ? Scores[0].textContent : Scores[0].textContent
        ScoreHtml.textContent = `Score: ${current.textContent} vs ${ScoreLoser}`

        if (Scores[0].textContent == Scores[1].textContent) {
            PlayerWinsHtml.textContent = "DRAW !!!"
            PlayerWinsHtml.style.color = "var(--color-final-game-draw)"
        }
    }

    EndBtns()
}

function HtmlEndGame(GameMode, Time, PlayerWins) {
    const $htmlEndSingle = `
    <div class="end-screen">
        <h1>Game Complete!!!</h1>
        <p>Time: ${Time}</p>
        <p class="hit-rate">Hit Rate: 0%</p>
        <div class="end-screen-buttons">
            <button class="home">Home</button>
            <button class="try-again">Try Again</button>
        </div>
    </div>
    `
    const $htmlEndMulti = `
    <div class="end-screen">
        <h1 class="player-wins">${PlayerWins} Wins!!!</h1>
        <p>Time: ${Time}</p>
        <p class="score-multi">Score: 0 vs 0</p>
        <div class="end-screen-buttons">
            <button class="home">Home</button>
            <button class="try-again">Try Again</button>
        </div>
    </div>
    `
    if (GameMode == "single") return $htmlEndSingle
    else return $htmlEndMulti
}

export default VerifyEndGame
