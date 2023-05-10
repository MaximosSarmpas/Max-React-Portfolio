import React, { useState } from "react";
import Project from "../Project";
import eCommerce from "../../assets/projects/e-commerce.jpg"
import employeTracker from "../../assets/projects/employe-tracker.jpg"
import techBlog from "../../assets/projects/tech-blog.jpg"
import weatherDashboard from "../../assets/projects/weather-dashboard.jpg"
import teamProfileGenerator from "../../assets/projects/team-profile-gen.png"
import noteTacker from "../../assets/projects/note-taker.jpg"
import bookSearchEngine from "../../assets/projects/book-search.jpg"
function Portfolio() {
 
  const [projects] = useState([
    {
      name: "E-Commerce-Backend",
      description:"JavaScript/Node/Express/SQL/HTML/CSS",
      link: "https://drive.google.com/file/d/1NA7sYT6xxgpDGeDKbUUyCh9Minfnh7HJ/view",
      repo: "https://github.com/MaximosSarmpas/Max-E-commerce-Backend",
      image: eCommerce
    },
    {
      name: "Employee-Tracker",
      description:"JavaScript/SQL/Node/HTML/CSS",
      link: "https://drive.google.com/file/d/1G58sf2H3ryHG9nDVjDZaI5kvvItVdyDU/view",
      repo: "https://github.com/MaximosSarmpas/Max-Employee-Tracker",
      image: employeTracker
    },
    {
      name: "Tech-Blog",
      description: "JavaScript/Node/Express/SQL/Handle-bars/HTML/CSS",
      link: "https://pure-woodland-52896.herokuapp.com/dashboard",
      repo: "https://github.com/MaximosSarmpas/Max-Tech-Blog",
      image:techBlog
    },
    {
      name: "Weather-Dashboard",
      description: "JavaScript/jQuery/HTML/CSS/Server-Side API/Web API",
      link: "https://maximossarmpas.github.io/Max-Weather-Dashboard/",
      repo: "https://github.com/MaximosSarmpas/Max-Weather-Dashboard",
      image: weatherDashboard
    },
    {
      name: "Team-Profile-Generator",
      description:"JavaScript/Jest/HTML/CSS",
      link: "https://drive.google.com/file/d/1C4VGDQSRCBVJOqj5_QD5mpNgjkfhz912/view",
      repo: "https://github.com/MaximosSarmpas/Max-Team-Profile-Generator",
      image: teamProfileGenerator
    },
    {
      name: "Note-Taker",
      description:"JavaScript/Express/HTML/CSS",
      link: "https://thawing-plains-48231.herokuapp.com/notes",
      repo: "https://github.com/MaximosSarmpas/Max-Note-Taker",
      image:noteTacker
    
    },
   {
    name: "Book-Search-Engine",
    description:"JavaScript/GraphQL/React,MongoDB/Node.js/",
    link:"https://aqueous-journey-31563.herokuapp.com/",
    repo:"https://github.com/MaximosSarmpas/Max-Book-Search-Engine",
    image:bookSearchEngine
   }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects&&projects.map((project, idx) => (
           <Project project={project&&project} key={"project" + idx} />
         
          

          
        ))}
      </div>
    </div>
  );
}

export default Portfolio;