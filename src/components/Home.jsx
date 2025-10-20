import  firstImage from "../assets/first-image-removebg-preview.png";
import TextChange from "./TextChange";

const Home = () => {

  return (


    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">

          <div className="md:w-2/4 md:pt-10">
               
               <h1 className="text-3xl py-2 md:py-2 md:text-6xl font-bold flex leading-normal tracking-tighter ">
                     <TextChange/>
               </h1>

                 <p className=" text-sm md:text-2xl tracking-tight">
                        a dedicated professional passionate about creating engaging and impactful digital experiences.
                       With a background in [your field or expertise, e.g., web development, design, etc.],
                        I strive to bring innovative ideas to life through thoughtful design and strategic problem-solving.
                         
                 </p>

                     <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
                     duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                              Contact Me
                     </button>

          </div> 
    
                      <div>
                         <img className="" src={firstImage} alt="firstImage"/>
                      </div>
                    

    </div>


  )
}

export default Home;