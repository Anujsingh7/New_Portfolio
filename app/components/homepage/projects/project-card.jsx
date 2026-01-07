// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="relative rounded-lg border border-theme-border bg-theme-card w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-cyan-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-cyan-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-gray-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
        </div>
        <p className="text-center ml-3 text-theme-text text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-theme-border px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-syntax-keyword">const</span>
            <span className="mr-2 text-theme-text">project</span>
            <span className="mr-2 text-syntax-keyword">=</span>
            <span className="theme-text-muted">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-theme-text">name:</span>
            <span className="theme-text-muted">{`'`}</span>
            <span className="text-syntax-string">{project.name}</span>
            <span className="theme-text-muted">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-theme-text">tools:</span>
            <span className="theme-text-muted">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-syntax-string">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="theme-text-muted">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="theme-text-muted">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-theme-text">myRole:</span>
            <span className="text-syntax-boolean">{project.role}</span>
            <span className="theme-text-muted">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-theme-text">Description:</span>
            <span className="text-syntax-description">{' ' + project.description}</span>
            <span className="theme-text-muted">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-theme-text">Code:</span>
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-syntax-property">{' ' + project.code}</a>
            <span className="theme-text-muted">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-theme-text">Demo:</span>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-syntax-property">{' ' + project.demo}</a>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="theme-text-muted">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;