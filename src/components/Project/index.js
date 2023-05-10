import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {
  console.log(project)
  
  const { name, repo, link, description, image } = project;

  return (
    <div className="project" key={name && name}>
      <img
        
        src = {image}
        alt={removeHyphensAndCapitalize(name&&name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link&&link}>{removeHyphensAndCapitalize(name&&name)}</a>{' '}
          <a href={repo&&repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;