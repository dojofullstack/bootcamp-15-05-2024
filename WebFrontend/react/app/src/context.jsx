import React from "react"




export const storeBlog = {
    articles: [],
    logoBlog: "",
    slogan: "",
    perfil: {}
}


const AppContext =  React.createContext(storeBlog);

export default AppContext;