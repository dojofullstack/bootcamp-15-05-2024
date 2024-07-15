
import { create } from 'zustand'

const updatePuntos = () => {
    console.log("update pruntost")
}

const useDojoStore = create((set, get) => ({
    puntos: 10,
    perfil: {id: 1, name: "pepe"},
    productos: ["iphone", "xiomi"],
    updatePuntos: () => set({puntos: get().puntos + 10 })
}))


export default useDojoStore;
