import VerifyEndGame from "../EndGame"

function CheckGame(event){
    const placar = document.querySelector('.placar')
    const GameMode = placar.getAttribute('id')
    const current = document.querySelector('.current')
    const points = current.querySelector('.score > span')

    if (GameMode=="single") document.querySelector('.movements > span').textContent++

    if(event[0] == event[2]) {
        points.textContent++
        VerifyEndGame(GameMode)
    } else {
        if (GameMode=="multi") ChangeUser(placar)

        event[1].classList.remove('clicked')
        event[3].classList.remove('clicked')
    }
}

function ChangeUser(event) {
    const Players = Array.from(event.querySelectorAll('.score'))
    Players[0].classList.toggle('current')
    Players[1].classList.toggle('current')
}

export default CheckGame