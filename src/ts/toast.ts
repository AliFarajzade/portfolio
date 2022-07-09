const toastElement = document.getElementById('toast')! as HTMLDivElement
const alertElement = document.getElementById('alert')! as HTMLAudioElement
const projectsElement = document.getElementById('projects')! as HTMLDivElement
const toastCloseElement = document.getElementById(
    'toastClose'
)! as HTMLButtonElement

let hasShown = false

const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
        console.log(entries)
        const { isIntersecting } = entries[0]

        if (isIntersecting && !hasShown) {
            console.log('Fire')
            hasShown = true
            toastElement.classList.add('toast--animate')
            alertElement.volume = 0.5
            alertElement.play()
        }
    },
    {
        threshold: 0.1,
    }
)

toastCloseElement.addEventListener('click', () => {
    toastElement.style.display = 'none'
})

observer.observe(projectsElement)
