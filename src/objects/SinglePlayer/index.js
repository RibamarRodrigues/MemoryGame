function SinglePlayer() {
    return `
    <div class="player-name single-player">
        <div>
            <label for="player">Your Name:</label>
            <input type="text" name="player" id="player1" maxlength="16"></input>
            <p class="error-message">Choose a name</p>
        </div>
    </div>`
}

export default SinglePlayer
