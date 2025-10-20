import { RiGithubFill, RiInstagramFill, RiLinkedinFill } from "@remixicon/react";


const Footer = () => {

  return (

    <div id="Footer" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
           <div>
              <h1 className="text-2xl md:text-6xl  font-bold">Contact</h1>
              <h3 className="text-sm md:text-2xl font-normal"> Feel Free To reach out! </h3>
           </div>

             <ul className="text-sm md:text-xl">

                <li className="flex gap-1 items-center">
                    <RiInstagramFill/>
                      instagram.com/dev-venu
                </li>

                <li className="flex gap-1 items-center">
                    <RiLinkedinFill/>
                    linkedin.com/dev-venu
                </li>

                <li className="flex gap-1 items-center">
                   <RiGithubFill/>
                   github.com/dev-venu
                </li>

             </ul>

    </div>

  )
}

export default Footer;