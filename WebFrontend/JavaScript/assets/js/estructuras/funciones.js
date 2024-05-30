
// funciones en JS
console.log("modulo funciones.js");



function maquinaNaranjas(cantidad, agregar_azucar, tu_nombre = "usuario", mezclar_frutas ){

    // console.log(cantidad);
    // console.log(agregar_azucar);

    if (cantidad === "" || agregar_azucar === "" ){
        return {
            estadoJugo: false,
            mensaje: "la maquina no puede iniciar"
        }
    }

    if (cantidad === ""){
        return {
            estadoJugo: false,
            mensaje: "no hay naranjas"
        }
    }

    console.log("ejecutando maquina de naranjas para", tu_nombre);
    console.log(`preparando jugo con ${cantidad} naranjas`);

    let totalFrutas = "";
    for (const iterator of mezclar_frutas) {
        console.log("agregando fruta",iterator );
        totalFrutas = totalFrutas.concat(`${iterator} ,`);
    }
    

    if (agregar_azucar === "si"){
        console.log("agregando 3 cuchaitas de azucar");
        // return "el jugo esta listo con azucar!!"
        return {
            estadoJugo: true,
            mensaje: `el jugo esta listo con azucar ${tu_nombre}!!`,
            totalFrutas: totalFrutas
        }
    }

    // return "el jugo esta listo sin azucar!!"
    return {
        estadoJugo: true,
        mensaje: `el jugo esta listo sin azucar! ${tu_nombre}!`,
        totalFrutas: totalFrutas
    }
}





// const nombre = window.prompt("Cual es tu nombre??");

// const cantidad = window.prompt("cauntas naranjas agregamos??");

// const agregarAzucar = window.prompt("Agregamos azuar??");


const mezclar_frutas = [
    "fresas",
    "toronjas",
    "pinas"
]


// const salidaMaquinaNaranjas = maquinaNaranjas(cantidad, agregarAzucar, nombre, mezclar_frutas);
// console.log("salidaMaquinaNaranjas", salidaMaquinaNaranjas);





// segunda forma para definir funciones

const saludarDojo = function () {
        console.log("saluda dojo!!!");
        return "saludo henry!"
}

// const salidaSaludar = saludarDojo();
// console.log(salidaSaludar);



// terera forma para definir funciones

const analizarVideo = () => {
    console.log("ejeuctar procesos de AI");
    return true
}


// const salidaAnaliisis =  analizarVideo();

// console.log(salidaAnaliisis);



// callback
// es una funcion que pasas como paramentro

function frenarAuto(){
    console.log("frenar auto!!!");
}


function acelearAuto(modelo, velocidad, frenar){

    console.log("el modelo del auto es", modelo);

    if (velocidad >= 100){
        frenar();
        return
    }

    console.log("auto acelera");

}


// acelearAuto("teslaX", 121 ,  function () { console.log("frenando auto")}   );}


// acelearAuto("toyota2024", 140 ,  () => { console.log("frenar auto!!!")} )

// acelearAuto("toyota2024", 20 , frenarAuto  );