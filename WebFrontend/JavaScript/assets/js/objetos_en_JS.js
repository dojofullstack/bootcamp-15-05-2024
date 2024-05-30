

console.log("objetos en JS");

// objetos del tipo Array o arreglos
// Un array es una lista de elementos, puede incluir elementos del cualquir tipo

const series = ["batman", "bigbang", "bob", "superman"];

// console.log(series);

// console.log(series[3])
// inserta un elemento al final de la cola o array
// series.push("Hulk");

// console.log(series);

// elimina el ultimo del elemento del array
// series.pop();

// console.log(series);


// elimina un elemento segun su posicion
// series.splice(0, 1);

// console.log(series);

series[2] = "BobEsponja";


// console.log(series.includes("superman"));

// console.log(series.indexOf("superman"));


series.unshift("Superflash");


// console.log(series);

// elimina el primer del elemento del array
series.shift();



// console.log(series);

// length retorna la cantida de elementos
// console.log(series.length);

// console.log(typeof series);






// Objetos en JS
// Un objeto tiene caracteristicas y comportamientos (defines funciones como key)
// esta compuesto por key y values

function saludar(){
    console.log("hola! DojoFS!");
}

function acelerar(){
    console.log("acelear auto");
}

const emailVerif = "henry@gmail.com";
const autoKilomentraje = 1000;

const auto = {
    "color" :  "verde",
    "precio": 98,
    "marca": "tesla",
    "isStock": true,
    "usuarios": ["pedro", "henry", "jose"],
    "emailAdmin": null,
    "saludar": saludar,
    "acelerar": acelerar,
    modelo: "tesla2024",
    emailVerif,
    autoKilomentraje
}

const autoViejo = {};
// console.log(autoViejo);

console.log(auto);

console.log( auto.color );

console.log( auto.precio );

console.log( auto.marca );

console.log( auto.emailAdmin );


auto.saludar();
auto.acelerar();

// para actualizar o crear las propiedades
auto.color = "rojo";
auto.precio = 123;
console.log(auto);

// creando key aceleracion
auto.acelracion = "100k/h";
auto.limiteVelocidad = 200;

const keyApi = "emailAdmin";
auto[keyApi] = "pedro12@gmail.com";


// para eliminar keys o propiedades
delete auto.precio;
delete auto.color;
delete auto["emailAdmin"];


// console.log(  Object.keys(auto) );
// console.log(  Object.values(auto) );
// console.log(  Object.entries(auto) );


auto.imageMural = "https://img.asmedia.epimg.net/resizer/v2/ZEES4TLNKBMJDOWY5OHA6VLPIY.jpg?auth=113286942c964b6ef4d4c77aad9cbc105085c783314456fa8493a50a16993cbe&width=1472&height=828&smart=true";

auto.imageMural2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfDYESDpEBQDfCNATl8NCGBzP5XFtgO-_F_4ShrodLQ&s";


console.log(auto);


const tagImageMural = document.querySelector("#image-mural");

tagImageMural.src = auto.imageMural;
tagImageMural.style.height = "300px";
tagImageMural.style.borderRadius = "30px";
tagImageMural.style.border = "5px solid purple";
tagImageMural.style.margin = "10px";
// tagImageMural.style.display = "none";




function cambiarImagenfromInput(){
    const imagen = document.querySelector("#change-image").value;
    tagImageMural.src = imagen;
}


function cambiarImagen(){
    tagImageMural.src = auto.imageMural2;
}

function ocultarAuto(){
    tagImageMural.style.display = "none";
}