import { manrope } from "../_lib/fonts";

type ButtonTypes = {
    labelname: string;
    activeTab: string;
    tabName: string;
    OnClickHandler: (tab: string) => void;
};

const TabButton = ({ labelname, activeTab, tabName, OnClickHandler }: ButtonTypes) => {
    return (
        <button
            className={`${manrope.className} serachBtn inline-block py-[8px] px-[15px] mx-[3px] text-[12px] rounded-[5px] outline-none duration-150 ease-in-out cursor-pointer
            ${activeTab === tabName ? "bg-[#000] text-white" : "bg-[#c5cdda] text-black"}`}
            onClick={() => OnClickHandler(tabName)}
        >
            {labelname}
        </button>
    );
};

export default TabButton;