import './style.css'

function HomePage() {
    return `
    <section class="home-page">
        <h1>Matching<br>Game</h1>
        <div class="geral">
            <div class="start visible">
                <button class="single" id="single">Single Player</button>
                <button class="multi" id="multi">Multi Player</button>
            </div>
        </div>
        <div class="difficulty">
            <p>Select Difficulty:</p>
            <input type="radio" name="difficulty" id="easy" checked>
            <input type="radio" name="difficulty" id="medium">
            <input type="radio" name="difficulty" id="hard">
            <button class="start-game">Start</button>
        </div>
        <div class= "last-btns">
            <button class="back-btn" id="back">Back</button>
            <button class="rules">Rules</button>
        </div>
    </section>
    `
}

export default HomePage