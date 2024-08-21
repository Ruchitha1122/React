import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
/**
 * header
 *    - logo
 *    - nav items
 * Body
 *    -Search
 *    -Restuarents
 *      - RestuarentCard
 *          -img
 *          -food
 * Footer
 *     -CopyRight
 *     -links
 *     -Address
 *     -contact
 */




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);