"use client"
import ErrorPage from "@/components/ErrorPage";
import Loading from "@/components/Loading";
import PageSection from "@/components/PageSection";
import ResultsNote from "@/components/ResultsNote";
import SearchPageHeading from "@/components/SearchPageHeading";
import axios from "axios";
import { useEffect, useState } from "react";
import DetailsBlockBox from "@/components/DetailsBlockBox";



const PincodeDetails = ({pinnum} : {pinnum?: number}) =>{

    const [totalResults, setTotalResults] = useState<string>('');
    const [postOfficesList, setPostOfficesList] = useState<any[]>([]);
    const [errMsg, setErrMsg] = useState<boolean>(false);

    useEffect(()=>{
        if (!pinnum) return;
        const fetchPincode = async () =>{
            try{
                const res = await axios.get(`https://api.postalpincode.in/pincode/${pinnum}`);
                console.log(res.data[0]);
                setTotalResults(res.data[0]?.Message);
                setPostOfficesList(Object.values(res.data[0].PostOffice));
                setErrMsg(false)
            }catch(err){
                console.log(err);
                setErrMsg(true)
            }
        }
        fetchPincode();
    },[pinnum])

    return(
        <>
            {
                errMsg && <ErrorPage />
            }
            {
                !errMsg && postOfficesList.length === 0 ? (
                    <Loading />
                ) : (
                    <PageSection>
                        <SearchPageHeading>Search Results for {pinnum}</SearchPageHeading>
                        <ResultsNote totalResults={totalResults} />
                        <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[30px]`}>
                            {
                                postOfficesList.map((postoffice, index) => (
                                    <DetailsBlockBox postoffice={postoffice} key={index} />
                                ))
                            }
                        </div>
                    </PageSection>
                )
            }
        </>
    )
}

export default PincodeDetails;