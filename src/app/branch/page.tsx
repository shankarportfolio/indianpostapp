import { Metadata } from "next";
import BranchDetails from "./BranchDetails";

export async function generateMetadata({ searchParams }: { searchParams: { query?: string } }): Promise<Metadata> {
    const params = await searchParams;
    const query = params.query;
    return {
      title: `Branch Search - ${query} | India Post Lookup`
    };
}

const PicodeDetails = async ({ searchParams }: { searchParams: { query?: string } }) =>{
    
    const params = await searchParams;
    const query = params.query;
    return(
        <>
            <BranchDetails pinnum={query} />
        </>
    )
}

export default PicodeDetails;