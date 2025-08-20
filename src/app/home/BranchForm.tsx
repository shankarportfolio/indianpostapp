"use client"
import FormHeading from "@/components/FormHeading";
import { manrope } from "../_lib/fonts";
import { useState } from "react";
import { useRouter } from 'next/navigation';

type ButtonTypes = {
    activeTab: string;
    tabName: string;
};

const BranchForm = ({activeTab, tabName} : ButtonTypes) =>{
    
    const [branchName, setBranchName] = useState<any>('');
    const [numErr, setNumErr] = useState<boolean>(false);
    const router = useRouter();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = (e.target.value)
    
        // If empty, allow it and hide error
        if (value === "") {
            setBranchName("");
            setNumErr(true);
            return;
        }
    
        if (/^[A-Za-z0-9\s]+$/.test(value)) {
            setBranchName(value);  
            setNumErr(false);    // valid
        } else {
            setBranchName(value);
            setNumErr(true);   // invalid
        }
    };
    
    const onBranchSubmitHandler = () =>{
        // alert(`Hello ${branchName}`)
        router.push(`/branch/?query=${branchName}`)
    }

    return(
    
        <div className={`w-[85%] md:w-[340px] lg:w-[340px] m-auto bg-white py-[35px] px-[30px] rounded-[15px] ${activeTab === tabName ? 'block' : 'hidden'}`}>
            <FormHeading>Branch Name Search</FormHeading>
            <form className={`w-full`} onSubmit={(e) => {e.preventDefault(); onBranchSubmitHandler();}}>
                <div className="w-full mb-[20px]">
                    <input id="branchname_input" type="text" name="pincode_input" autoComplete="off" value={branchName} className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black-600 sm:text-sm/6 ${numErr ? 'outline-red-300' : 'outline-green-300'}`} placeholder="Enter Branch Name" inputMode="text" onChange={onChangeHandler} required />
                    {numErr && <span className={`${manrope.className} w-full text-[10px] block leading-[10px] text-red mt-[5px]`}>Please Enter Branch Name</span>}
                </div>
                <div className="w-full">
                    <button type="submit" className={`${manrope.className} w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  cursor-pointer`}>Search</button>
                </div>
            </form>
        </div>
    )

}

export default BranchForm;