// Importing necessary modules and components
import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

// The main App function component
function App() {
  
  // Define the initial state for the pages using useState hook
  const [pages] = useState([
    {
      name: "about me",
    },
    {
      name: "resume",
    },
    { 
      name: "portfolio"
     },
    {
       name: "contact" 
      },
    
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
