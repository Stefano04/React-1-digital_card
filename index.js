import React from "react"
import ReactDOM from "react-dom"
import About from "./components/About"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"


export default function Card() {
    return (
        <div className="container">  
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Card />, document.getElementById("root"))

