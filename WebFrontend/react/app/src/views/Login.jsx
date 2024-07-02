import Footer from "../components/Footer"
import { FormLogin } from "../components/FormLogin"
import Header from "../components/Header"



export const Login = () => {

    const dataHeader = {
        title: "Blog Dojo Coding",
        logo: "https://t4.ftcdn.net/jpg/04/92/55/15/360_F_492551542_UiAoH0DyhL1ZHH9T24masCQZBa95DyW1.jpg"
    }


    return (
        <>
        <Header data={dataHeader} />

        <FormLogin/>

        <Footer/>
        </>
    )
}