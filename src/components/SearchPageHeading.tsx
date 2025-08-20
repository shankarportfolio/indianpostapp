import { manrope } from "@/app/_lib/fonts";
import React from "react";

const SearchPageHeading = ({children} : {children?: React.ReactNode}) =>{
    return(
        <h1 className={`${manrope.className} text-[20px] leading-[30px] text-black font-[500] mb-[25px] text-center`}>{children}</h1>
    )
}

export default SearchPageHeading;