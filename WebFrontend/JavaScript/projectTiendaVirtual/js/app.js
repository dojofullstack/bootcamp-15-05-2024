

console.log("Modulo Store v1.0");


class Tienda {

    constructor(nameStore, slogan, logotipo, bannerStore){
        this.nameStore = nameStore;
        this.slogan = slogan;
        this.logotipo = logotipo;
        this.bannerStore = bannerStore;
        this.catalogoProducto = [];
        this.usuario = {};
        this.productCart = [];
    }


    removeProduct(idProduct){
        // console.log("eliminando producto", idProduct);

        const arrayProduct =  this.catalogoProducto.filter((item) => {
            const isProduct = item.id !== idProduct;
            return isProduct;
        }  )

        // console.log(idProduct, arrayProduct);

        this.catalogoProducto = arrayProduct;

        this.mostarProductos();
        this.guardarProductosLocalStorage();

    }

    getProduct(idProduct){

        const arrayProduct =  this.catalogoProducto.filter((item) => {
            const isProduct = item.id === idProduct;
            return isProduct;
        }  )

        // console.log(idProduct, arrayProduct);
        return arrayProduct

    }


    mostrarCart(){
        const listCart =  document.querySelector("#list-cart");
        const subTotalDiv =  document.querySelector("#sub-total");

        let subTotal = 0;
        const salidaProductos = this.productCart.map((product) => {
            const productId = product.productoId;
            const quantity = product.quantity;

            const productoInfo =  this.getProduct(productId)[0];
            subTotal += parseFloat(productoInfo.precio);

            return (
               `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${productoInfo.imagen}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${productoInfo.nombre}</h5>
        <p class="card-text">
        $ ${productoInfo.precio} x ${quantity}
        </p>
      </div>
    </div>
  </div>
</div>`
            )
        })

        // console.log(salidaProductos);
        listCart.innerHTML = salidaProductos.join("");

        subTotalDiv.innerHTML =  `<b> SubTotal:  $ ${subTotal} </b> `;

    }

    agregarCarrito(productoId, quantity=1){
        console.log("agregando el producto al carrito", productoId);
        
        this.productCart.push({
            productoId: productoId,
            quantity: quantity
        });

        // console.log(this.productCart);

        document.querySelector("#total-cart").innerHTML = `Total: ${this.productCart.length}`;
        localStorage.setItem("productCart",  JSON.stringify(this.productCart) );

        this.mostrarCart();
       
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
            id: uuid.v4(),
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

        document.querySelector("#close-modal-product").click();
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
            
            <div class="d-flex justify-content-around">
               <button class="btn" onclick="tienda.removeProduct('${producto.id}')">
                    <i class="bi bi-trash-fill text-danger fs-1"></i>
                </button>

                <button class="btn" onclick="tienda.agregarCarrito('${producto.id}')">
                    <i class="bi bi-cart-plus fs-1"></i>
                </button>
            </div>
            
          </div>
        </div>
            `
            return cardHtml
        
        })
        

        // console.log(salidaProductos);
        const catalogoHTML = salidaProductos.join("");
        document.querySelector("#catalgo-product").innerHTML = catalogoHTML;
    }


    mostarProductosBuscador(productos_busqueda){
        const salidaProductos = productos_busqueda.map( (producto) => {
            console.log(producto);
            const precio = parseFloat(producto.price).toFixed(1);
            const titulo = producto.title.toUpperCase();
            const imagen = producto.images[0];
        
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



    buscarProductos(nombre){
        axios.get(`https://dummyjson.com/products/search?q=${nombre}`).then((data) => {
            this.mostarProductosBuscador(data.data.products);
        }).catch((error) => {
            console.log("hubo un error!");
        })
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

            // makeStore.style.display = "block";
            // createProduct.style.display = "block";

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


            const makeStore = document.querySelector("#make-store");
            const createProduct = document.querySelector("#create-product");
            makeStore.style.display = "block";
            createProduct.style.display = "block";
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


    closeLogin(){
        const fechaNow = new Date();
        document.cookie =  `token=; path=/; expires=${fechaNow.toUTCString()}`;
        window.location.href = "login.html";
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



    // Carga producto del carrito
    const productCart = localStorage.getItem("productCart");
    const productCartObject = JSON.parse(productCart);

    console.log(productCartObject);
    if (productCartObject !== null){
        tienda.productCart = productCartObject;
        document.querySelector("#total-cart").innerHTML = `${tienda.productCart.length}`;

        tienda.mostrarCart();
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
// Cerrar sesion de auth Login (completado)
// - Buscar productos   (completado)
// - Agregar producto al carrito  (completado)
// - Elimar productos  (completado)
// - Obtener detalle del producto



// javascript asinscronica (Promesas Async / await)




// condicion simple
// if (condicion){
//     //code
// } else {
//     //code
// }





function home(){


    cargarTienda();

    tienda.validarSesionUser();


    const optionCloseLogin = document.querySelector("#close-login");
    optionCloseLogin.addEventListener("click", () => {
        tienda.closeLogin();
    }  )


    const makeStore = document.querySelector("#make-store");
    const createProduct = document.querySelector("#create-product");
    makeStore.style.display = "none";
    createProduct.style.display = "none";


    const inputSearch = document.querySelector("#input-search");
    const btnBuscar = document.querySelector("#btn_buscar");

    inputSearch.addEventListener("keydown", (e) => {
        if (e.code === "Enter"){
            console.log("buscar producoto...", inputSearch.value);
            tienda.buscarProductos(inputSearch.value);
        }
    }  )

    btnBuscar.addEventListener("click", () => {
        console.log("buscar producoto...", inputSearch.value);
        tienda.buscarProductos(inputSearch.value);
    }  )


}






function simpleHello(){
    console.log("hola inicial");
}


function simpleHello123(){
    console.log("hola final");
}


function HelloAsync(){
    console.log("hola async");
}



simpleHello();
simpleHello123();

console.log("final del modulo app.js");



// asincronia
// programacion concurrente