import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import axios from "axios";



const Home = () => {

    const [products, setProducts] =  useState({});
    const inputRef =  useRef();
    const inputRefUpload =  useRef();

    // console.log("montando componente");
    // console.log(products);


    const dataHeader = {
        title: "Blog Dojo Coding",
        logo: "https://t4.ftcdn.net/jpg/04/92/55/15/360_F_492551542_UiAoH0DyhL1ZHH9T24masCQZBa95DyW1.jpg"
    }

    const dataBlog = {
        titular: "Product Designer",
        banner: "",
        description: "Lorem ipsum dolor sit amet."
    }

    const dataBlog2 = {
        titular: "Product Ux / UI",
        banner: "",
        description: "Lorem ipsum dolor sit ametit ametit ametit amet."
    }


    useEffect(() => {

        axios.get('https://dummyjson.com/products').then((response) => {
            console.log(response.data);
            setProducts(response.data);
        })

    }, []);


    const buscarProductos = () => {
        console.log("buscando buscarProductos");
        console.log(inputRef.current.value);
        console.log(inputRefUpload.current.files[0]);
    }


    return (
        <>
            <Header data={dataHeader} />

            {/* <Main props={dataBlog}  props2={dataBlog2}  /> */}


            <input ref={inputRef} id="product-search" type="text" placeholder="Buscar productos" />

            <input ref={inputRefUpload} id="product-search-image" type="file"   />

            <button className="btn btn-primary" onClick={buscarProductos}  >Buscar</button>

            <div className="d-flex flex-wrap gap-3">

                {products?.products?.map((item, index) => (
                   
                    <div key={index} class="card" style={{backgroundColor: "orange", width: "300px"}} >
                        <img class="card-img-top" src={item.images[0]} alt="Title" />
                        <div class="card-body">
                            <h4 class="card-title"> {item.title}</h4>
                            <p class="card-text">{item.description}</p>
                        </div>
                    </div>
                    
                    
                ))}

            </div>

            <Footer />
        </>
    )
}

export default Home;