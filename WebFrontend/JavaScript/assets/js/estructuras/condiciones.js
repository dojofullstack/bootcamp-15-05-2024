


console.log("condiciones en JS");


let series = ["batam", "hulk", "superman", "superflash", "botsponhja"];
let email = "henry@gmail.com";
let precio = 40;
let isUsarioVip = false;
let nombre = "pedro gonzales";



// if (isUsarioVip){
//     console.log("El usuario es Vip, tiene acceso!!");
// } else {
//     console.log("El usuario no tiene acceso!");
// }


if (nombre.includes("pedro")){
    console.log("si incluye pedro!!");
}

if (series.length === 4){
    console.log("hay 4 series populares");
} else {
    console.log("no hay mas series");
}


if (precio <= 20){
    console.log("el precio tiene descuento");
} else {
    console.log("el precio continua alto");
}

if (email === "henry@gmail.com"){
    console.log("henry tiene acceso!!");
} else {
    console.log("El usuario no tiene acceso!");
}



let direccion = "";
let edad = 33;


let coloresPreferidos  = ["naranja"];
const auto = {
    color: "verde"
}

if (direccion){
    console.log("si hay direccion");
} else {
    console.log("ingresa tu direcicon");
}

if (edad){
    console.log("si hay edad");
} else {
    console.log("Ingresa tu edad");
}

if (coloresPreferidos){
    console.log("colores muy intessos!");
} else {
    console.log("ingresa tus colores");
}

if (auto){
    console.log("auto genial");
} else {
    console.log("ingresa tu auto");
}


if (auto.color === "rojo"){
    console.log("auto verde es genial");
} else {
    console.log("ingresa tu color de auto");
}


// condiciones multuiples o anidadas

auto.color = "morado";

if (auto.color === "rojo"){
    console.log("auto rojo es genial");
} else if  (auto.color === "verde") {
    console.log("auto verde es genial");
}  else if  (auto.color === "rosa") {
    console.log("auto rosa es genial");
} else {
    console.log("auto color no detectado");
}