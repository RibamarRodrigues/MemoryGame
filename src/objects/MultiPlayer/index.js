function MultiPlayer() {
    return `
    <div class="player-name multi-player">
        <div>
            <label for="player1">Player1 Name:</label>
            <input type="text" name="player1" id="player1" maxlength="12">
            <p class="error-message">Choose a name</p>
        </div>
        <div>
            <label for="player2">Player2 Name:</label>
            <input type="text" name="player2" id="player2" maxlength="12">
            <p class="error-message">Choose a name</p>
        </div>
    </div>`
}

export default MultiPlayer