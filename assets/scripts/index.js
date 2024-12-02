function selectCarouselItem(selectedItem) {
    const selectedId = selectedItem.id
    const carousel = document.querySelector('.s-cards-carousel')
    const transform = carousel.style.transform
    const [_, rotateY] = transform.split(' ')
    const rotateYDeg = -120 * (Number(selectedId) - 1)
    const newTransform = transform.replace(rotateY, `rotateY(${rotateYDeg}deg)`)
    

    carousel.style.transform = newTransform

    const activeButtonElement = document.querySelector('.s-controller__button-active')
    activeButtonElement.classList.remove('s-controller__button-active')
    selectedItem.classList.add('s-controller__button-active')
}