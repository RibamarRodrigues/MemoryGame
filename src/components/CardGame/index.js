import './style.css'

function CardGame(difficulty) {
    const cards = ['dog', 'car', 'frog', 'mug-saucer']
    if (difficulty == 'medium') {
        cards.push('spider', 'user-secret')
    } else if (difficulty == 'hard') {
        cards.push('spider', 'user-secret', 'motorcycle', 'truck-medical')
    }
    const cardsSort = [...cards, ...cards]
    cardsSort.sort(()=> Math.random() - 0.5)

    const setCards = cardsSort.map(card =>{
        return `
        <div class="container">
            <div class="flip">
                <img src="../images/fundo.jpg" class="front" data-image="${card}" alt="fundo do card game">
                <img src="../images/${card}.svg" class="back" alt="${card} do card game">
            </div>
        </div>`
    })
    
    return setCards.join('')
}

export default CardGame
