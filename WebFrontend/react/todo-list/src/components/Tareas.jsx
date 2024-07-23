import { FaHatCowboySide, FaHome, FaTasks } from "react-icons/fa";
import useStore from "../store";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


export const Tareas = () => {
  const listaActiva = useStore((state) => state.listaActiva);
  const listas = useStore((state) => state.listas);
  const updateTask = useStore((state) => state.updateTask);
  const editarTask = useStore((state) => state.editarTask);
  const deleteTask = useStore((state) => state.deleteTask);
  const taskSearch = useStore((state) => state.taskSearch);
  const clearTaskSearch = useStore((state) => state.clearTaskSearch);
  

  
  const [listaActual, setListaActual] = useState();
  const [tareaActual, setTareaActual] = useState("");

  const [inputEditTask, setinputEditTask] = useState("");
  const [idEditTask, setidEditTask] = useState("");



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


  }, [listaActiva, listas]);



  useEffect(() => {
    if (taskSearch){
      // console.log([{
      //   nameList: listaActiva,
      //   task: [taskSearch]
      //   }]);
      setListaActual({
        nameList: listaActiva,
        task: [taskSearch]
        });

      clearTaskSearch();

    }
  
  }, [taskSearch])




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
        <ul className="menu bg-base-200 rounded-box w-full">


          {listaActual?.task?.map((item, index) => (
            <li key={index} className="m-3 text-lg text-accent px-5">
              <div className="flex justify-around">
             
           {
              idEditTask === item ?
             <input
                onKeyDown={(e) => {
                    if (e.key === "Enter"){
                      editarTask(listaActiva, item,  inputEditTask);
                      setinputEditTask("");
                      setidEditTask(null);
                    }
                }  }
                value={inputEditTask} onChange={(e) => setinputEditTask(e.target.value)} type="text"
                placeholder={`Editar Tarea ${item}`} className="input input-bordered w-full" />:
             <span> {item}  </span>
            }  

              <div onClick={() => setidEditTask(item) } >
              <CiEdit className="text-accent text-3xl" />
              </div>

              <div onClick={() => deleteTask(listaActiva, item)}>
              <MdDelete className="text-red-600 text-3xl" />
              </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
