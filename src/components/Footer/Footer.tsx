import { FaSquareXTwitter } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
export default function Footer(){
    return(
        <>
        <footer className="bg-slate-950 text-white text-center py-5 mt-10">
    <div>
        <p className=" text-xl xl:text-2xl font-semibold">reflect.me</p>
    </div>
    <div className="flex justify-center gap-10 mt-5">
        <a className="text-white text-3xl" href="https://x.com/tushar20jain?t=4v8kwrzc5lbp6ahsrdzgng&s=09"><FaSquareXTwitter /></a>
        <a className="text-white text-3xl" href="https://www.producthunt.com/@tushar_jain13"><FaProductHunt /></a>
    </div>
    <p className="mt-5 text-sm">deployed on <span className="text-red-500"><a href="https://vercel.com/"><b><u>Vercel</u></b></a></span> </p>
</footer>
        </>
    )
}