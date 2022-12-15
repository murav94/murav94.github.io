const cards = document.querySelectorAll('.js-card'),
    shadows = document.querySelectorAll('.js-shadow')

let removeShadow

const toggleDescription = (e) => {
    const cardClicked = e.target.closest('.js-card'),
        shadowClicked = cardClicked.querySelector('.js-shadow')
    const isCardActive = shadowClicked.classList.contains('card__shadow--on')


    const removeClass = (nodeList) => {
        nodeList.forEach(shadow => {
            shadow.classList.remove('card__shadow--on')
        })
    }

    const removeShadowFunction = () => {
        shadowClicked.classList.remove('card__shadow--on')
    }

    removeClass(shadows);

    if (!isCardActive) {
        (shadowClicked.classList.add('card__shadow--on'))
        clearTimeout(removeShadow)
        removeShadow = setTimeout(removeShadowFunction, 3000)
    } else {
        clearTimeout(removeShadow)
    }
}

cards.forEach(card => {
    card.addEventListener('click', toggleDescription)
})