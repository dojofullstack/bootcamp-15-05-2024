


try {

    // console.log("valor salida", documentoID);
    // console.log( (moment().startOf('hour').fromNow()) );
    console.log(new Date());

} catch (error){

    console.log("Error detectado");
    console.log(new Date());
    console.log(error);

} finally {
    console.log("final de la estructua try catch");
    localStorage.removeItem("keyData");
}





// condicion ternaria
const adminPermiso = true;

const mensajeUsuario = adminPermiso ? "si tiene acceso al sistema": "No tiene acceso";

console.log(mensajeUsuario);