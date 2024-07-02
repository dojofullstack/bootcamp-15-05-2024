import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";



const Home = () => {

    const dataHeader = {
        title: "Blog Dojo Coding",
        logo: "https://t4.ftcdn.net/jpg/04/92/55/15/360_F_492551542_UiAoH0DyhL1ZHH9T24masCQZBa95DyW1.jpg"
    }

    const dataBlog = {
        titular: "Product Designer",
        banner: "",
        description: "Lorem ipsum dolor sit amet."
    }

    const dataBlog2 = {
        titular: "Product Ux / UI",
        banner: "",
        description: "Lorem ipsum dolor sit ametit ametit ametit amet."
    }


    return (
        <>
            <Header data={dataHeader} />

            <Main props={dataBlog}  props2={dataBlog2}  />

            <Footer />
        </>
    )
}

export default Home;