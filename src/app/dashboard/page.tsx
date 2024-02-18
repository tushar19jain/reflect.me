'use client'
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { SetStateAction, useState } from "react";
import * as fileSaver from 'file-saver';
import FAQ from "@/components/FAQ/FAQ";
import saveAs from "file-saver";
export default function Page(){
    const [prompt,setPrompt] = useState("reflect.me")
    const [size,setSize] = useState("300");
    const [format,setFormat] = useState(".png")
    const [avatar,setAvatar] = useState("set1")
    const handleSize = (e:{target:{value: SetStateAction<string>; };})=>{
        setSize(e.target.value);
    }
    const handlePrompt = (e: { target: { value: SetStateAction<string>; }; })=>{
        const value = e.target.value;
        console.log(value)
        setPrompt(e.target.value)
    }
    const handleFormat = (e: { target: { value: SetStateAction<string>; }; })=>{
        setFormat(e.target.value)
    }
    const [imageUrl,setImageUrl] = useState('')
    const handleUrl = (e:any)=>{
        const newUrl = e.target.src;
        setImageUrl(newUrl);
    }
    const downloadImg=()=>{
        saveAs(imageUrl,'robo')
    }
    if(avatar == "set1"){
        return(
            <div>
                 <Navbar />
                 <img onLoad={handleUrl} className="mx-auto mt-12  border-[3px] shadow-2xl shadow-violet-600 border-black border-solid rounded-full" draggable={false} src={`https://robohash.org/${prompt}${format}?size=${size}x${size}`}></img>
                <p className="text-center mt-20 mb-10 text-gray-500">Want some more style?</p>
                <div className="flex flex-wrap justify-center items-center px-5 py-5 mx-10 xl:mx-80 rounded-lg bg-gray-900 text-slate-300  gap-3 ">
                <p>subject 1</p>
                <input onChange={()=>{
                    setAvatar("set1")
                }} type="radio" name="subject" id="subject1" value={"subject1"} />
                <p>subject 2</p>
                <input onChange={()=>{
                    setAvatar("set2")
                }} type="radio" name="subject" id="subject1" value={"subject2"} />
                <p>subject 3</p>
                <input onChange={()=>{
                    setAvatar("set3")
                }} type="radio" name="subject" id="subject1" value={"subject3"} />
                <p>subject 4</p>
                <input onChange={()=>{
                    setAvatar("set4")
                }} type="radio" name="subject" id="subject1" value={"subject4"} />
                <p>Become human 🥹</p>
                <input onChange={()=>{
                    setAvatar("set5")
                }} type="radio" name="subject" id="subject1" value={"subject5"} />
                </div>
                 <div className="setting-box xl:mx-[500px] border-2 bg-white  text-black border-black mx-5 mt-10 py-10 px-5 flex flex-col rounded-xl shadow-lg  gap-8">
                 <b><p>Set up your robo😉</p></b>
                    <input onChange={handlePrompt}className="px-2 py-2 border text-sm"placeholder="Tell about yourself : Name, Work etc"></input>
                    <p>Size of robo :<b>{size}x{size}</b></p>
                    <input onChange={handleSize} type="range" min={300} max={700} name="" id="" />
                    <p>Format: <b>{format}</b> </p>
                    <div className="flex gap-5">
                    <p>png</p><input onChange={handleFormat} type="radio" name="format" value='.png' id="png" /> 
                    <p>jpg</p><input onChange={handleFormat} type="radio" name="format" value='.jpg' id="jpg" />
                    </div>
                    <button className="bg-black py-2 px-2 text-white rounded-xl" onClick={downloadImg}>Download</button>
                 </div>
                 <h1 id="faq" className="text-center my-10 font-semibold xl:text-2xl">Frequenly Asked Questions</h1>
                 <div className="flex flex-col my-10 bg-white gap-10">
    <FAQ paragraph = "Reflect.me is a web application that allows users to generate personalized robo avatars based on their unique prompts." heading ="What is Reflect.me?" />
    <FAQ paragraph = "Users provide a prompt, and Reflect.me uses that input to dynamically generate a robotic avatar, reflecting their personality." heading ="How does Reflect.me work?" />
    <FAQ heading="Can I change my avatar after creating it?" paragraph="Yes, you can change your avatar by providing a new prompt. Simply input a different text, and your avatar will be updated accordingly." />
    <FAQ heading="What prompts work best for creating unique avatars?" paragraph="Experiment with various prompts related to your interests, hobbies, or personality traits to get the most unique and personalized avatars." />
    <FAQ heading="Is Reflect.me free to use?" paragraph="Yes, Reflect.me is free to use. You can generate and download your robo avatars without any cost." />
    <FAQ heading="Can I download my generated avatar?" paragraph="Absolutely! Reflect.me allows you to download your dynamically generated avatar with just a click of a button." />
    </div>
                 <Footer />
            </div>   
        ) 
    }else if(avatar == "set2"){
        return(
            <div>
                 <Navbar />
                 <img onLoad={handleUrl} className={`mx-auto border-[3px] shadow-2xl shadow-violet-600 border-black border-solid  mt-12 w-[${size}] h-[${size}]  border-black border-2 rounded-full`} draggable={false} src={`https://robohash.org/${prompt}${format}?set=${avatar}`}></img>
                <p className="text-center mt-20 mb-10 text-gray-500">Want some more style?</p>
                <div className="flex flex-wrap justify-center items-center px-5 py-5 mx-10 xl:mx-80 rounded-lg bg-gray-900 text-slate-300  gap-3 ">
                <p>subject 1</p>
                <input onChange={()=>{
                    setAvatar("set1")
                }} type="radio" name="subject" id="subject1" value={"subject1"} />
                <p>subject 2</p>
                <input onChange={()=>{
                    setAvatar("set2")
                }} type="radio" name="subject" id="subject1" value={"subject2"} />
                <p>subject 3</p>
                <input onChange={()=>{
                    setAvatar("set3")
                }} type="radio" name="subject" id="subject1" value={"subject3"} />
                <p>subject 4</p>
                <input onChange={()=>{
                    setAvatar("set4")
                }} type="radio" name="subject" id="subject1" value={"subject4"} />
                <p>Become human 🥹</p>
                <input onChange={()=>{
                    setAvatar("set5")
                }} type="radio" name="subject" id="subject1" value={"subject5"} />
                </div>
                 <div className="setting-box bg-white xl:mx-[500px] border-2 text-black border-black mx-5 mt-10 py-10 px-5 flex flex-col rounded-xl shadow-lg  gap-8">
                 <b><p>Set up your robo😉</p></b>
                    <input onChange={handlePrompt}className="px-2 py-2 border text-sm"placeholder="Tell about yourself : Name, Work etc"></input>
                    <p>Size of robo :<b>{size}x{size}</b></p>
                    <p>Format: <b>{format}</b> </p>
                    <div className="flex gap-5">
                    <p>png</p><input onChange={handleFormat} type="radio" name="format" value='.png' id="png" /> 
                    <p>jpg</p><input onChange={handleFormat} type="radio" name="format" value='.jpg' id="jpg" />
                    </div>
                    <button className="bg-black py-2 px-2 text-white rounded-xl" onClick={downloadImg}>Download</button>
                 </div>
                 <h1 id="faq" className="text-center my-10 font-semibold xl:text-2xl">Frequenly Asked Questions</h1>
                 <div className="flex flex-col my-10 bg-white gap-10">
    <FAQ paragraph = "Reflect.me is a web application that allows users to generate personalized robo avatars based on their unique prompts." heading ="What is Reflect.me?" />
    <FAQ paragraph = "Users provide a prompt, and Reflect.me uses that input to dynamically generate a robotic avatar, reflecting their personality." heading ="How does Reflect.me work?" />
    <FAQ heading="Can I change my avatar after creating it?" paragraph="Yes, you can change your avatar by providing a new prompt. Simply input a different text, and your avatar will be updated accordingly." />
    <FAQ heading="What prompts work best for creating unique avatars?" paragraph="Experiment with various prompts related to your interests, hobbies, or personality traits to get the most unique and personalized avatars." />
    <FAQ heading="Is Reflect.me free to use?" paragraph="Yes, Reflect.me is free to use. You can generate and download your robo avatars without any cost." />
    <FAQ heading="Can I download my generated avatar?" paragraph="Absolutely! Reflect.me allows you to download your dynamically generated avatar with just a click of a button." />
    </div>
                 <Footer />
                 
            </div>   
        ) 
    }else if(avatar == "set3"){
        return(
            <div>
                 <Navbar />
                 <img onLoad={handleUrl} className="mx-auto mt-12  border-[3px] shadow-2xl shadow-violet-600 border-black border-solid  rounded-full" draggable={false} src={`https://robohash.org/${prompt}${format}?set=${avatar}`}></img>
                <p className="text-center mt-20 mb-10 text-gray-500">Want some more style?</p>
                <div className="flex flex-wrap justify-center items-center px-5 py-5 mx-10 xl:mx-80 rounded-lg bg-gray-900 text-slate-300  gap-3 ">
                <p>subject 1</p>
                <input onChange={()=>{
                    setAvatar("set1")
                }} type="radio" name="subject" id="subject1" value={"subject1"} />
                <p>subject 2</p>
                <input onChange={()=>{
                    setAvatar("set2")
                }} type="radio" name="subject" id="subject1" value={"subject2"} />
                <p>subject 3</p>
                <input onChange={()=>{
                    setAvatar("set3")
                }} type="radio" name="subject" id="subject1" value={"subject3"} />
                <p>subject 4</p>
                <input onChange={()=>{
                    setAvatar("set4")
                }} type="radio" name="subject" id="subject1" value={"subject4"} />
                <p>Become human 🥹</p>
                <input onChange={()=>{
                    setAvatar("set5")
                }} type="radio" name="subject" id="subject1" value={"subject5"} />
                </div>
                 <div className="setting-box bg-white xl:mx-[500px] border-2 text-black border-black mx-5 mt-10 py-10 px-5 flex flex-col rounded-xl shadow-lg  gap-8">

                    <input onChange={handlePrompt}className="px-2 py-2 border text-sm"placeholder="Tell about yourself : Name, Work etc"></input>
                    <p>Size of robo :<b>{size}x{size}</b></p>
                    <p>Format: <b>{format}</b> </p>
                    <div className="flex gap-5">
                    <p>png</p><input onChange={handleFormat} type="radio" name="format" value='.png' id="png" /> 
                    <p>jpg</p><input onChange={handleFormat} type="radio" name="format" value='.jpg' id="jpg" />
                    </div>
                    <button className="bg-black py-2 px-2 text-white rounded-xl" onClick={downloadImg}>Download</button>
                 </div>
                 <h1 id="faq" className="text-center my-10 font-semibold xl:text-2xl">Frequenly Asked Questions</h1>
                 <div className="flex flex-col my-10 bg-white gap-10">
    <FAQ paragraph = "Reflect.me is a web application that allows users to generate personalized robo avatars based on their unique prompts." heading ="What is Reflect.me?" />
    <FAQ paragraph = "Users provide a prompt, and Reflect.me uses that input to dynamically generate a robotic avatar, reflecting their personality." heading ="How does Reflect.me work?" />
    <FAQ heading="Can I change my avatar after creating it?" paragraph="Yes, you can change your avatar by providing a new prompt. Simply input a different text, and your avatar will be updated accordingly." />
    <FAQ heading="What prompts work best for creating unique avatars?" paragraph="Experiment with various prompts related to your interests, hobbies, or personality traits to get the most unique and personalized avatars." />
    <FAQ heading="Is Reflect.me free to use?" paragraph="Yes, Reflect.me is free to use. You can generate and download your robo avatars without any cost." />
    <FAQ heading="Can I download my generated avatar?" paragraph="Absolutely! Reflect.me allows you to download your dynamically generated avatar with just a click of a button." />
    </div>
                 <Footer />

            </div>   
        ) 
    }else if(avatar == "set4"){
        return(
            <div>
                 <Navbar />
                 <img onLoad={handleUrl} className="mx-auto mt-12 border-[3px] shadow-2xl shadow-violet-600 border-black border-solid  rounded-full" draggable={false} src={`https://robohash.org/${prompt}${format}?set=${avatar}`}></img>
                <p className="text-center mt-20 mb-10 text-gray-500">Want some more style?</p>
                <div className="flex flex-wrap justify-center items-center px-5 py-5 mx-10 xl:mx-80 rounded-lg bg-gray-900 text-slate-300  gap-3 ">
                <p>subject 1</p>
                <input onChange={()=>{
                    setAvatar("set1")
                }} type="radio" name="subject" id="subject1" value={"subject1"} />
                <p>subject 2</p>
                <input onChange={()=>{
                    setAvatar("set2")
                }} type="radio" name="subject" id="subject1" value={"subject2"} />
                <p>subject 3</p>
                <input onChange={()=>{
                    setAvatar("set3")
                }} type="radio" name="subject" id="subject1" value={"subject3"} />
                <p>subject 4</p>
                <input onChange={()=>{
                    setAvatar("set4")
                }} type="radio" name="subject" id="subject1" value={"subject4"} />
                <p>Become human 🥹</p>
                <input onChange={()=>{
                    setAvatar("set5")
                }} type="radio" name="subject" id="subject1" value={"subject5"} />
                </div>
                 <div className="setting-box bg-white border-2 xl:mx-[500px] text-black border-black mx-5 mt-10 py-10 px-5 flex flex-col rounded-xl shadow-lg  gap-8">
                 <b><p>Set up your robo😉</p></b>
                    <input onChange={handlePrompt}className="px-2 py-2 border text-sm"placeholder="Tell about yourself : Name, Work etc"></input>
                    <p>Size of robo :<b>{size}x{size}</b></p>
                    <p>Format: <b>{format}</b> </p>
                    <div className="flex gap-5">
                    <p>png</p><input onChange={handleFormat} type="radio" name="format" value='.png' id="png" /> 
                    <p>jpg</p><input onChange={handleFormat} type="radio" name="format" value='.jpg' id="jpg" />
                    </div>
                    <button className="bg-black py-2 px-2 text-white rounded-xl" onClick={downloadImg}>Download</button>
                 </div>
                 <h1 id="faq" className="text-center my-10 font-semibold xl:text-2xl">Frequenly Asked Questions</h1>
                 <div className="flex flex-col my-10 bg-white gap-10">
    <FAQ paragraph = "Reflect.me is a web application that allows users to generate personalized robo avatars based on their unique prompts." heading ="What is Reflect.me?" />
    <FAQ paragraph = "Users provide a prompt, and Reflect.me uses that input to dynamically generate a robotic avatar, reflecting their personality." heading ="How does Reflect.me work?" />
    <FAQ heading="Can I change my avatar after creating it?" paragraph="Yes, you can change your avatar by providing a new prompt. Simply input a different text, and your avatar will be updated accordingly." />
    <FAQ heading="What prompts work best for creating unique avatars?" paragraph="Experiment with various prompts related to your interests, hobbies, or personality traits to get the most unique and personalized avatars." />
    <FAQ heading="Is Reflect.me free to use?" paragraph="Yes, Reflect.me is free to use. You can generate and download your robo avatars without any cost." />
    <FAQ heading="Can I download my generated avatar?" paragraph="Absolutely! Reflect.me allows you to download your dynamically generated avatar with just a click of a button." />
    </div>
                 <Footer />

            </div>   
        ) 
    }else if(avatar == "set5"){
        return(
            <div>
                 <Navbar />
                     <img onLoad={handleUrl} className={`mx-auto mt-12 w-[${size}] h-[${size}] border-[3px] shadow-2xl shadow-violet-600 border-black border-solid  rounded-full`} draggable={false} src={`https://robohash.org/${prompt}${format}?set=${avatar}`}></img>

                <p className="text-center mt-20 mb-10 text-gray-500">Want some more style?</p>
                <div className="flex flex-wrap justify-center items-center px-5 py-5 mx-10 xl:mx-80 rounded-lg bg-gray-900 text-slate-300  gap-3 ">
                <p>subject 1</p>
                <input onChange={()=>{
                    setAvatar("set1")
                }} type="radio" name="subject" id="subject1" value={"subject1"} />
                <p>subject 2</p>
                <input onChange={()=>{
                    setAvatar("set2")
                }} type="radio" name="subject" id="subject1" value={"subject2"} />
                <p>subject 3</p>
                <input onChange={()=>{
                    setAvatar("set3")
                }} type="radio" name="subject" id="subject1" value={"subject3"} />
                <p>subject 4</p>
                <input onChange={()=>{
                    setAvatar("set4")
                }} type="radio" name="subject" id="subject1" value={"subject4"} />
                <p>Become human 🥹</p>
                <input onChange={()=>{
                    setAvatar("set5")
                }} type="radio" name="subject" id="subject1" value={"subject5"} />
                </div>
                 <div className="setting-box bg-white xl:mx-[500px] border-2 text-black border-black mx-5 mt-10 py-10 px-5 flex flex-col rounded-xl shadow-lg  gap-8">
                    <b><p>Set up your robo😉</p></b>
                    <input onChange={handlePrompt}className="px-2 py-2 border text-sm"placeholder="Tell about yourself : Name, Work etc"></input>
                    <p>Size of robo :<b>{size}x{size}</b></p>
                    <p>Format: <b>{format}</b> </p>
                    <div className="flex gap-5">
                    <p>png</p><input onChange={handleFormat} type="radio" name="format" value='.png' id="png" /> 
                    <p>jpg</p><input onChange={handleFormat} type="radio" name="format" value='.jpg' id="jpg" />
                    </div>
                    <button className="bg-black py-2 px-2 text-white rounded-xl" onClick={downloadImg}>Download</button>
                 </div>
                 <h1 id="faq" className="text-center my-10 font-semibold xl:text-2xl">Frequenly Asked Questions</h1>
                 <div className="flex flex-col my-10 bg-white gap-10">
    <FAQ paragraph = "Reflect.me is a web application that allows users to generate personalized robo avatars based on their unique prompts." heading ="What is Reflect.me?" />
    <FAQ paragraph = "Users provide a prompt, and Reflect.me uses that input to dynamically generate a robotic avatar, reflecting their personality." heading ="How does Reflect.me work?" />
    <FAQ heading="Can I change my avatar after creating it?" paragraph="Yes, you can change your avatar by providing a new prompt. Simply input a different text, and your avatar will be updated accordingly." />
    <FAQ heading="What prompts work best for creating unique avatars?" paragraph="Experiment with various prompts related to your interests, hobbies, or personality traits to get the most unique and personalized avatars." />
    <FAQ heading="Is Reflect.me free to use?" paragraph="Yes, Reflect.me is free to use. You can generate and download your robo avatars without any cost." />
    <FAQ heading="Can I download my generated avatar?" paragraph="Absolutely! Reflect.me allows you to download your dynamically generated avatar with just a click of a button." />
    </div>
                 <Footer />

            </div>   
        ) 
    }
}
    