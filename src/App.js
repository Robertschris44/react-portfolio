import React,{useState} from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Project from './components/Project';
import Nav from './components/Nav';


function App() {

  const [categories] = useState([
    {
      name: "About me",
      description:
      "Who am I?",
    },
    {
      name: "Contact",
      description:
      "Reach out:",
    },
    {
      name: "Portfolio",
      description: 
      "Hello",
    },
    {
      name: "Resume",
      description: "Download Resume"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    //add nav,footer,gallery
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
       <Gallery currentCategory={currentCategory}></Gallery> 
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
