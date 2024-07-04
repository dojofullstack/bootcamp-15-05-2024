import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import { Login } from "./views/Login"
import App from "./views/App"
import { Blog } from "./views/Blog"





const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}  />
                <Route path="/login" element={<Login/>}  />
                <Route path="/app" element={<App/>}  />
                <Route path="/blog" element={<Blog/>}  />
                <Route path="/blog/:slug" element={<Blog/>}  />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas;