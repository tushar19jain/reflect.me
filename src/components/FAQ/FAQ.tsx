"use client"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, useState } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa6";
export default function FAQ(Props: {
    paragraph: ReactNode; heading: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
}){
    const [faq,openFAQ] = useState(true)
    return(
        faq ?
        <div onClick={()=>{
            openFAQ(false)
        }} className="flex justify-between px-10 ">
            <h1>{Props.heading}</h1>
            <button onClick={()=>{
                openFAQ(false)
            }}><FaChevronDown /></button>
        </div>
        :
        <div>
            <div onClick={()=>{
                openFAQ(true)
            }} className="flex justify-between px-10">
            <h1>{Props.heading}</h1>
            <button onClick={()=>{
                openFAQ(true)
            }}><FaChevronUp /></button>
            </div>
            <div className="px-5 my-5 text-gray-500 xl:text-xl bg-whitepx-10 xl:w-8/12 mx-auto" >
            <p className="text-sm xl:text-xl xl:px-0 px-5">{Props.paragraph}</p>
            </div>
        </div>
    )
}