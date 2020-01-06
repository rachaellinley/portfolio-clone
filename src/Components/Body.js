import React from "react";
import "./Body.css"



    class Body extends React.Component {
        constructor(){
            super()
        }

        render(){
            return(
                <main>
                    <h1>Welcome To Our Studio</h1>
                    <h2>IT'S NICE TO MEET YOU</h2>
                    <button id="button">TELL ME MORE</button>
                </main>
            )
        }
    }

export default Body