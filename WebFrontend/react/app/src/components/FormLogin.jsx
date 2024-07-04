import { useEffect, useState } from "react";
import axios from "axios";


export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [perfil, setPerfil] = useState({});



    useEffect(() => {
      console.log("ejecutando intrucciones");
      console.log(perfil);

      if (perfil.token){
        alert("Sesion INiciada con exito!");
        window.location.href = "/tienda";
      }

    } , [perfil]);


    useEffect(() => {
        // console.log(password);
        if (password.length >= 6){
          console.log("maximo 6 caracternes");
        }
    }, [password])

  


    const loginAuth = () => {

        const data = {
            username: email,
            password: password
        }

        console.log(data);

        axios.post("https://dummyjson.com/auth/login", data).then((data) => {
            console.log(data.data);
            setPerfil(data.data);
        })

    }

  return (
    <>
      <div class="mb-3">
        <label for="" class="form-label">
          Email
        </label>
        <input
          type="email"
          class="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />
        <small id="emailHelpId" class="form-text text-muted">
          Help text
        </small>
      </div>


      <div class="mb-3">
        <label for="" class="form-label">
          Contrasena
        </label>
        <input
          type="password"
          class="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder="****"
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />
        <small id="emailHelpId" class="form-text text-muted">
          Help text
        </small>
      </div>


      <button className="btn btn-success" onClick={loginAuth} >
        Iniciar Sesion
      </button>


        <hr />


         Token de la sesion: {perfil.token}


    </>
  );
};
