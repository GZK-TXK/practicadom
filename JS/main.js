////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let imagenesBanner= [`assets/banner/6.jpg`,`assets/banner/5.jpg`,`assets/banner/4.jpg`,`assets/banner/3.jpg`,`assets/banner/2.jpg`,`assets/banner/1.jpg`]
let imagenAleatoria= Math.floor(Math.random() * imagenesBanner.length)
let imagen0Banner= imagenesBanner[imagenAleatoria]

document.querySelector(".imagenBanner").style.backgroundImage = `url("${imagen0Banner}")`;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let imagenes= [
    {src: `assets/viajes/viajes-1.jpg`, desc: "Montaña"},
    {src: `assets/viajes/viajes-2.jpg`, desc: "Playa"},
    {src: `assets/viajes/viajes-3.jpg`, desc: "Ciudad"},
    {src: `assets/viajes/viajes-4.jpg`, desc: "Bosque"},
    {src: `assets/viajes/viajes-5.jpg`, desc: "Viaje"},
    {src: `assets/viajes/viajes-6.jpg`, desc: "Chill"}
]

const galeria = document.querySelector(".galeriaImagenes");

imagenes.forEach(viaje => {
    galeria.innerHTML += 
    `<div class="ficha">
        <img src="${viaje.src}" alt="${viaje.desc}">
        <div class="infoFicha">    
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam natus corrupti ex voluptates provident deleniti tempore culpa earum blanditiis, reiciendis odit, sint hic suscipit dolore alias id praesentium quas.</p>
        </div>
    </div>
    `   
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////