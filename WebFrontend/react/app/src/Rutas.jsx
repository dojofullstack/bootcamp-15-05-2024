import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { Login } from "./views/Login";
import App from "./views/App";
import { Blog } from "./views/Blog";
import AppContext, { storeBlog } from "./context";
import { useState } from "react";


const Rutas = () => {

    const  [blog, setBlog] = useState(storeBlog);

    const updateArticles = (articulos) => {

        setBlog({
            ...blog,
            articles: articulos,
        })

        // Forma correcta optimizado!
        // setBlog(
        //     blog => (
        //         {
        //             ...blog,
        //             articles: ["item1", "item2", "item3", "item-nuevos!!!"],
        //         }
        //     )
        // )


    }


    const updatePerfil = (perfil) => {

        setBlog({
            ...blog,
            perfil: perfil
        })

    }






  return (
    <AppContext.Provider value={{
        blog: blog,
        updateArticles: updateArticles,
        updatePerfil: updatePerfil
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<App />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Rutas;
