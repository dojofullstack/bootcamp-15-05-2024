


// forEach() y el map()

const productos = [
    {
        title: "iphone",
        precio: 123.45,
        imagen: "https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png"
    },
    {
        title: "samsung",
        precio: 33.88,
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/pe/2401/gallery/pe-galaxy-s24-s928-sm-s928bztvltp-thumb-539329475"
    },
    {
        title: "iphone",
        precio: 123.32,
        imagen: "https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png"
    },
    {
        title: "samsung",
        precio: 33.212,
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/pe/2401/gallery/pe-galaxy-s24-s928-sm-s928bztvltp-thumb-539329475"
    },
    {
        title: "iphone",
        precio: 123.98,
        imagen: "https://www.apple.com/la/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png"
    }
]


const catalogo = document.querySelector("#catalogo");


let cardsProducts = "";


// const salidaProductos = productos.forEach( (producto)  => {
//     const precio = producto.precio.toFixed(1);
//     const titulo = producto.title.toUpperCase();
//     const imagen = producto.imagen;

//     // console.log(imagen);

//     const cardHtml = `
//     <div class="card" style="width: 18rem;">
//   <img src="${imagen}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title"> ${titulo} </h5>
//     <p class="card-text fs-3"> ${precio} </p>
//     <a href="#" class="btn btn-primary">Ver detalles</a>
//   </div>
// </div>
//     `

//     cardsProducts += cardHtml;
//     // cardsProducts = cardsProducts.concat(cardHtml);

// } );




const salidaProductos = productos.map( (producto) => {

    const precio = producto.precio.toFixed(1);
    const titulo = producto.title.toUpperCase();
    const imagen = producto.imagen;

    // console.log(imagen);

    const cardHtml = `
    <div class="card" style="width: 18rem;">
  <img src="${imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${titulo} </h5>
    <p class="card-text fs-3"> ${precio} </p>
    <a href="#" class="btn btn-primary">Ver detalles</a>
  </div>
</div>
    `

    return cardHtml

})




// console.log(salidaProductos);

// console.log( salidaProductos.join("") );

catalogo.innerHTML = salidaProductos.join(" ");
