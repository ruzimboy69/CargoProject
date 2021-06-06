import React from 'react';
import ProjectTab from "./component/ProjectTab";

function Project(props) {
    return (
        <div>
            <div className={'container'}>
                <div className={'row my-5'}>
                    <ProjectTab/>
                </div>
            </div>
        </div>
    );
}

export default Project;