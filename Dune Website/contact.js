// SCROLL TO SECTION
const officeButtons = document.querySelectorAll('.js-office-btn')

officeButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault()
    const sectionTop = document.querySelector(e.target.getAttribute('href')).getBoundingClientRect().top,
        headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--desktopHeader').slice(0, -2)

    window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
    })
}))

// ACCORDION

const accordionSections = document.querySelectorAll('.js-accordion'),
    accordionCollapsibles = document.querySelectorAll('.infobar__collapsible')


const calculateMaxHeight = (el) => {
    (el.classList.contains('infobar__collapsible--active')) ? (el.style.maxHeight = `${el.scrollHeight}px`) : (el.style.maxHeight = '')
}

const toggleAccordion = (el) => {
    el.classList.toggle('infobar__collapsible--active');
    calculateMaxHeight(el)
}

const closeAccordion = (el) => {
    el.classList.remove('infobar__collapsible--active')
}

accordionSections.forEach(el => {
    el.querySelector('.js-accordion-title').addEventListener('click', (e) => {
        const collapsible = e.target.parentNode.querySelector('.infobar__collapsible')
        toggleAccordion(collapsible)
    })
})

document.addEventListener('DOMContentLoaded', () => {
    accordionCollapsibles.forEach(el => closeAccordion(el))
})

window.addEventListener('resize', () => {
    accordionCollapsibles.forEach(el => calculateMaxHeight(el))
})