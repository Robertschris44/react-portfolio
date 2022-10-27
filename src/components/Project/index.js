import React from "react";

function Project({title,href,image,gitHub}) {
    return (
        <section className="project-section">
            <div>
                <h3>{title}</h3>
                <a href={gitHub} target="_blank">

                </a>

                <a href={href} target="_blank">
                    <img className="img-main" src={image} />
                </a>
            </div>

        </section>
    )
}


export default Project;