"use client"
import { useState } from "react";
import TabButton from "./TabButton";
import PincodeForm from "./PincodeForm";
import BranchForm from "./BranchForm";

type SearchTypes = string;

const MainPage = () =>{

    const [pincodeBtn, setPincodeBtn] = useState<SearchTypes>("Pincode");
    const OnClickHandler = (searchtype : SearchTypes) =>{
        setPincodeBtn(searchtype);
    }

    return(
        <>
            <div className="w-full py-[35px] px-[10px] flex items-center justify-center flex-wrap">
                <TabButton labelname="Search by Pincode" activeTab={pincodeBtn} tabName="Pincode" OnClickHandler={OnClickHandler} />
                <TabButton labelname="Search by Branch Name" activeTab={pincodeBtn} tabName="Branch" OnClickHandler={OnClickHandler} />
            </div>
            <div className="w-full">
                <PincodeForm activeTab={pincodeBtn} tabName="Pincode"/>
                <BranchForm activeTab={pincodeBtn} tabName="Branch"/>
            </div>
        </>
    )
}

export default MainPage;