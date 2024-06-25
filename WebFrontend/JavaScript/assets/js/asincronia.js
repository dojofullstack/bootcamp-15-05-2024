


// JavaScript asincronico


function deteccionFacial(){
    

    const promesa = new Promise( (resolved, rejected)  => {


        console.log("analziando tu rostro, espera unos 5s");
        console.log("ejecutando algun modulo face.js");

        const isVerificated = false;

        if (isVerificated){
            //notificamos que ha completado correctamente
            resolved("el usuario completo tu validacion facil con exito");
        } else {
               //notificam algun errores
            rejected("no cumple la validacion");
        }


    }  );

    return promesa;

}



// Forma then y catch para recibir las notificacion

// deteccionFacial().then((mensaje) => {
//     console.log("se completo correctament!", mensaje);
// }).catch((mensaje) => {
//     console.log("fallo el proceso detteccionfail", mensaje);
// })


// const salida = deteccionFacial();
// console.log(salida);



// Forma async / await para recibir las notificacion


async function consumirProceso(){

    try {  
        const respuesta =  await deteccionFacial();
        console.log("respuesta", respuesta);

    } catch(error) {

        console.log(error);
    }

}


// consumirProceso();


// deteccionFacial();
// deteccionFacial();
// deteccionFacial();
// deteccionFacial();
// deteccionFacial();
// deteccionFacial();
// deteccionFacial();


// function saludar(nombre){
//     console.log("hola NinjA", nombre);
// }




// setTimeout(() => {
//     console.log("saludar pedro");
// }, 3000);

// setTimeout(() => {
//     console.log("saludar jose");
// }, 3000);

// setTimeout(() => {
//     console.log("saludar henry");
// }, 3000);

// setTimeout(() => {
//     console.log("saludar maria");
// }, 3000);

// setTimeout(() => {
//     console.log("saludar susan");
// }, 3000);


// setTimeout(() => {
//     console.log("saludar mario");
// }, 3000);



setInterval(() => {
    
    console.log("notificar cada 3s");

}, 1000);




// const funcionDojo = async () => {
 
//     try {
//         console.log("hola");
//         const salida = await promesa();
//     } catch(err){
//         console.log(err);
//     }
// }

// funcionDojo();