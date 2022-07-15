import gsap from 'gsap'
import { observer, projectsElement } from './toast'

const loaderProgressElement = document.getElementById(
    'loaderProgress'
)! as HTMLSpanElement

const loaderProgressBarElement = document.getElementById(
    'loaderProgressBar'
)! as HTMLDivElement

const loaderElement = document.getElementById('loader')! as HTMLDivElement

let progress = 0

const startProgress = () => {
    const interval = setInterval(() => {
        if (progress === 100) {
            loaderProgressElement.style.color = '#00ff37'
            clearInterval(interval)

            gsap.to('#loaderProgressContainer', {
                rotate: '90deg',
                delay: 0.1,
                left: '1000%',
                duration: 5,
            })

            gsap.to('#loaderHeading', {
                opacity: 0,
                delay: 0.1,
                duration: 0.5,
            })

            gsap.to('#loaderBox', {
                borderRadius: '50%',
                width: window.innerWidth < 400 ? '40rem' : '45rem',
                height: window.innerWidth < 400 ? '40rem' : '45rem',
                delay: 0.1,
                duration: 1,
            })

            gsap.to('#loaderBox', {
                rotate: '36deg',
                delay: 0.1,
                duration: 2,
            })

            gsap.to('#loaderImage', {
                delay: 0.5,
                duration: 3,
                opacity: 0.8,
            })

            gsap.to('#loaderImage', {
                rotate: '-1800deg',
                delay: 0.1,
                duration: 250,
            })

            gsap.to('#loader', {
                zIndex: 1,
                opacity: 0,
                delay: 2,
                duration: 1,
                position: 'absolute',
                display: 'none',
            })

            gsap.to('body', {
                overflowY: 'auto',
                delay: 2,
                duration: 1,
            })

            setTimeout(() => {
                loaderElement.remove()
                if (window.innerWidth > 600) observer.observe(projectsElement)
            }, 2500)

            return
        }
        progress += 1
        loaderProgressElement.textContent = `${progress}%`
        loaderProgressBarElement.style.width = `${progress}%`
    }, 50)
}

startProgress()
