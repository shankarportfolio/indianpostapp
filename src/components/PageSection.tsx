import React from "react";

type PageSectionType = {
    parentClasses?: string,
    childClasses?: string,
    children?: React.ReactNode
}

const PageSection = ({children, parentClasses, childClasses} : PageSectionType) =>{
    return(
        <section className={`w-full py-[35px] px-[15px] ${parentClasses}`}>
            <div className={`w-full lg:w-[1200px] m-auto ${childClasses}`}>
                {children}
            </div>
        </section>
    )
}

export default PageSection;