function toggleVideo() {
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('.trailer video')

    video.pause()
    trailer.classList.toggle('active')
}


function changeBg(bg, title) {
    const banner = document.querySelector('.main__banner')
    const contents = document.querySelectorAll('.main__content')

    banner.style.background = `url("images/movies/${bg}")`
    banner.style.backgroundSize = 'cover'
    banner.style.backgroundPosition = 'center'

    contents.forEach(cnt => {
        cnt.classList.remove('active')

        if (cnt.classList.contains(title))
            cnt.classList.add('active')
    })
}