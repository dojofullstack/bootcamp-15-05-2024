import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import useDojoStore from "../store";

export const Blog = () => {
  const { slug } = useParams();

  const [article, setArticle] = useState();

  const puntos = useDojoStore( (state) => state.puntos );
  const productos = useDojoStore( (state) => state.productos );
  const updatePuntos = useDojoStore((state) => state.updatePuntos);

  console.log(puntos, productos);


  const dataHeader = {
    title: "Blog Dojo Coding",
    logo: "https://t4.ftcdn.net/jpg/04/92/55/15/360_F_492551542_UiAoH0DyhL1ZHH9T24masCQZBa95DyW1.jpg",
  };

  console.log(slug);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${slug}`).then((res) => {
      // console.log();
      setArticle(res.data);
    });
  }, []);

  return (
    <>
      <Header data={dataHeader} />

      <div>
        <h1>Titulo: {article?.title} </h1>

        <p>{article?.body}</p>

        <h3>
          Puntos: {puntos}
        </h3>

        <button onClick={updatePuntos}>ACtuliazar State de Zustand</button>
      </div>

      <Footer />
    </>
  );
};
