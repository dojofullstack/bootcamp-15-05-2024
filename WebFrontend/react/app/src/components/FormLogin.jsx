import { useState } from "react";
import axios from "axios";


export const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [perfil, setPerfil] = useState({});




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
