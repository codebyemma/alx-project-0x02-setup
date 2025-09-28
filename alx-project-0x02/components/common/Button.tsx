import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({size, shape, title}) => {
    return(
        <button className={`${size} ${shape}`}>{title}</button>
    );
};

export default Button;