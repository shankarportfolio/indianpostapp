import { manrope } from "@/app/_lib/fonts";
import { Hash } from "lucide-react";

type ResultsNoteType = {
    totalResults?: string
}

const ResultsNote = ({totalResults} : ResultsNoteType) =>{
    return(
        <div className={`${manrope.className} w-full bg-white rounded-[10px] px-[20px] py-[15px] text-base text-black shadow-sm font-[600] flex items-center justify-start`}>
            <Hash width={20} height={20} className={`text-green-400 mr-[10px]`} /> {totalResults}
        </div>
    )
}

export default ResultsNote;