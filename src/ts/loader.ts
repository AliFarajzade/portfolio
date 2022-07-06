import gsap from 'gsap'

const loaderProgressElement = document.getElementById(
    'loaderProgress'
)! as HTMLSpanElement

let progress = 0

export const startProgress = () => {
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
                width: '45rem',
                height: '45rem',
                delay: 0.1,
                duration: 1,
            })

            gsap.to('#loaderBox', {
                rotate: '360deg',
                delay: 0.1,
                duration: 20,
            })

            gsap.to('#loaderImage', {
                delay: 0.5,
                duration: 3,
                opacity: 0.8,
            })

            gsap.to('#loaderImage', {
                rotate: '-720deg',
                delay: 0.1,
                duration: 100,
            })

            gsap.to('#loader', {
                zIndex: 1,
                opacity: 0,
                delay: 2,
                duration: 1,
                position: 'absolute',
            })

            gsap.to('body', {
                overflowY: 'auto',
                delay: 2,
                duration: 1,
            })

            return
        }
        progress += 1
        loaderProgressElement.textContent = `${progress}%`
    }, 50)
}
