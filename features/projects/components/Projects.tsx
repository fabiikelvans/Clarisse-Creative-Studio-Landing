import React, {useEffect, useRef} from 'react';
import ProjectItem from "./ProjectItem";
import {skewGallery} from "../../../components/animations/gsap/Animate";
import {projects__data} from "../../../data/projectsData";
import gsap from 'gsap';


function Projects() {

    let projectRef = useRef(null);

    useEffect(() => {
     skewGallery(projectRef)
  
    }, []);


    return (
        <div className='projects' ref={(el) => (projectRef= el)}>
            {projects__data.map((project) => (

            <ProjectItem key={project.title}
                title={project.title}
                category={project.category}
                image={project.image1}
            />
            ))}

        </div>
    );
}

export default Projects;