import { useRef } from "react";
import { MdMenu } from "react-icons/md";
import useStore from "../store";



export const Listas = () => {
  const inputCreateList =  useRef(null);
  const listas =  useStore((state) => state.listas);
  const createList = useStore((state) => state.createList);
  const updateListaActiva = useStore((state) => state.updateListaActiva);
  const listaActiva = useStore((state) => state.listaActiva);


  console.log("listas", listas);
  console.log("listaActiva", listaActiva);



  return (
    <div className="drawer w-[20%] ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <MdMenu className="text-4xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 rounded-box w-56">
          <li className="menu-title text-xl">Listas</li>

          {listas?.map((item, index) => (
            <li key={index} className="text-lg m-2" onClick={() => updateListaActiva(item.nameList)} >
              <span>{item.nameList}</span>
            </li>
          ))}

          <li className="mt-3">
            {/* crear listas */}
            <div className="flex flex-col">
              <input
                ref={inputCreateList}
                type="text"
                placeholder="Crear Lista"
                className="input input-bordered w-full max-w-xs"
              />

              <button
                className="btn btn-primary w-full"
                onClick={() =>
                  createList({
                    nameList: inputCreateList.current.value,
                    task: [],
                  })
                }
              >
                Crear Lista
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
