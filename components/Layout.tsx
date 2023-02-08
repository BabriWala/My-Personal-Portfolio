import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";






const Layout = ({children}: any) => {

    return (
        <>
        <Header />
        {children}
        <Footer></Footer>
        </>
    );
};

export default Layout;