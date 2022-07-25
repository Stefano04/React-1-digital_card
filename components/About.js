import React from "react"
export default function About() {
    return (
        <main> 
            <div className="details"> {/* here I need to insert name, job, link to website, and buttons with icons.*/}

                <h3 className="name">Stefano Scilipoti</h3>
                <h4 className="job">Frontend Developer</h4>
                <div className="buttons">
                    <button className="email"><ion-icon name="mail"></ion-icon> E-mail</button>
                    <a href="https://www.linkedin.com/"><button className="linkedin"><ion-icon name="logo-linkedin" top="50%"></ion-icon> LinkedIn</button></a>
                </div>
                
            </div>
            
        </main>          
    )
}