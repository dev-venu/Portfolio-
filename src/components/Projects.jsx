import ProjectCard from "./ProjectCard";
import Amazon from "../assets/amazon.jpg";
import YouTube from "../assets/maxresdefault.jpg";
import Netflix from "../assets/Netfilx.png";

const Projects = () => {


  return (


    <div id="Projects" className="p-10 md:p-24 text-white ">

        <h1 className="text-2xl md:text-4xl text-white font-bold"> Projects </h1>
        
        <div className="py-2 px-8 flex flex-wrap gap-5">
               
                <ProjectCard
                      banner={Amazon}
                     title="Amazon Clone"
                     main="This is the demo projects for HTML,CSS,JS and ReactJS"
                />

                 <ProjectCard
                     banner={YouTube}
                     title="YouTube Clone"
                     main="This is the demo projects for HTML,CSS,JS and ReactJS"
                />

                 <ProjectCard
                    banner={Netflix}
                     title="Netflix Clone"
                     main="This is the demo projects for HTML,CSS,JS and ReactJS"
                />

        </div>

    </div>


  )
}

export default Projects;