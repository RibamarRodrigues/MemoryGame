function CheckGame(event){
    const test = document.querySelector('.placar')
    const id = test.getAttribute('id')
    const current = document.querySelector('.current')
    const points = current.querySelector('.score')

    if (id=="single") document.querySelector('.movements').textContent++

    if(event[0] == event[2]) {
        points.textContent++
    } else {
        if (id=="multi") ChangeUser(test)

        event[1].classList.remove('clicked')
        event[3].classList.remove('clicked')
    }

    EndGame(points.textContent)
}

function EndGame(points) {
    let test = document.querySelectorAll('.score')
    test.forEach(a => {
        console.log(typeof Number(a.textContent))
    })
    // test = Array.from(test).reduce((a,b)=> Number(a)+Number(b))

    const cards = document.querySelectorAll('.container')
    //console.log(`Número de cartas: ${cards.length}`)
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