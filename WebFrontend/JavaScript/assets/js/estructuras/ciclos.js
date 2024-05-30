


// ciclos en JS
//tenemos el ciclo for y while
// breakpoint o punto de interrupcion. 


// ciclo for

let codingStack = ["python", "javascript", "golang", "scala"];


// for (let index = 0; index < codingStack.length; index++) {
//     const element = codingStack[index];
//     console.log(element.concat("@gmail.com"));
// }


// for (const iterator of codingStack) {
//     console.log(iterator.toUpperCase());
//     // let posicion =  codingStack.indexOf(iterator);
//     // console.log(posicion);
// }


let usuarios = [
    "pepe", "joses", "henry", "carlos"
];

let perfil = {
    roles: ["editor", "admin", "marketing"],
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VPPcT5nNYnyrASZGkCwcrnsmPXPrK37xt-9VIeiegA&s"
}


const listaUsuarios = document.querySelector("#lista-usuarios");

let etiquetasUser = "";

// for (let index = 0; index < usuarios.length; index++) {
//     const element = usuarios[index];
//     console.log(element);
//     etiquetasUser  = etiquetasUser.concat(`<li> ${element}  🤗</li>`);
// }


for (const iterator of usuarios) {
    etiquetasUser  = etiquetasUser.concat(`<li> ${iterator}  🤗</li>`);
}



// for (let index = 0; index < perfil.roles.length; index++) {
//     const rol = perfil.roles[index];
//     console.log(rol);

//     const imagen = perfil.imagen;
    
//     etiquetasUser  = etiquetasUser.concat(`<li> ${rol}  <img  heigth="200px" src="${imagen}"/>    </li>`);

// }


// for (const rol of perfil.roles) {
//     const imagen = perfil.imagen;
//     etiquetasUser  = etiquetasUser.concat(`<li> ${rol}  <img  heigth="200px" src="${imagen}"/>    </li>`);
// }


// listaUsuarios.innerHTML = etiquetasUser;




const elementos = ["rosa", "jaime", "maria"];

// practicando los breakpoint

// for (let index = 0; index < elementos.length; index++) {
    
//     const element = elementos[index];

//     console.log(element);

//     if (element === "jaime"){
//         // finalizamos el ciclo
//         break
//     }
// }


// for (let index = 0; index < elementos.length; index++) {
    
//         const element = elementos[index];
    
    
//         if (element === "jaime"){
//             // continuamos al siguente elemento del array
//             continue
//         }
    
//         console.log(element);
//         console.log(element.toUpperCase());
//     }
    


// for (const elemento of elementos) {

//         if (elemento === "jaime"){
//             // continuamos al siguente elemento del array
//             continue
//         }

//         console.log(elemento.toUpperCase());

// }



const analizarPrecioWebsite = {
    "estado": true
};

while (analizarPrecioWebsite.estado){

    console.log("analziando website");
    const respuesta = window.prompt("quieres continuar analizando??");
    console.log(respuesta);

    // if (respuesta === "no"){
    //     console.log("finlizando cliclo while");
    //     break
    // }

    if (respuesta === "no"){
        console.log("finlizando cliclo while");
        analizarPrecioWebsite.estado = false;
    }

}




console.log("final del modulo!!");