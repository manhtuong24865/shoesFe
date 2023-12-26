import React from "react";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import FotterComponent from "../FotterComponent/FotterComponent"
const DefalutComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
            <FotterComponent />
        </div>
    )
}
export default DefalutComponent