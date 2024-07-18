import { BrowserRouter, Routes, Route } from "react-router-dom"
// import App from "./App"
import Home from "./views/Home";



const Rutas = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home/>} />

            </Routes>

        </BrowserRouter>
    )
}


export default Rutas;