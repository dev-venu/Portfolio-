import { RiCss3Fill,RiFigmaFill,RiNextjsFill, RiHtml5Fill,RiJavascriptFill, RiReactjsFill, RiAngularjsFill, RiTailwindCssFill } from "@remixicon/react";
import { RiGoogleFill } from "@remixicon/react";
import { RiNetflixFill } from "@remixicon/react";
import { RiAmazonFill } from "@remixicon/react";



const Experience = () => {

  return (

    <div id="Experience" className="p-10 md:p-24">

          <h1 className="text-2xl md:text-4xl text-white font-bold">
            Experience
          </h1>

        <div className="flex flex-wrap items-center justify-around">

            <div className="flex flex-wrap md:w-2/5 gap-8 md:py-12 py-10">
                 
                 <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiHtml5Fill color="#E34F26" size={50}/>
                 </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiCss3Fill color="#1572b6" size={50}/>
                 </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiReactjsFill color="#61DAFB" size={50}/>
                 </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiJavascriptFill color="#F7DF1E" size={50}/>
                 </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiFigmaFill color="#F34C1F" size={50}/>
                 </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiAngularjsFill color="#A6120D" size={50}/>
                 </span>

                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiTailwindCssFill color="#00BCFF" size={50}/>
                 </span>
       
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <RiNextjsFill color="#F7F7F7" size={50}/>
                 </span>

            </div>

            <div>
              
               <div className="flex gap-10 bg-slate-950 bg-opacity-45  mt-5 rounded-lg p-4 items-center">
                        <RiGoogleFill color="#4285F4" size={50}/>
                    <span className="text-white">
                       <h2 className="leading-tight"> SoftWare Engineer, Google </h2>
                       <p className="text-sm leading-tight font-thin"> Sept 2023 - Present </p>
                       <ul className="text-sm p-2">
                             <li> -Work as software developer </li>
                             <li> -Senior Developer </li>
                       </ul>
                    </span>
               </div>

                <div className="flex gap-10 bg-slate-950 bg-opacity-45  mt-5 rounded-lg p-4 items-center">
                        <RiAmazonFill color="#FF9900" size={50}/>
                    <span className="text-white">
                       <h2 className="leading-tight"> SoftWare Engineer, Amazon </h2>
                       <p className="text-sm leading-tight font-thin"> Sept 2023 - Present </p>
                       <ul className="text-sm p-2">
                             <li> -Work as software developer </li>
                             <li> -Senior  Developer </li>
                       </ul>
                    </span>
               </div>

                <div className="flex gap-10 bg-slate-950 bg-opacity-45  mt-5 rounded-lg p-4 items-center">
                        <RiNetflixFill color="#E50914" size={50}/>
                    <span className="text-white">
                       <h2 className="leading-tight"> SoftWare Engineer, Netflix </h2>
                       <p className="text-sm leading-tight font-thin"> Sept 2023 - Present </p>
                       <ul className="text-sm p-2">
                             <li> -Work as software developer </li>
                             <li> -Senior  Developer </li>
                       </ul>
                    </span>
               </div>
            </div>
        </div>

    </div>

  )
}

export default Experience;