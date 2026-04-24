    let imagenesBanner= [`assets/banner/6.jpg`,`assets/banner/5.jpg`,`assets/banner/4.jpg`,`assets/banner/3.jpg`,`assets/banner/2.jpg`,`assets/banner/1.jpg`]
    let imagenAleatoria= Math.floor(Math.random() * imagenesBanner.length)
    let imagen0Banner= imagenesBanner[imagenAleatoria]

    document.querySelector(".imagenBanner").style.backgroundImage = `url("${imagen0Banner}")`;


    let imagenes= [`assets/viajes/1.jpg`,`assets/viajes/2.jpg`,`assets/viajes/3.jpg`,`assets/viajes/4.jpg`,`assets/viajes/5.jpg`,`assets/viajes/6.jpg`,]
