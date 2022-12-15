const portfolioCards = document.querySelectorAll('.js-portfolio-card'),
    portfolioShadows = document.querySelectorAll('.js-portfolio-shadow')

console.log(portfolioCards, portfolioShadows);

const toggleDescription = (e) => {
    const cardClicked = e.target.closest('.js-portfolio-card'),
        shadowClicked = cardClicked.querySelector('.js-portfolio-shadow')

    const removeClass = (nodeList) => {
        nodeList.forEach(shadow => {
            shadow.classList.remove('portfolio-card__shadow--on')
        })

        console.log(nodeList)
    }


    removeClass(portfolioShadows)

    shadowClicked.classList.add('portfolio-card__shadow--on')

    setTimeout(() => {
        removeClass(portfolioShadows)
    }, 5000)
}

portfolioCards.forEach(card => {
    card.addEventListener('click', toggleDescription)
})