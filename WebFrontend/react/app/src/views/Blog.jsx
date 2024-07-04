import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export const Blog = () => {
  const { slug } = useParams();

  const [article, setArticle] = useState();

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
      </div>

      <Footer />
    </>
  );
};
