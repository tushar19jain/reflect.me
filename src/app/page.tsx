import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import FAQ from "@/components/FAQ/FAQ";
export default function Home() {
  return (
   <div>
      <Navbar />
      <a href="https://www.producthunt.com/posts/reflect-me?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-reflect&#0045;me" target="_blank"><img className="mx-auto mt-20" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=440262&theme=neutral" alt="Reflect&#0046;me - Crafting&#0032;personalized&#0032;robo&#0032;avatars&#0032;from&#0032;your&#0032;unique&#0032;prompts | Product Hunt" /></a>
      <h1 className="text-center mt-20 xl:mt-40 text-3xl px-5 font-semibold xl:text-4xl">Your digital doppelganger 🤖</h1>
      <p className="text-center text-sm w-9/12 xl:w-full xl:text-lg xl:ml-0 text-slate-500 ml-10 mt-5">Crafting personalized robo avatars from your unique prompts</p>
<<<<<<< HEAD
    <button className=' bg-black text-white flex mt-10 mx-auto shadow-lg shadow-blue-200 py-2 px-5 rounded-md'>Coming on 21st Feb</button> 
=======
    <button className=' bg-black text-white flex mt-10 mx-auto shadow-lg shadow-blue-200 py-2 px-5 rounded-md'>Coming Soon! </button>
>>>>>>> d36c562afd4fb64f593ca3588b954f568bb3dbe1

    <video className="mx-auto my-20  rounded-xl border-gray-300 shadow-2xl shadow-gray-200  w-[340px]  xl:w-[800px]" controls={true} autoPlay={true} loop={true}>
      <source src="/howtouse.mp4" type="video/mp4" />
      <track
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    <h1 id="faq" className="text-center my-10  font-semibold xl:text-2xl">Frequenly Asked Questions</h1>
    <div className="flex flex-col bg-white py-10 rounded-md xl:border-2 xl:shadow-2xl xl:shadow-gray-300 xl:mx-[300px] gap-10">
    <FAQ paragraph = "Reflect.me is a web application that allows users to generate personalized robo avatars based on their unique prompts." heading ="What is Reflect.me?" />
    <FAQ paragraph = "Users provide a prompt, and Reflect.me uses that input to dynamically generate a robotic avatar, reflecting their personality." heading ="How does Reflect.me work?" />
    <FAQ heading="Can I change my avatar after creating it?" paragraph="Yes, you can change your avatar by providing a new prompt. Simply input a different text, and your avatar will be updated accordingly." />
    <FAQ heading="What prompts work best for creating unique avatars?" paragraph="Experiment with various prompts related to your interests, hobbies, or personality traits to get the most unique and personalized avatars." />
    <FAQ heading="Is Reflect.me free to use?" paragraph="Yes, Reflect.me is free to use. You can generate and download your robo avatars without any cost." />
    <FAQ heading="Can I download my generated avatar?" paragraph="Absolutely! Reflect.me allows you to download your dynamically generated avatar with just a click of a button." />
    </div>
    <Footer />
   </div>
  );
}
