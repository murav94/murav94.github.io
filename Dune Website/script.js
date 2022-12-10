// HEADER - MOBILE NAVIGATION
const hamburgerBtn = document.querySelector('.header__hamburger')

const navMobile = document.querySelector('.header__navMobile')

const toggleNavMobile = (e) => {
    if (e.target.getAttribute('id') == "menu_checkbox") return


    if (navMobile.classList.contains('header__navMobile--on')) {
        navMobile.classList.toggle('header__navMobile--animate')
        setTimeout(() => {
            document.querySelector('.main').classList.toggle('hidden')
            document.querySelector('.footer').classList.toggle('hidden')
            navMobile.classList.toggle('header__navMobile--on')
        }, 300)
    } else {
        document.querySelector('.main').classList.toggle('hidden')
        document.querySelector('.footer').classList.toggle('hidden')
        navMobile.classList.toggle('header__navMobile--on')
        setTimeout(() => {
            navMobile.classList.toggle('header__navMobile--animate')
        }, 10)
    }
}

hamburgerBtn.addEventListener('click', toggleNavMobile)