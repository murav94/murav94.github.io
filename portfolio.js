const portfolioCards = document.querySelectorAll('.js-portfolio-card'),
    portfolioShadows = document.querySelectorAll('.js-portfolio-shadow')

console.log(portfolioCards, portfolioShadows);

const toggleDescription = (e) => {
    const cardClicked = e.target.closest('.js-portfolio-card'),
        shadowClicked = cardClicked.querySelector('.js-portfolio-shadow')

    portfolioShadows.forEach(shadow => {
        shadow.classList.remove('portfolio-card__shadow--on')
    })

    shadowClicked.classList.add('portfolio-card__shadow--on')
}

portfolioCards.forEach(card => {
    card.addEventListener('click', toggleDescription)
})