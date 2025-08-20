import { raleway, lilita_one } from "@/app/_lib/fonts"
import Link from "next/link"

const Header = () =>{
    return(
        <header className="w-full">
            <div className="w-full px-[15px] py-[20px] bg-white flex items-center justify-center">
                <Link href="/" prefetch={true} className={`${lilita_one.className} text-[30px] leading-[35px] font-normal text-black italic uppercase outline-none hover:outline-none focus:outline-none`}>India Post Lookup</Link>
            </div>
        </header>
    )
}

export default Header