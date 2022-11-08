import React from "react";
import WhatsHappening from "./whats-happening";
import TuitList from "../TuitsList";


const HomeComponent = () => {
    return(
        <ul className="list-group">
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </ul>
    )
}
export default HomeComponent