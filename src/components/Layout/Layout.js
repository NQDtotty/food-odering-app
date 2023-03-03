import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routes from "../../routes/Routers"

export default function Layout() {
    return (
        <div>
            <Header></Header>
            <div>
                <Routes></Routes>
            </div>
            <Footer></Footer>
        </div>
    )
}
