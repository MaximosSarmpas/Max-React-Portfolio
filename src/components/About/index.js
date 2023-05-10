import React from "react";
import Avatar from '@mui/material/Avatar';
import avatarImage from "../../assets/maxpic/Personal-Pic.jpg"

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <Avatar alt = "avatar"  src = {avatarImage}  sx={{ width: 250, height: 200 }}> </Avatar>
        </div>
        <p>
       A passionate learner with a strong desire to grow, I am excited to embark on a new journey in the world of tech.
       Having one step to complete the Full Stack Web Developer program at Carlton University Coding Bootcamp.

       During my time at the bootcamp , I started gaining proficiency in a range of programming
       languages and frameworks, including HTML, CSS, JavaScript, React, and Node.js.
       I also learned how to use databases and APIs to create complex web applications. Overall , I am enthusiastick about the prospect
        of entering the tech industry and trying to make a meaningful contribution to the field.
      </p>
      </div>
    </section>
  );
}

export default About;