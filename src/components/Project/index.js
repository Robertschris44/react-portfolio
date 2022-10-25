import React from "react";

function Project({title,href,gitHub}) {
    return (
        <section className="project-section">
            <div>
                <h3>{title}</h3>
                <a href={gitHub} target="_blank">

                </a>
            </div>

        </section>
    )
}


export default Project;