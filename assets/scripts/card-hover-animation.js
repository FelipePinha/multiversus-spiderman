function handleMouseEnter() {
    this.classList.add('s-card__hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave() {
    this.classList.remove('s-card__hovered')
    document.body.id = ``
}

function addEventListenersToCarts() {
    const cardElements = document.querySelectorAll('.s-card')

    cardElements.forEach(card => {
        card.addEventListener('mouseenter', handleMouseEnter)
        card.addEventListener('mouseleave', handleMouseLeave)
    });
}

document.addEventListener('DOMContentLoaded', addEventListenersToCarts, false)