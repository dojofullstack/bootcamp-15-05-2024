

console.log("Modulo Store v1.0");


class Tienda {

    constructor(nameStore, slogan, logotipo, bannerStore){
        this.nameStore = nameStore;
        this.slogan = slogan;
        this.logotipo = logotipo;
        this.bannerStore = bannerStore;
        this.catalogoProducto = [];
        this.usuario = {};
    }
    
    configurarTienda(){
        console.log(`creando tienda ${this.nameStore} espere unos segundos...`);

        document.querySelector("#logotipo").src = this.logotipo;
        document.querySelector("#slogan").innerHTML = this.slogan;
        document.querySelector("#bannerStore").src = this.bannerStore;

        const tiendaSave = {
            "logotipo": this.logotipo,
            "slogan": this.slogan,
            "bannerStore": this.bannerStore
        }

        // almacenar informacion en LS
        localStorage.setItem("tienda", JSON.stringify(tiendaSave));
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
        this.mostarProductos();
        this.guardarProductosLocalStorage();
    }


    mostarProductos(){

        const salidaProductos = this.catalogoProducto.map( (producto) => {
            const precio = parseFloat(producto.precio).toFixed(1);
            const titulo = producto.nombre.toUpperCase();
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

        const catalogoHTML = salidaProductos.join("");

        document.querySelector("#catalgo-product").innerHTML = catalogoHTML;

    }


    guardarProductosLocalStorage(){

        localStorage.setItem("productosTienda", JSON.stringify(this.catalogoProducto));

    }


    loginUser(){
        const username =  document.querySelector("#usuario").value;
        const password = document.querySelector("#password").value;
        console.log(username, password);
        const body = {
            username: username,
            password: password
        }

        axios.post('https://dummyjson.com/auth/login', body).then((data) => {

            console.log(data.data);
            this.usuario = data.data;
            const token = this.usuario.token;

            if (token){
                // crear la cookie del usuario
                document.cookie = `token=${token};path=/`;

                // redireccionar al home de la tienda
                window.location.href = "index.html";

            }

        }).catch( (error) => console.log("error detectado al iniciar sesion")  )
        // recopilar datos del formulario
        // relaizar peticion al api 'https://dummyjson.com/auth/login'
    }



    getProfileUser(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 

        axios.get("https://dummyjson.com/auth/me").then( (data) => {
            console.log(data.data);
            this.usuario = data.data;

            document.querySelector("#userFace").src = this.usuario.image;
            document.querySelector("#userName").innerHTML = this.usuario.firstName;

            document.querySelector("#btn-login").style.display = "none";

        }
        );

    }


    validarSesionUser(){

        document.cookie.split(";").forEach((cookie) => {
            const nombre = cookie.trim().split("=")[0];
            const valor = cookie.trim().split("=")[1];

            if (nombre === "token"){
                console.log(nombre, valor);

                const rutaUser = window.location.pathname;
                console.log(rutaUser);
                if (rutaUser.includes("login.html")){
                    window.location.href = "index.html";
                }


                this.getProfileUser(valor);
            }


        } )



    }

}



const nameStore = document.querySelector("#input-nameStore")?.value;
const slogan = document.querySelector("#input-slogan")?.value;
const logotipo = document.querySelector("#input-logotipo")?.value;
const banner = document.querySelector("#input-banner")?.value;

const tienda = new Tienda(
    nameStore,
    slogan,
    logotipo,
    banner
)

console.log(tienda);


function cargarTienda(){

    // Configurar la tienda desde LocalStorage
    const tiendaJson = localStorage.getItem("tienda");
    const tiendaObject = JSON.parse(tiendaJson);
    if (tiendaObject !== null){
        tienda.slogan = tiendaObject.slogan;
        tienda.logotipo = tiendaObject.logotipo;
        tienda.bannerStore = tiendaObject.bannerStore;
        tienda.configurarTienda();
        console.log("configuar automaticamente la tienda");
    } else {
        console.log("no hay informacion guardada de la tienda");
    }



    // Carga producto la tienda desde LocalStorage
    const productoJson = localStorage.getItem("productosTienda");
    const productObject = JSON.parse(productoJson);

    console.log(productObject);

    if (productObject !== null){
        tienda.catalogoProducto = productObject;

        tienda.mostarProductos();
        console.log("configuar los productos la tienda");
    } else {
        console.log("no hay informacion guardada de la tienda");
    }



}



function crearTienda(){

    const nameStore = document.querySelector("#input-nameStore")?.value;
    const slogan = document.querySelector("#input-slogan")?.value;
    const logotipo = document.querySelector("#input-logotipo")?.value;
    const banner = document.querySelector("#input-banner")?.value;

    tienda.slogan = slogan;
    tienda.nameStore = nameStore;
    tienda.logotipo = logotipo;
    tienda.bannerStore = banner;

    tienda.configurarTienda();

    

}



// cookies
// Librerias o paquetes en JS Fecht, Axios, uuid
// sesiones de auth Login
// control de errores try catch


// Funciones de una tienda virtual:
// - Crear tienda (completado)
// - Crear producto(completad)
// - Gurdar datos en LocalStorage (completado)
// sesiones de auth Login (completado)
// - Buscar productos  
// - Agregar producto al carrito
// - Elimar productos
// - Obtener detalle del producto


// javascript asinscronica (Promesas Async / await)




// condicion simple
// if (condicion){
//     //code
// } else {
//     //code
// }