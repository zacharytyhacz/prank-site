window.onload = function(){
  document.getElementsByTagName('video')[0].onplay = function() {

    document.getElementsByTagName('video')[0].style.opacity = 1
    document.querySelector('.get-started').style.display = 'none'
    document.getElementsByTagName('body')[0].style.cursor = 'text !important'

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

      if (faviconLink.href !== '/images/alert1.png') {
        faviconLink.href = '/images/alert1.png'
      } else {
        faviconLink.href = '/images/alert2.png'
      }
    }, 1000)
  }
}



