

console.log("Modulo Store v1.0");


class Tienda {

    constructor(nameStore, slogan, logotipo, bannerStore){
        this.nameStore = nameStore;
        this.slogan = slogan;
        this.logotipo = logotipo;
        this.bannerStore = bannerStore;
        this.catalogoProducto = [];
    }
    
    configurarTienda(){
        console.log(`creando tienda ${this.nameStore} espere unos segundos...`);

        document.querySelector("#logotipo").src = this.logotipo;
        document.querySelector("#slogan").innerHTML = this.slogan;
        document.querySelector("#bannerStore").src = this.bannerStore;
    }

    crearProducto(){
        console.log(`creando producto para la tienda ${this.nameStore} espere unos segundos...`);

        const nombre = document.querySelector("#input-nombre").value;
        const description = document.querySelector("#input-description").value;
        const imagen = document.querySelector("#input-imagen").value;
        const precio = document.querySelector("#input-precio").value;

        const product = {
            nombre: nombre,
            description: description,
            imagen: imagen,
            precio: precio
        }

        console.log("product creado", product);

        this.catalogoProducto.push(product);

        console.log(this.catalogoProducto);
    }

}









function crearTienda(){

    const nameStore = document.querySelector("#input-nameStore").value;
    const slogan = document.querySelector("#input-slogan").value;
    const logotipo = document.querySelector("#input-logotipo").value;
    const banner = document.querySelector("#input-banner").value;

    tienda.slogan = slogan;
    tienda.nameStore = nameStore;
    tienda.logotipo = logotipo;
    tienda.bannerStore = banner;

    tienda.configurarTienda();

}



const nameStore = document.querySelector("#input-nameStore").value;
const slogan = document.querySelector("#input-slogan").value;
const logotipo = document.querySelector("#input-logotipo").value;
const banner = document.querySelector("#input-banner").value;

const tienda = new Tienda(
    nameStore,
    slogan,
    logotipo,
    banner
)
console.log(tienda);


// localStorage
// cookies
// eventListemer
// Librerias o paquetes en JS
// sesiones de auth Login


// Funciones de una tienda virtual:
// - Crear tienda (completado)
// - Crear producto(completad)
// - Buscar productos
// - Agregar producto al carrito
// - Obtener detalle del producto