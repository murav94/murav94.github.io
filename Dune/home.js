// PICTURE CAROUSEL
const navArrows = document.querySelectorAll('.home__arrowIcon')
const picContainer = document.querySelector('.home__picture')
const mainSlogan = document.querySelector('.home__slogan')

let pictureIndex = 0
const pictureNumber = 5
let isDesktop = false
const pictureNamesSuffixes = ['_banner_01.jpg', '_banner_02.jpg', '_banner_03.jpg', '_banner_04.jpg', '_banner_05.jpg']

const changePictureIndex = (e) => {
    (e.target.dataset.navdir === "right") ? pictureIndex++ : pictureIndex--
}

const changeCarouselPicture = () => {
    if (pictureIndex >= pictureNumber) pictureIndex = 0
    if (pictureIndex < 0) pictureIndex = pictureNumber - 1

    picContainer.style.backgroundImage = `url('img/main/${isDesktop?'desktop':'mobile'}${pictureNamesSuffixes[pictureIndex]}')`

    if (pictureIndex === 0) {
        (mainSlogan.classList.remove('hidden'))
    } else {
        (mainSlogan.classList.add('hidden'))
    }
}

let changePicture = setInterval(() => {
    pictureIndex++
    changeCarouselPicture()
}, 3000)

const changePictureToDesktop = (breakpoint) => {
    (window.innerWidth >= breakpoint) ? isDesktop = true: isDesktop = false
}

navArrows.forEach((arrow) => {
    arrow.addEventListener('click', (e) => {
        changePictureIndex(e)
        changeCarouselPicture()

        clearInterval(changePicture)
        changePicture = setInterval(() => {
            pictureIndex++
            changeCarouselPicture()
        }, 3000)
    })
})

window.addEventListener('resize', () => {
    changePictureToDesktop(1200)
})