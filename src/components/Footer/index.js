import React from "react";

function Footer() {

  
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/MaximosSarmpas"
    },
    {
      name: "fab fa-linkedin",
      link: "https://linkedin.com/in/maximos-sarmpas-53b30a275/"
    },
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
