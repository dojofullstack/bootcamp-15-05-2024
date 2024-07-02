import { useState } from "react";


const Main = ({props, props2}) => {

    const [titular, setTitular ] =  useState("");
    const [contador, setContador ] =  useState(0);

    console.log(titular);
    console.log(contador);
    
    // setTitular("algun titular");

    return (
        <>
            <div className="card">
                <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{props.titular}</h4>
                    <p className="card-text">{props.description}</p>
                    <button className="dojo-btn ">Detalles</button>
                </div>
            </div>


            <div className="card">
                <img className="card-img-top" src="holder.js/100x180/" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{props2.titular}</h4>
                    <p className="card-text">{props2.description}</p>
                    <button className="dojo-btn ">Detalles</button>
                </div>
            </div>


            <div className="mb-3">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    value={titular}
                    onChange={(e) =>  setTitular(e.target.value) }
                />
                <small id="helpId" className="form-text text-muted">Help text</small>
            </div>


            <button onClick={() => setTitular("alguna informacion despues del cli1c!!")  }>
                Actualizar Titular
            </button>



            <span className="fw-bold fs-3">
               Estado: {titular}
            </span>


            <hr />


            <button className="btn btn-primary" onClick={() => setContador(contador + 1) }>
                Generar conteo
            </button>

            <span className="fw-bold fs-3 text-primary">
               Estado: {contador}
            </span>
            
            
        </>
    )
}

export default Main;