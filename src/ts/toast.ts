const toastElement = document.getElementById('toast')! as HTMLDivElement
const alertElement = document.getElementById('alert')! as HTMLAudioElement
export const projectsElement = document.getElementById(
    'projects'
)! as HTMLDivElement
const toastCloseElement = document.getElementById(
    'toastClose'
)! as HTMLButtonElement

let hasShown = false

export const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasShown) {
                hasShown = true
                toastElement.classList.add('toast--animate')
                alertElement.volume = 0.5
                alertElement.play()
            }
        })
    },
    { threshold: 0.1 }
)

toastCloseElement.addEventListener('click', () => {
    toastElement.style.display = 'none'
    observer.unobserve(projectsElement)
})
