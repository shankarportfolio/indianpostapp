import { manrope } from "@/app/_lib/fonts";

type SubDetailsBlockType = {
    labelName: string,
    valueParameter: string
}

const SubDetailsBlock = ({labelName, valueParameter} : SubDetailsBlockType) =>{
    return (
        valueParameter && (
            <div className={`w-full`}>
                <label className={`${manrope.className} w-full text-[11px] block leading-[11px] mb-[5px]`}>{labelName}</label>
                <h4 className={`${manrope.className} text-sm text-black m-0 font-[600]`}>{valueParameter}</h4>
            </div>
        )
    )
}

export default SubDetailsBlock;