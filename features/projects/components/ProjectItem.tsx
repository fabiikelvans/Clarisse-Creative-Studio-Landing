import React, { useEffect, useRef } from "react";
import Image from "next/image";
// @ts-ignore
import hoverEffect from "hover-effect";
import Link from "next/link";


interface Props{
    title: string,
    category: string,
    image: string
}

function ProjectItem({title, category, image}: Props) {

    return (
        <div>
            <div className='project'>
                <div className="project__image">
                    <a href='#'>
                        <Image src={image} layout="fill" objectFit="cover" />
                    </a>
                </div>

                       <div>
                           <h2 className="project__title">{title}</h2>
                           <p className="project__category">{category}</p>
                       </div>


            </div>
        </div>
    );
}

export default ProjectItem;