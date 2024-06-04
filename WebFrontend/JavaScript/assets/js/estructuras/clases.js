


// clases en javascript

console.log("clases en javascrpt");




class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = "1201012";
    }

    saludar(){
        // this.nombre = "mario";
        console.log(this.aceleracion);
        console.log(`Hola! ${this.nombre}`);
    }


    correr(kilometros){
        this.aceleracion = "5 m/s";
        console.log("realizar ejericicios", kilometros);
        console.log(this.nombre);
        return `Recorriendo ${kilometros} km`
    }

    actualizarDni(nuevoDi){
        console.log("actualizando documento");
        this.dni = nuevoDi;
    }

}



const mario = new Persona("Mario", 23);

console.log( mario.nombre );
console.log( mario.edad );

mario.actualizarDni("456789");

console.log(mario.dni)

mario.dni = "123456";

console.log(mario.dni)


// mario.saludar();
// const salidaCorrer = mario.correr(10);

// console.log(salidaCorrer);
// console.log(mario.nombre);

// console.log(mario.aceleracion);

console.log("***********************")

const maria = new Persona("Maria", 19);
console.log( maria.nombre );
console.log( maria.edad );

maria.saludar();
const salidaCorrer = maria.correr(16);