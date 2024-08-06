import { useEffect, useState } from "react";
import useStore from "../store";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const verifyLoginUser = useStore((state) => state.verifyLoginUser);
  const isLogin = useStore((state) => state.isLogin);
  const user = useStore((state) => state.user);
  const closeLogin = useStore((state) => state.closeLogin);

  const searchTask = useStore((state) => state.searchTask);

  // const listaActiva = useStore((state) => state.listaActiva);
  // const taskSearch = useStore((state) => state.taskSearch);

  const [inputSearch, setInputSearch] = useState("");


  console.log("user", user);


  useEffect(() => {
    verifyLoginUser();
    
    if (!isLogin){
      navigate("/login");
    }
  }, [isLogin])


  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TodoList</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Buscador de tareas"
              className="input input-bordered w-full"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter"){
                  searchTask(inputSearch);
                  setInputSearch("");
                }
            }  }
              />
          </div>
          
       {isLogin && user?.id &&
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.image}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {user?.firstName}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={closeLogin}>
                <a>Cerrar sesion</a>
              </li>
            </ul>
          </div>
          }

        </div>
      </div>
    </>
  );
};

export default Header;
