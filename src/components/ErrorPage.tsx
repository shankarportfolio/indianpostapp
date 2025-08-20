import { Ban } from "lucide-react";
import PageSection from "./PageSection";
import { manrope } from "@/app/_lib/fonts";
import Link from "next/link";

const ErrorPage = () => {
    return(
        <PageSection parentClasses={`flex items-center justify-center h-(--heightvar) px-[40px]`}>
            <div className="flex items-center justify-center">
                <Ban width={60} height={60} className={`stroke-red-700`} />
            </div>
            <h3 className={`${manrope.className} text-center text-[35px] leading-[45px] text-black font-[800] mb-[15px] mt-[35px]`}>Oops!</h3>
            <p className={`${manrope.className} text-center text-base text-[#a7acb0] font-normal tracking-[1px] leading-[30px] mb-[35px]`}>We couldn't find the page you were looking for</p>
            <Link href="/" prefetch={true} className={`${manrope.className} text-sm block w-[35%] m-auto text rounded-md bg-black text-white px-3 py-2 text-center outline-none hover:outline-none focus:outline-none`}>Go to Home</Link>
        </PageSection>
    )
}

export default ErrorPage;