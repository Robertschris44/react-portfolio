import React,{useState} from 'react';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Nav from './components/Nav';


function App() {
  const [categories] = useState([
    {
      name: "About"
    },
    {
      name: "Contact"
    },
    {
      name: "Portfolio"
    },
    {
      name: "Resume"
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
       <Portfolio currentCategory={currentCategory}></Portfolio> 
      <div>
        {(() => {
          console.log(currentCategory)
          switch (currentCategory.name) {
            case "About":
              return <About />
              case "Contact":
                return <Contact />
                case "Resume":
                  return <Resume />
                  case "Project":
                    return <Project />
                    default:
                      return "not found"
          }
        }) ()
        }
      </div>
      </main>
      <Footer />
    </div>
  );


};

  




  


export default App;
