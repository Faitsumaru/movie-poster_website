function toggleVideo() {
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('.trailer video')

    video.pause()
    trailer.classList.toggle('active')
}