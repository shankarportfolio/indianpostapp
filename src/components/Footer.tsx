import { manrope } from "@/app/_lib/fonts";

const Footer = () =>{
    return(
        <footer className="w-full bg-white">
            <div className="w-full p-[15px] text-center">
                <p className={`${manrope.className} text-sm m-0 text-black text-center`}>Copyright &copy; 2025 Post Office.</p>
            </div>
        </footer>
    )
}

export default Footer;