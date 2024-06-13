


// console.log("storage en JS");

// // Tipos de almacenamiento (LocalStorage y Cookies)


// console.log(localStorage)

localStorage.setItem("nickname", "dojoFS");

localStorage.setItem("puntaje", 120);


const preferencias = {
    "id": 1,
    "username": "Miguel",
    "productosFavoritos": ["ipad", "playStation"]
}

const todoList = {
    "appToday": "tareas lunes",
    "tareas": [
        "aprender websocket",
        "aprender microservicios"
    ],
    "status": {
        "completados": 1,
        "autor": "mario"
    }
}


// Para Guardar infomracion en LS
// console.log( JSON.parse('{"id": 1, "nombre": "pedro", "isVip": true}') );

// const preferenciasPlainText = JSON.stringify(preferencias);

// localStorage.setItem("preferencias", '{"id": 1, "nombre": "pedro", "isVip": true}');

// localStorage.setItem("preferencias", preferenciasPlainText);

// localStorage.setItem("todoList", JSON.stringify(todoList) );





// Para obtener datos de LS
// JSON.parse()

// const todoListJson = localStorage.getItem("todoList");

// const todoListObject = JSON.parse(todoListJson);

// console.log(todoListObject.tareas);
// console.log(todoListObject.appToday);


// localStorage.removeItem("nickname");
// // localStorage.removeItem("puntaje");



// cookies
console.log("trabajando con las cookies");



document.cookie = "dojoCookie=01920912";

document.cookie = "usuarioID=28167328-e3b0-49eb-99a2-07e7367cfc0f";





const fecha = new Date();

console.log(fecha);

console.log(fecha.getTime());

const fechaExpiracion = fecha.getTime() + (1000*60*2);

console.log(fechaExpiracion);

const fechaNew = new Date();

fechaNew.setTime(fechaExpiracion);

console.log(fechaNew);



// document.cookie = `sesionPagoTienda2m=01929128190280918; expires=${fechaNew.toUTCString()}`

// document.cookie = "userIDInvitado=user0123; path=/";


// document.cookie.split(";").forEach((cookie) => {
//     const nombre = cookie.trim().split("=")[0];
//     const valor = cookie.trim().split("=")[1];
//     console.log(nombre, valor);
// } )
