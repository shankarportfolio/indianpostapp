import { manrope } from "@/app/_lib/fonts";
import React from "react";

const DetailsBlockHeading = ({children} : {children?: React.ReactNode}) =>{
    return(
        <h3 className={`${manrope.className} w-full flex items-center justify-start text-[17px] text-black leading-[26px] font-[700] mb-[15px]`}>{children}</h3>
    )
}

export default DetailsBlockHeading;