import { create } from 'zustand'

const useStore = create((set, get) => ({
  listaActiva: "",
  taskSearch: "",
  clearTaskSearch: () => (set({taskSearch: ""})),
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

  },
  editarTask: (lista, name, nameNew) => {
    const listaPrevia =  get().listas.filter(item => item.nameList !==  lista );

    const getLista = get().listas.find((item) => item.nameList ===  lista);
    // console.log(getLista);
    const tasksPrevia = getLista.task.filter((item) => item !== name);
    // console.log([...tasksPrevia, nameNew]);

    set({
      listas: [ ...listaPrevia, 
        {
          "nameList": lista,
          "task": [...tasksPrevia, nameNew]
      },
      ]
    });
  },

  deleteTask: (lista, name) => {

    const listaPrevia =  get().listas.filter(item => item.nameList !==  lista );

    const getLista = get().listas.find((item) => item.nameList ===  lista);

    const tasksPrevia = getLista.task.filter((item) => item !== name);

    set({
      listas: [ ...listaPrevia, 
        {
          "nameList": lista,
          "task": [...tasksPrevia]
      },
      ]
    });


  },

  searchTask: (name) => {

    get().listas.forEach(element => {
      
      const taskMacht = element.task.find((item) => item === name);

      if (taskMacht){
        // console.log(taskMacht);
        // console.log(element.nameList);
        set({
          listaActiva: element.nameList,
          taskSearch: taskMacht
        })

      }



    });


  } 


}))

export default useStore;