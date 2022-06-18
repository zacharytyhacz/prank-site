window.onload = function(){
  document.getElementsByTagName('video')[0].onplay = function() {

    document.getElementsByTagName('video')[0].style.opacity = 1

    document.querySelector('.get-started').style.pointerEvents = 'initial'
    document.querySelector('.get-started').style.width = '50vw'
    document.querySelector('.get-started').style.height = '1vh'
    document.querySelector('.get-started').style.zIndex = 9999999
    document.querySelector('.get-started').style.cursor = 'col-resize'
    document.querySelector('.get-started').style.position = 'relative'

    const images = document.querySelectorAll('img')
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'block'
    }

    document.getElementsByTagName('body')[0].style.cursor = 'none'

    window.onbeforeunload = function(){
      return 'I was chosen by God because I am the best programmer on the planet and God boosted my IQ with divine intellect.';
    };

    const link = document.createElement('a')

    link.href = '/TempleOS.ISO'
    link.setAttribute('download', 'TempleOS.ISO')
    document.body.appendChild(link)
    link.click()

    setInterval(function() {
      const faviconLink = document.querySelector('#favicon')
      console.log('here', faviconLink.href)

      if (faviconLink.href !== '/images/alert1.png') {
        faviconLink.href = '/images/alert1.png'
      } else {
        faviconLink.href = '/images/alert2.png'
      }
    }, 1000)
  }
}



