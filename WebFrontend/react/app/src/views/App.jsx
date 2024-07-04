import Header from "../components/Header";

function App() {
  const dataHeader = {
    title: "Blog Dojo Coding",
    logo: "https://t4.ftcdn.net/jpg/04/92/55/15/360_F_492551542_UiAoH0DyhL1ZHH9T24masCQZBa95DyW1.jpg"
}


  return (
    <>
      <Header data={dataHeader} />
      <h1>Hola</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <img src="" alt="" />
    </>
  );
}

export default App;
