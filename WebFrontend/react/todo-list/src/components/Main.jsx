import { FaHatCowboySide, FaHome, FaTasks } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import useStore from "../store";
import { useRef } from "react";
import { Listas } from "./Listas";
import { Tareas } from "./Tareas";

const Main = () => {
  return (
    <>
      <div className="flex gap-5">
        <Listas />

        <Tareas />
      </div>
    </>
  );
};

export default Main;
