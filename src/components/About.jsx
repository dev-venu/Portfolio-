import { RiArrowRightFill } from "@remixicon/react";
import  secondImage from "../assets/second-image-removebg-preview.png";



const About = () => {


  return (


    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center
     bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">

     <div>

               <h2 className="text-2xl md:text-4xl font-bold">
                     About 
               </h2>

               <div className="md:flex flex-col  md:flex-row items-center">

                  <img  className="md:h-80"  src={secondImage} alt="image" />

               
            
               <ul>

                    <div className=" flex gap-3 py-4">
                         <RiArrowRightFill size={30} className="mt-1"/>
                         <span className="w-96">
                          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                FrontEnd Developer
                          </h1>
                           
                           <p className="text-sm md:text-md leading-tight">
                                A frontend developer is a professional who focuses on creating the visual and interactive parts of a
                                 website or web application that users directly see and use.
                                  They work with technologies like HTML, CSS, and JavaScript to design
                                   layouts, colors, fonts, buttons, menus, and other user interface elements.
                                    

                           </p>
                                 </span>
                                </div>
                                

                                <div className=" flex gap-3 py-4">
                         <RiArrowRightFill size={30} className="mt-1"/>
                         <span className="w-96">
                          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                BackEnd Developer
                          </h1>
                           
                           <p className="text-sm md:text-md leading-tight">
                               
                                A backend developer is responsible for building and maintaining the server-side of 
                                a website or application — the part that users don’t see. They work with 
                                programming languages such as Node.js, Python, Java, or PHP, and handle 
                                databases like MySQL or MongoDB. Their job involves managing data, creating APIs,
                                 and ensuring smooth communication between the frontend and the server.
                                  
                               
                           </p>
                                 </span>
                                </div>



                      <div className=" flex gap-3 py-4">
                         <RiArrowRightFill size={30} className="mt-1"/>
                         <span className="w-96">
                          <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                FullStack Developer
                          </h1>
                           
                           <p className="text-sm md:text-md leading-tight">
                               
                                    A full stack developer is a versatile professional who has the skills to work on both the 
                               frontend and backend of a website or application. They can design user interfaces, 
                               write server logic, manage databases, and handle the overall flow of data between 
                             the user and the server. Full stack developers understand the complete process of
                              web development, from designing the layout to deploying the final product online.
                            


                           </p>
                                 </span>
                                </div>


                                 

                              
                

                </ul>

           </div>     
          </div>
     </div>





  )
}

export default About;