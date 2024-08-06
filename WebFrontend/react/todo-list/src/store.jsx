import axios from 'axios';
import { create } from 'zustand'


const verifyLoginUser = (set, get) => {

  const token = localStorage.getItem("token");

  if (token){
    console.log("token activo, iniciando sesion...");
    // console.log(JSON.parse(token));
    const url = 'https://dummyjson.com/auth/me';
    
    axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(JSON.parse(token)); // for all requests

    axios.get(url).then(res => {

      set({
        isLogin: true,
        user: res.data
      });

    });

  }

}



const useStore = create((set, get) => ({
  user: {},
  isLogin: false,
  verifyLoginUser: () => verifyLoginUser(set, get),
  closeLogin: () => {
    localStorage.removeItem("token");
    set({
      isLogin: false,
      user: null
    });
  } ,
  updateUser: (data) => {
    localStorage.setItem("token", JSON.stringify(data.token));
    set({
      isLogin: true,
      user: data
    });
  },
  tasksCompleted : [],
  addTasksCompleted : (task) => set({
    tasksCompleted: [...get().tasksCompleted, task]
  }),
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