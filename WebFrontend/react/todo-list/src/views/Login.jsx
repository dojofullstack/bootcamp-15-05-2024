import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import axios from "axios";
import useStore from "../store";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {

    const updateUser = useStore((state) => state.updateUser);
    const isLogin = useStore((state) => state.isLogin);
    const user = useStore((state) => state.user);

    const [username, setUsername] =  useState("");
    const [password, setPassword] =  useState("");

    const [loadingLogin, setLoadingLogin] =  useState(false);


    console.log("user", user);
    console.log("isLogin", isLogin);


    const loginAuth = () => {
        setLoadingLogin(true);

        const data = {
            username: username,
            password: password
        }
        const apiAuth = 'https://dummyjson.com/auth/login';
        
        axios.post(apiAuth, data).then(res => {
            console.log(res.data);
            updateUser(res.data);
            setLoadingLogin(false);
        }).catch((error) => {

            setLoadingLogin(false);
        })
    }


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-4/12 p-5">

          <h3 className="text-center text-xl font-bold">Iniciar Sesion</h3>


        <label className="input input-bordered flex items-center gap-2 my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" value={username} className="grow" placeholder="Username" onChange={(e) => setUsername(e.target.value) } />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="grow" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <button onClick={loginAuth} className="btn btn-primary w-full mt-3 text-lg">
                {
                    loadingLogin ?
                     <span className="loading loading-spinner"></span>
                  : "Iniciar"
                }
        </button>
      </div>
    </div>
  );
};

const Login = () => {

    const navigate = useNavigate();

    const isLogin = useStore((state) => state.isLogin);

    useEffect(() => {

        if (isLogin){
            navigate("/");
        }

    });


  return (
    <>
      <Header />

      <LoginForm />

      <Footer />
    </>
  );
};

export default Login;
