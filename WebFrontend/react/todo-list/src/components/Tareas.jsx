import { FaHatCowboySide, FaHome, FaTasks } from "react-icons/fa";
import useStore from "../store";
import { useEffect, useState } from "react";

export const Tareas = () => {
  const listaActiva = useStore((state) => state.listaActiva);
  const listas = useStore((state) => state.listas);
  const updateTask = useStore((state) => state.updateTask);

  const [listaActual, setListaActual] = useState();
  const [tareaActual, setTareaActual] = useState("");

  console.log("listaActiva", listaActiva);
  console.log("listas", listas);
  console.log("listaActual", listaActual);
  console.log("tareaActual", tareaActual);

  const configureTask = () => {

    console.log(listaActual);

    updateTask({
      nameList: listaActiva,
      task: [...listaActual.task, tareaActual],
    });
  };

  useEffect(() => {
    const mylist = listas.filter((item) => item.nameList === listaActiva);
    console.log(mylist);
    setListaActual(mylist[0]);
  });

  return (
    <div className="w-[80%]">
      <h4 className="text-3xl font-bold my-1">
        <FaHome />  {listaActiva.toUpperCase()} | Tareas
      </h4>

      <div>
        <input
          type="text"
          placeholder="Crear tarea"
          className="input input-bordered w-full max-w-xs"
          value={tareaActual}
          onChange={(e) => setTareaActual(e.target.value)}
        />
        <button onClick={configureTask} className="btn btn-accent mx-2">
          Crear Tarea
        </button>
      </div>

      <div>
        <ul className="menu bg-base-200 rounded-box w-56">
          {listaActual?.task?.map((item, index) => (
            <li key={index} className="m-3 text-lg text-accent">
              <a> {item} </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
