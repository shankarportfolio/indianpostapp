import { manrope } from "@/app/_lib/fonts";
import { MapPinCheckInside } from "lucide-react";
import DetailsBlockHeading from "./DetailsBlockHeading";
import SubDetailsBlock from "./SubDetailsBlock";

type PostOfficeType = {
    Name: string,
    Block: string,
    BranchType: string,
    Circle: string,
    Country: string,
    DeliveryStatus: string,
    District: string,
    Division: string,
    Pincode: string,
    Region: string,
    State: string,
};

type postofficeTypes = {
    postoffice : PostOfficeType
}

const DetailsBlockBox = ({postoffice} : postofficeTypes) =>{
    return(
        <div className={`w-full rounded-[10px] shadow-sm bg-white py-[25px] px-[20px]`}>
            <DetailsBlockHeading><MapPinCheckInside width={30} height={30} className={`stroke-sky-600 mr-[7px]`} />{postoffice.Name}</DetailsBlockHeading>
            <div className={`w-full p-[15px] bg-sky-100 rounded-[10px] grid grid-cols-2 gap-[10px] gap-y-[20px]`}>
                <SubDetailsBlock labelName="Pincode:" valueParameter={postoffice.Pincode}/>
                <SubDetailsBlock labelName="Block:" valueParameter={postoffice.Block}/>
                <SubDetailsBlock labelName="Branch Type:" valueParameter={postoffice.BranchType}/>
                <SubDetailsBlock labelName="Circle:" valueParameter={postoffice.Circle}/>
                <SubDetailsBlock labelName="Delivery Status:" valueParameter={postoffice.DeliveryStatus}/>
                <SubDetailsBlock labelName="Division:" valueParameter={postoffice.Division}/>
                <SubDetailsBlock labelName="Region:" valueParameter={postoffice.Region}/>
                <SubDetailsBlock labelName="District:" valueParameter={postoffice.District}/>
                <SubDetailsBlock labelName="State:" valueParameter={postoffice.State}/>
                <SubDetailsBlock labelName="Country:" valueParameter={postoffice.Country}/>
            </div>
        </div>
    )
}

export default DetailsBlockBox;