import VerifyEndGame from "../EndGame"

function CheckGame(event){
    const placar = document.querySelector('.placar')
    const id = placar.getAttribute('id')
    const current = document.querySelector('.current')
    const points = current.querySelector('.score > span')

    if (id=="single") document.querySelector('.movements > span').textContent++

    if(event[0] == event[2]) {
        points.textContent++
        VerifyEndGame(id)
    } else {
        if (id=="multi") ChangeUser(placar)

        event[1].classList.remove('clicked')
        event[3].classList.remove('clicked')
    }
}

function ChangeUser(event) {
    const players = Array.from(event.querySelectorAll('p'))
    players[0].classList.toggle('current')
    players[2].classList.toggle('current')
}

export default CheckGame