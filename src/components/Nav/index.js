import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
// import styled from 'styled-components';



function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected
    } = props;


useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);


return (
    
    <div className='nav-container'>
        
    <header className="flex-row header px-1">
        <h2>
           <a data-testid="link" href='/'>
            Christopher 
            </a> 
        </h2>
        <nav>
            <ul className='flex-row'>
                {categories.map((category) => (
                    <li 
                    className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`}
                    key={category.name}
                    >
                        <span onClick={() => {
                            setCurrentCategory(category);
                            setContactSelected(false);
                        }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
    </div>
  
);
   } 

export default Nav;