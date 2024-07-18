import { create } from 'zustand'

const useStore = create((set, get) => ({
  listaActiva: "",
  updateListaActiva : (name) => set({listaActiva: name}),
  listas: [
    {
        "nameList": "supermercado",
        "task": ["comprar fresas", "comprar camote"]
    },
    {
        "nameList": "supermercado2",
        "task": ["comprar verduras", "comprar frutas", "comprar carnes"]
    },
  ],
  createList: (listaNueva) => set({listas: [...get().listas, listaNueva ] }),
  updateTask: (lista) => {

    const listaPrevia =  get().listas.filter(item => item.nameList !==  lista.nameList );

    set({
          listas: [ ...listaPrevia, lista]
        });

  }
}))

export default useStore;