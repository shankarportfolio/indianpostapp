import { manrope } from "@/app/_lib/fonts";
import React from "react";


const FormHeading = ({children} : {children : React.ReactNode} ) =>{
    return(
        <h2 className={`${manrope.className} text-[18px] leading-[28px] text-black font-bold text-center mb-[20px]`}>{children}</h2>
    )
}

export default FormHeading;