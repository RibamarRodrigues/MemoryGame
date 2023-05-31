import './style.css'
import { StopTimer } from '../Timer'
import EndBtns from '../EndBtns'

function VerifyEndGame(GameMode) {
    const cards = document.querySelectorAll('.container')
    const Scores = document.querySelectorAll('.score > span')
    let points = []

    if (GameMode == "single") {
        if (cards.length/2 == Scores[0].textContent) {
            EndGame(GameMode, Scores)
            StopTimer()
        }
    } else {
        Scores.forEach(e => points.push(Number(e.textContent)))
        points = points.reduce((a,b) => a+b)
        if (cards.length/2 == points) {
            EndGame(GameMode, Scores)
            StopTimer()
        } 
    }
}


function EndGame(GameMode, Scores) {
    const PlayerWinName = document.querySelector('.score.current > p').textContent
    const Time = document.querySelector('.timer > span').textContent
    const Player1Score = Number(Scores[0].textContent)
    const Player2Score = Scores[1] ? Number(Scores[1].textContent) : ''

    const $root = document.querySelector('#root')
    const $HtmlEndGame = HtmlEndGame(GameMode, Time, PlayerWinName, Player1Score, Player2Score)
    $root.insertAdjacentHTML("beforeend", $HtmlEndGame)

    if (GameMode == "single") {
        const movements = document.querySelector('.movements > span').textContent
        const hitRate = Math.floor((Player1Score/Number(movements))*100)
        const HitHtml = document.querySelector('.hit-rate')
        HitHtml.textContent = `Hit Rate: ${hitRate}%`
    } else if (Player1Score == Player2Score) {
        const PlayerWinHtml = document.querySelector('.player-wins')
        PlayerWinHtml.textContent = "DRAW !!!"
        PlayerWinHtml.style.color = "var(--color-final-game-draw)"
    }
    EndBtns()
}

function HtmlEndGame(GameMode, Time, PlayerWinName, Player1Score, Player2Score) {
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
        <h1 class="player-wins">${PlayerWinName} Wins!!!</h1>
        <p>Time: ${Time}</p>
        <p class="score-multi">Score: ${Math.max(Player1Score, Player2Score)} vs ${Math.min(Player1Score, Player2Score)}</p>
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
