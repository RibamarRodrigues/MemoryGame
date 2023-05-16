import GameMode from "../GameMode"
import Back from "../Back"

function LoadGame() {
    const SingleBtn = document.querySelector('.single')
    const MultiBtn = document.querySelector('.multi')
    const BackBtn = document.querySelector('.back-btn')

    SingleBtn.addEventListener('click', GameMode)
    MultiBtn.addEventListener('click', GameMode)
    BackBtn.addEventListener('click', Back)
}

export default LoadGame