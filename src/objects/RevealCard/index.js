import CheckGame from "../CheckGame"

let choises = []
function RevealCard(event) {
    const target = event.currentTarget
    if (target.classList.contains('clicked')) return
    if (choises.length == 0) {
        choises.push(event.target.getAttribute('data-image'), target)
        target.classList.add('clicked')
    } else if (choises.length == 2) {
        choises.push(event.target.getAttribute('data-image'), target)
        target.classList.add('clicked')
        setTimeout(()=> {
            CheckGame(choises)
            choises = []
        }, 1000)
    }
}

export default RevealCard