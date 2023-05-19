import SinglePlayer from "../SinglePlayer"
import MultiPlayer from "../MultiPlayer"
import { StartFromHomePage } from "../StartGame"

function GameMode(event) {
    const $origin = event.target

    const $divGeral = $origin.closest('.geral')
    while($divGeral.firstChild){
        $divGeral.removeChild($divGeral.firstChild)
    }

    const mode = $origin.getAttribute('id')
    if (mode == "single") {
        const $html = SinglePlayer()
        $divGeral.insertAdjacentHTML("Beforeend", $html)
    } else {
        const $html = MultiPlayer()
        $divGeral.insertAdjacentHTML("Beforeend", $html)
    }

    document.querySelector('.difficulty').style.display = 'grid'
    document.querySelector('.back-btn').classList.add('visible')
    
    const startGameBtn = document.querySelector('.start-game')
    startGameBtn.addEventListener('click', StartFromHomePage)
}

export default GameMode