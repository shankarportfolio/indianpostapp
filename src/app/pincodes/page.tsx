import { Metadata } from "next";
import PincodeDetails from "./PincodeDetails";

export async function generateMetadata({ searchParams }: { searchParams: { query?: number } }): Promise<Metadata> {
    const params = await searchParams;
    const query = params.query;
    return {
      title: `Pincode Search - ${query} | India Post Lookup`
    };
}

const PicodeDetails = async ({ searchParams }: { searchParams: { query?: number } }) =>{
    
    const params = await searchParams;
    const query = params.query;
    return(
        <>
            <PincodeDetails pinnum={query} />
        </>
    )
}

export default PicodeDetails;