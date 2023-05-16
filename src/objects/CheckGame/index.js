import VerifyEndGame from "../EndGame"

function CheckGame(event){
    const placar = document.querySelector('.placar')
    const id = placar.getAttribute('id')
    const current = document.querySelector('.current')
    const points = current.querySelector('.score')

    if (id=="single") document.querySelector('.movements').textContent++

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
    const search = event.querySelector('.current')
    if (players.indexOf(search) == 0){
        players[0].classList.remove('current')
        players[2].classList.add('current')
    } else {
        players[0].classList.add('current')
        players[2].classList.remove('current')
    }
}

export default CheckGame